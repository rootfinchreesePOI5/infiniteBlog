import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import Add from '../Components/Add'
import { useNavigate } from 'react-router-dom';
import { Boxing, plusB, plusW } from '../assets/images';

function Myblog() {
  const { posts, setPosts, token, userData } = useContext(AppContext);
  const date = new Date()
  const today = date.getDate()
  const [Blogs, setBlogs] = useState([
    {
      img: Boxing,
      Title: "Napheesa Collier wins $200K by taking Unrivaled 1-on-1 crown",
      Description: "Napheesa Collier of the WNBA’s Minnesota Lynx took home $200,000 on Friday after she beat Washington Mystics forward Aaliyah Edwards in the final of Unrivaled’s 1-on-1 tournament.",
      Content: "MEDLEY, Fla. — Napheesa Collier of the WNBA’s Minnesota Lynx took home $200,000 on Friday after she beat Washington Mystics forward Aaliyah Edwards in the final of Unrivaled’s 1-on-1 tournament. The winner’s check was the largest one-day prize in woman",
      Source: userData.username,
      publishedDate: today,
      url: '"https://nypost.com/2025/02/15/sports/napheesa-collier-wins-200k-by-taking-unrivaled-1-on-1-crown/"',
    }
  ]);

  useEffect(() => {
    if (Blogs.length > 0) {
      setPosts(true)
    }
  }, [Blogs])
  const navigate = useNavigate();
  return (
    <div className='w-screen h-screen flex items-center justify-center py-[10%] px-[5%]'>
      {
        posts === false ? <div>
          <p className='text-2xl md:text-6xl lg:text-8xl font-extrabold text-stone-300'>OPPS! You Have No Posts</p>
          <Add />
        </div> : <div >
          <div className='grid grid-cols-3 gap-6 '>
            {
              Blogs.map((item, index) => {
                return <div key={index} className="  overflow-hidden hover:scale-[1.02]  transition-all duration-700 cursor-pointer flex flex-col gap-3 min-h-[50vh]">
                  <img className='w-full rounded-lg' src={item.img} alt="" />
                  <div>
                    <h1 className="text-xl font-semibold  line-clamp-2">{item.Title}</h1>
                    <div className="flex justify-between items-center mt-2">
                      <h5 className="text-sm text-dark-main font-medium">{item.Source}</h5>
                      <span className="text-xs ">Read More →</span>
                    </div>
                  </div>
                </div>
              })
            }
            <div onClick={() =>navigate('/add/Blog')} className='w-[50vh] min-h-[50vh] rounded-2xl bg-zinc-800 border flex items-center justify-center cursor-pointer'>
              <img src={plusB} alt="" />
            </div>
          </div>
          <Add array={Blogs} />
        </div>
      }
    </div>
  )
}

export default Myblog
