import React, { useEffect, useState } from 'react'
import { blog, newspaper, story } from '../assets/images'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function Categories() {
  const navigate = useNavigate()
  return (
    <div className='w-screen py-[16%] md:py-0 md:h-screen flex items-center justify-center'>
        <div className='flex flex-col py-12 px-6 md:px-12 justify-center items-center md:w-[70%] gap-6'>
          <div className='grid md:grid-cols-2 items-center gap-6 w-full'>
            <div className=' md:relative'>
              <img className='min-h-[20vh] rounded-sm' src={blog} alt="" />
              <button onClick={() => navigate('/Blog')} className='md:absolute top-[50%] left-[35%] p-2 text-white bg-black w-[25%]'>Blog Posts</button>
            </div>
            <div className='  md:relative'>
              <img className=' min-h-[20vh] rounded-sm' src={story} alt="" />
              <button onClick={() => navigate('/Stories')} className='md:absolute top-[50%] left-[35%] p-2 text-white bg-black w-[25%]'>Stories</button>
            </div>
          </div>
          <div className='  md:relative'>
            <img className=' min-h-[20vh] rounded-sm' src={newspaper} alt="" />
            <button onClick={() => navigate('/News')} className='md:absolute top-[50%] left-[35%] p-2 text-white bg-black w-[25%]'>News</button>
          </div>
        </div>
    </div>
  )
}

export default Categories
