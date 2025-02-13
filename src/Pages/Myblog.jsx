import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import Add from '../Components/Add'
import { useNavigate } from 'react-router-dom';

function Myblog() {
    const {posts, setPosts , token } = useContext(AppContext);
    const [Blogs , setBlogs] = useState([]);
    const navigate = useNavigate()
  return (
    <div className='w-screen h-screen flex items-center justify-center py-[10%]'>
      {
        posts === false ? <div>
          <p className='text-2xl md:text-6xl lg:text-8xl font-extrabold text-stone-300'>OPPS! You Have No Posts</p>
          <Add/>
        </div> : <div>
          <Add/>
        </div>
      }
    </div>
  )
}

export default Myblog
