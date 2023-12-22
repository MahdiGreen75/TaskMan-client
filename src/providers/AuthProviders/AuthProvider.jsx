/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

// import React from 'react';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const signUp = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { signUp, loginUser, logOutUser, googleSignIn, logOut, isLoading, user };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;