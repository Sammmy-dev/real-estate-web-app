import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Profile = () => {
  const {currentUser} = useSelector(state => state.user)
  const fileRef= useRef(null)
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState(undefined)
  // const [formData, setFormdata] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file) 
    }
  }, [file])

  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ml_default');
      
      const res = await fetch('https://api.cloudinary.com/v1_1/dl9mx2tvo/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setImageUrl(data.secure_url);
      console.log(`upload successful  ${data.secure_url}`);
      
    } catch (err) {
      console.error('Upload error:', err);
    } 
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Profile</h1>

      <form className='flex flex-col items-center gap-4'>
        <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} className='hidden' accept='image/*' />

        <img onClick={()=>{fileRef.current.click()}} className=' mx-auto rounded-full w-24 h-24 object-cover cursor-pointer' src={currentUser.avatar} alt=""/>

        <input type="text" placeholder='Username' className='w-full border p-3 rounded-lg' value={currentUser.username} id='username'/>

        <input type="text" placeholder='Email' className='w-full border p-3 rounded-lg' value={currentUser.email} id='email'/>

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