import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
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

    const updateUser = (userInfo) => {
        return updateProfile(user,userInfo)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser)
        });
         return () => unsubscribe();
    },[])

    const userInfo={
        createUser,
        signUp,
        logOut,
        updateUser ,
        googleSign ,
        user 
        

    };

    


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;