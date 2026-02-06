import {React, useState, useContext, createContext, useEffect} from 'react'
import { auth } from '../../../firebase/firebase';
import { onAuthStateChanged} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth(){
    return AuthContext;
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useEffect(null);
    const [userLoggedIn, setUserLoggedIn] = useEffect(false);
    const [loading, setLoading] = useEffect(false);


useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, initializer);
     return unsubscribe;
}, [])

async function initializer (user){
      if(user){
        setCurrentUser(...user);
        setUserLoggedIn(true);
      }
      else{
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
      setLoading(false);
}

const value = {
    currentUser,
    userLoggedIn,
    loading
}

return(
    <AuthContext.Provider value={value}>
         {!loading && children}
    </AuthContext.Provider>
)
}