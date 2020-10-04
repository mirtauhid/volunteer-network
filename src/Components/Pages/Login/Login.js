import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './Login.css';
import Logo from '../../../logos/Group 1329.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useParams } from 'react-router-dom';

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { id } = useParams();
    console.log(id);
    const history = useHistory()
    const pageRedirect = (id) => {
        history.push(`/registration/${id}`);
    }

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState({
        isLoggedIn: false,
        name: "",
        email: "",
        uid: "",
        error: "",
        success: ""
    });

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, uid } = res.user;
                const newUser = {
                    isLoggedIn: true,
                    name: displayName,
                    email: email,
                    uid: uid,
                    error: false,
                    success: true
                }
                setUser(newUser);
                setLoggedInUser(newUser);
                pageRedirect(id);
            })
            .catch(err => {
                console.log(err);
                const newUser = {
                    isLoggedIn: false,
                    name: "",
                    email: "",
                    uid: "",
                    error: true,
                    success: false
                }
                setUser(newUser);
                setLoggedInUser(newUser);
            });
    }

    return (
        <Container className="login-container" >
            <img id="main-logo" src={Logo} alt="" />
            <div className="login-box">
                <h3>Login With</h3>
                <Button onClick={handleGoogleSignIn} variant="light"> <img id="gIcon" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" /> Continue with Google</Button>
                <br />
                <p>Don't have an account? <span><a href="/home">Create an account</a></span></p>
            </div>
        </Container>
    );
};

export default Login;