import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password);

    };

    
    const provider = new GoogleAuthProvider();
    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const signUp = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    };

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser,userInfo)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser)
            setLoading(false)
        });
         return () => unsubscribe();
    },[])

    const userInfo={
        createUser,
        signUp,
        logOut,
        updateUser ,
        googleSign ,
        user,
        loading 
        

    };

    


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;