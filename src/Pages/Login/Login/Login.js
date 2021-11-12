import React, { useState } from 'react';
import './Login.css'
import { TextField, Button, CircularProgress, Alert } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { user, loginNewUser, loading, error } = useAuth();
    const [loginUser, setLoginUser] = useState({});
    const history = useHistory()

    const location = useLocation();


    const handleRegister = () => {
        history.push('/register')
    }
    const HandleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginUser = { ...loginUser };
        newLoginUser[field] = value;
        setLoginUser(newLoginUser);
    }
    const handleLogIn = (e) => {
        loginNewUser(loginUser.email, loginUser.password, history, location)
        e.preventDefault();
    }
    return (
        <div className='login-section'>
            <div className='login-form'>
                <h1>Please Login</h1>
                <form onSubmit={handleLogIn}>
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
                    <Button
                        sx={{ width: "50%", m: 1 }}
                        onClick={handleRegister}
                        variant="Outlined">New User? Please Register!</Button>
                    <Button
                        sx={{ width: "50%", m: 1 }}
                        type='submit'
                        variant="contained">Login</Button>


                </form>
                {
                    loading && <CircularProgress></CircularProgress>
                }
                {
                    user?.email && <Alert severity="success">Successfully Login</Alert>
                }
                {
                    error && <Alert severity="error">{error}</Alert>
                }
            </div>
        </div>
    );
};

export default Login;