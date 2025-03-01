// import React from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/user.slice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async ()=>{
        try {
            const provider= new GoogleAuthProvider();
            const auth = getAuth(app);

            const result= await signInWithPopup(auth, provider);
            const res = await fetch("/api/auth/google", 
                {
                  method:'POST',
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email, 
                    photo: result.user.photoURL,
                  }),
                }
            );
            const data = await res.json()
            dispatch(signInSuccess(data))
            navigate("/")
            
            
        } catch (error) {
            console.log("could not sign in with google", error);  
            // throw error
        }
    };
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-500 text-white rounded-lg uppercase hover:bg-red-600 p-3 disabled:opacity-80'>
        Continue with google
    </button>
  )
}

export default OAuth