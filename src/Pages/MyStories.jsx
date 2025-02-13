import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import Add from '../Components/Add'

function MyStories() {
    const {stories, setStories} = useContext(AppContext);
    const [Stories , setMyStories] = useState([]);
  return (
    <div className='w-screen h-screen flex items-center justify-center py-[10%]'>
      {
        stories === false ? <div>
          <p className='text-2xl md:text-6xl lg:text-8xl font-extrabold text-stone-300'>OPPS! You Have No Stories</p>
          <Add/>
        </div> : <div>
          <Add/>
        </div>
      }
    </div>
  )
}

export default MyStories
