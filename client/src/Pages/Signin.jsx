import React, { useDebugValue, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/user.slice';


const SignUp = () => {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
 const {loading, error} = useSelector((state)=>state.user);
  const handleChange = (e)=>{
        setFormData({
          ...formData,
          [e.target.id]: e.target.value
        })
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch("/api/auth/signin", 
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData),
        }
      );
      const data = await res.json();
      
      if (data.success === false) {
        // setLoading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message))
        return;
      };
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data))
      // localStorage.setItem("userInfo",JSON.stringify(data.token)) 
      console.log(data);
      navigate('/')
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message))
    }
    
    // console.log(data);
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' my-7 text-center text-3xl font-semibold'>Sign In</h1>
      {error && <p className='text-red-500 mt-3'>{error}</p>}
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-3 mt-10'>
        <input type="email" placeholder='Email' className='border block p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='Password' className='border block p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-500 text-white rounded-lg uppercase hover:bg-slate-950 p-3 disabled:opacity-80'>
          {loading ? 'loading...': "Sign In"}
        </button>
      </form>
      <p className='mt-3'>Don't have an account? <Link to="/sign-up" className='text-blue-500'>SignUp</Link></p>
      {/* {error && <p className='text-red-500 mt-3'>{error}</p>} */}
    </div>
  )
}

export default SignUp