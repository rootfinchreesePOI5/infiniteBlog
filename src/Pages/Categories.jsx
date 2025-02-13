import React, { useEffect, useState } from 'react'
import { blog, newspaper, story } from '../assets/images'
import { useNavigate } from 'react-router-dom'

function Categories() {
  const navigate = useNavigate()
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Preload images before rendering the UI
  useEffect(() => {
    const images = [blog, newspaper, story]
    let loadedCount = 0

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        if (loadedCount === images.length) {
          setImagesLoaded(true)
        }
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === images.length) {
          setImagesLoaded(true)
        }
      }
    })
  }, [])

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      {imagesLoaded ? (
        <div className='flex flex-col py-12 px-12 justify-center items-center w-[70%] gap-6'>
          <div className='grid grid-cols-2 items-center gap-6 w-full'>
            <div className='min-h-[30vh] relative'>
              <img className='rounded-sm' src={blog} alt="" />
              <button onClick={() => navigate('/Blog')} className='absolute top-[50%] left-[35%] p-2 text-white bg-black w-[25%]'>Blog Posts</button>
            </div>
            <div className=' min-h-[30vh] relative'>
              <img className=' rounded-sm' src={story} alt="" />
              <button onClick={() => navigate('/Stories')} className='absolute top-[50%] left-[35%] p-2 text-white bg-black w-[25%]'>Stories</button>
            </div>
          </div>
          <div className=' min-h-[30vh] relative w-full'>
            <img className=' rounded-sm' src={newspaper} alt="" />
            <button onClick={() => navigate('/News')} className='absolute top-[50%] left-[35%] p-2 text-white bg-black w-[25%]'>News</button>
          </div>
        </div>
      ) : (
        <p>Loading images...</p> // Show a loading message while images are loading
      )}
    </div>
  )
}

export default Categories
