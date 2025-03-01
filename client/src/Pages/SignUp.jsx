import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e)=>{
        setFormData({
          ...formData,
          [e.target.id]: e.target.value
        })
  };
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", 
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log(data);
      
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      };
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
    
    // console.log(data);
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' my-7 text-center text-3xl font-semibold'>SignUp</h1>
      {error && <p className='text-red-500 mt-3'>{error}</p>}
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-3 mt-10'>
        <input type="text" placeholder='Username' className='border block p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type="email" placeholder='Email' className='border block p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='Password' className='border block p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-500 text-white rounded-lg uppercase hover:bg-slate-950 p-3 disabled:opacity-80'>
          {loading ? 'loading...': "Signup"}
        </button>
        <OAuth/>
      </form>
      <p className='mt-3'>Have an account? <Link to="/sign-in" className='text-blue-500'>Signin</Link></p>
    </div>
  )
}

export default SignUp