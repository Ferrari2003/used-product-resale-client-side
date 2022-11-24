import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email,password);
    };

    const provider = new GoogleAuthProvider();

    const googleSign = () => {
        return signInWithPopup(auth, provider)
    }

    const signUp = (email,password) => {
        return signInWithEmailAndPassword(auth, email,password)
    };



    const userInfo={
        createUser,
        signUp,
        googleSign  
    };


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;