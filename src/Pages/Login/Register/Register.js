import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Alert } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './Register.css'
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const {registerNewUser,loading, user, error} = useAuth();
    const [loginUser, setLoginUser] = useState({});
    const history = useHistory()
    const handleRegister = ()=>{
        history.push('/login')
    }
    const HandleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginUser = { ...loginUser };
        newLoginUser[field] = value;
        setLoginUser(newLoginUser);
    }
    const handleLogIn = (e) => {
        if(loginUser.password !==loginUser.password2){
            alert('Password did not match')
            return
        }
        registerNewUser(loginUser.email, loginUser.password, loginUser.name, history);
        e.preventDefault();
    }
    return (
        <div className='register-section'>
        <div className='login-form'>
            <h1>Please Register</h1>
            {!loading && <form onSubmit={handleLogIn}>
                <TextField
                    sx={{ width: "70%", m: 1 }}
                    id="outlined-basic"
                    label="Your Name"
                    name='name'
                    onBlur={HandleOnBlur}
                    variant="outlined" />
                <TextField
                    sx={{ width: "70%", m: 1 }}
                    id="outlined-basic"
                    label="Your Email"
                    name='email'
                    type='email'
                    onBlur={HandleOnBlur}
                    variant="outlined" />
                <TextField
                    className='field'
                    sx={{ width: "70%", m: 1 }}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name='password'
                    onBlur={HandleOnBlur}
                    autoComplete="current-password"
                />
                <TextField
                    className='field'
                    sx={{ width: "70%", m: 1 }}
                    id="outlined-password-input"
                    label="Retype Password"
                    type="password"
                    name='password2'
                    onBlur={HandleOnBlur}
                    autoComplete="current-password"
                />
                <Button
                    sx={{ width: "50%", m: 1 }}
                    onClick={handleRegister}
                    variant="Outlined">Registered User? Please Login!</Button>
                <Button
                    sx={{ width: "50%", m: 1 }}
                    type='submit'
                    variant="contained">Register</Button>
                    

            </form>}
            {
                loading && <CircularProgress></CircularProgress>
            }
            {
                user?.email && <Alert severity="success">Successfully Register</Alert>
            }
            {
                error && <Alert severity="error">{error}</Alert>
            }
        </div>
    </div>
    );
};

export default Register;