import { useEffect, useState } from "react";
import firebaseInitializeApp from "../Firebase/firebaseInitialze";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


firebaseInitializeApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();

    const registerNewUser = (email, password, name, history) => {
        setLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                //Set display name
                const newUser = { email, displayName: name }
                setUser(newUser)
                //Save user data in DB
                userSaveDb(email, name)
                //Update user prifile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    
                }).catch((error) => {
                    
                });

                history.push('/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoding(false)
            });
    }

    const loginNewUser = (email, password, history, location) => {
        setLoding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const path = location?.state?.from || '/'
                history.replace(path)
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoding(false)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoding(false);
        });
    }, [])

    const logOutUser = () => {
        const auth = getAuth();
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => {
                setLoding(false)
            });
    }

    const userSaveDb = (email, displayName) =>{
        const user = {email, displayName};
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setAdmin(data.admin)
        })
    },[user.email])
    
    return {
        loading,
        user,
        admin,
        registerNewUser,
        logOutUser,
        loginNewUser,
        error,
    }
}

export default useFirebase;