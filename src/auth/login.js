import { Link, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import firebase from './../firebase';
import { Redirect } from 'react-router-dom';
import history from '../history';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);

            resetInput();
            history.push('/');
            window.location.reload(false);
        } catch (error) {
            console.error(error);
        }
    };
    const login = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            resetInput();
            console.log('LOGGED IN');
            history.push('/');
            window.location.reload(false);
        } catch (error) {
            console.error(error);
        }
    };
    const logOut = () => {
        firebase.auth().signOut();
        console.log('LOGGED OUT');
    };
    const resetInput = () => {
        setEmail('');
        setPassword('');
    };
    return (
        <div>
            <Typography variant="h3"> Login </Typography>
            <Typography vairant="h5">Login/Register;</Typography>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <Link href="/">
                <button onClick={register}>Register</button>
            </Link>
            <button onClick={login}>Login</button>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
};

export default Login;
