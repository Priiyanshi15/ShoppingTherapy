import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { doSendEmailVerification, doSignInWithEmailAndPassword } from '../../../firebase/Auth';

const login = () => {
  const {userLoggedIn} = useAuth();

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[isSigningIn, setIsSigningIn] = useState(false);
  const[errorMessage, setErrorMessage] = useState('');

  const OnFormSubmit = async(e) => {
       e.preventDefault();
       if(!isSigningIn){
        setIsSigningIn(true);
        await doSignInWithEmailAndPassword(email, password);
        doSendEmailVerification();
       }
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center row-height-90vh">
        <div className="d-flex flex-column login-form-size login-form-custom border rounded">
          <h3 className='m-3 p-1 w-100 text-center'>WELCOME BACK</h3>
          {/* email */}
          <form onSubmit={OnFormSubmit}></form>
          <label htmlFor="" className='m-1 mx-2'><h4 className='p-1 text-secondary'>Email</h4></label>
          <input type="email" className='mx-2 border rounded' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
    </div>
  )
}

export default login

