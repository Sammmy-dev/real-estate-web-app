import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Profile</h1>

      <form className='flex flex-col items-center gap-4'>

        <img className=' mx-auto rounded-full w-24 h-24 object-cover' src={currentUser.avatar} alt="" />

        <input type="text" placeholder='Username' className='w-full border p-3 rounded-lg' id='username'/>

        <input type="text" placeholder='Email' className='w-full border p-3 rounded-lg' id='email'/>

        <input type="text" placeholder='Password' className='w-full border p-3 rounded-lg' id='password'/>

        <button className='bg-slate-700 text-white rounded-lg uppercase hover:bg-slate-950 p-3 disabled:opacity-80 w-full'>
          update
        </button>
      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
      
    </div>
  )
}

export default Profile