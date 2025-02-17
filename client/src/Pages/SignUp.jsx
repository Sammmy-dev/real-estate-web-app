import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' my-7 text-center text-3xl font-semibold'>SignUp</h1>
      <form action="" className='flex flex-col gap-3 mt-10'>
        <input type="text" placeholder='Username' className='border block p-3 rounded-lg' id='username'/>
        <input type="email" placeholder='Email' className='border block p-3 rounded-lg' id='email'/>
        <input type="password" placeholder='Password' className='border block p-3 rounded-lg' id='password'/>
        <button className='bg-slate-500 text-white rounded-lg uppercase hover:bg-slate-950 p-3'>Sign up</button>
      </form>
      <p className='p-3'>Have an account? <Link to="/sign-in" className='text-blue-500'>Signin</Link></p>
    </div>
  )
}

export default SignUp