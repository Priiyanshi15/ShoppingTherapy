import React from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updatePassword, sendEmailVerification} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async(email, password) => {
    return createUserWithEmailAndPassword(email, password);
};

export const doSignInWithEmailAndPassword = async(email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async() => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result
};

export const doSignOut = async() => {
    return auth.signOut();
};

export const doPasswordReset = async(email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = async(password) => {
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = async() => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`,
    });
};

