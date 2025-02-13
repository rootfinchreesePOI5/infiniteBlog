import React, { useContext, useState } from 'react'
import { email, emptyProfile, f_1, logo, upload } from '../assets/images'
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';

function Profile() {
  const { token, setToken, userData, setuserData, notify, backendUrl, getUserData } = useContext(AppContext);
  const navigate = useNavigate()
  const [type, setType] = useState('Log Out');
  const [image, setImage] = useState(false)
  const [isEdit, setEdit] = useState(false);

  const logOut = () => {
    setToken(false);
    navigate('/Login');
    notify()
    localStorage.removeItem('token')
  }

  const Editinfo = () => {
    setEdit(!isEdit);
  }

  const saveInfo = async () => {
    try {
      const formData = new FormData();
      formData.append('username', userData.username);
      formData.append('email', userData.email);
      if (image) {
        formData.append('image', image);
      }
  
      // Show loading toast and store its ID
      const toastId = toast.loading('Sending Data...');
  
      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token
        }
      });
  
      console.log("Response:", data);
  
      // Remove loading toast
      toast.dismiss(toastId);
  
      if (data.success) {
        toast.success(data.message);
        getUserData();
        setEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Update Error:", error);
  
      // Remove loading toast
      toast.dismiss();
  
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };
  


  return (
    <div className='h-screen w-screen flex items-center justify-center px-4 sm:px-6 md:px-12'>
      <div className='w-[90%]  flex items-center justify-center'>
        <div className='card w-full max-w-lg  p-5 border border-zinc-500 rounded-xl flex flex-col gap-8 items-center h-fit justify-center'>
          {
            isEdit ?
              <label className='relative' htmlFor="imgPicker">
                <img className='w-32 sm:w-36 rounded-full opacity-45' src={image ? URL.createObjectURL(image) : upload} alt="" />
                <img className='w-10 sm:w-12 rounded-full absolute bottom-10 sm:bottom-12 left-11 lg:left-12' src={image ? " " : emptyProfile} alt="" />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} id='imgPicker' className='hidden' />
              </label>
              :
              <img className='w-[100px] md:w-36 rounded-full' src={userData.image} alt="" />
          }

          {/* User Info */}
          <div className='flex flex-col gap-3 w-full'>
            <div>
              {isEdit ? (
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
                  <p className='text-dark-main'>Username:</p>
                  <input className='px-[10px] sm:px-[20px] text-black w-full sm:w-auto' onChange={(e) => setuserData(prev => ({ ...prev, name: e.target.value }))} type="text"  placeholder='@username_sample' required />
                </div>
              ) : (
                <div className='flex gap-3'>
                  <p className='text-dark-main'>Username:</p>
                  <span>{userData.username}</span>
                </div>
              )}
            </div>

            <div>
              {isEdit ? (
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
                  <p className='text-dark-main'>Email:</p>
                  <input className='px-[10px] sm:px-[20px] text-black w-full sm:w-auto' onChange={(e) => setuserData(prev => ({ ...prev, email: e.target.value }))} type="email" placeholder='user@gmail.com' required />
                </div>
              ) : (
                <div className='flex gap-3'>
                  <p className='text-dark-main'>Email:</p>
                  <span>{userData.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className='flex flex-wrap gap-4 md:w-full justify-center'>
            <button onClick={isEdit ? saveInfo : Editinfo} className='p-2 px-6 md:w-full sm:px-12 bg-dark-main hover:bg-zinc-300 hover:text-black transition-all duration-700 text-white'>{isEdit ? 'Save' : 'Edit Profile'}</button>
            <button onClick={() => { logOut() }} className='p-2 px-6 md:w-full sm:px-12 bg-red-600 text-white hover:bg-zinc-300 hover:text-black transition-all duration-700'>{type}</button>
          </div>
          <div className='flex justify-between items-center w-full'>
            <p>Followers:<span>{userData.followers}</span></p>
            <p>Following:<span>{userData.following}</span></p>
            <p>Posts:<span>{userData.following}</span></p>
            <p>Stories:<span>{userData.following}</span></p>
          </div>
          <div className='w-full'>
            <button onClick={''} className='p-2 px-6 sm:px-12 bg-red-600 text-white w-full hover:bg-zinc-300 hover:text-black transition-all duration-700'>Remove Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
