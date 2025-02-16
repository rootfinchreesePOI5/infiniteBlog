import React, { useContext, useEffect, useState } from 'react'
import { lock, plusW } from '../assets/images'
import { AppContext } from '../Context/AppContext'
import { useNavigate} from 'react-router-dom';

function Add({array}) {
  const {token , type } = useContext(AppContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const changeShow = () => {
    show === false ? setShow(true) : setShow(false)
  }
  return type && (
    <div style={array ? {display:'none'} : {}} className={`fixed flex transition-all duration-700 top-[90%] right-7 md:right-10 shadow-2xl shadow-black rounded-full`}>
      <div>
        {
          token ?
            <button onClick={changeShow} className={`flex items-center justify-center bg-main rounded-full w-12 h-12`}>
              <img src={plusW} alt="" />
            </button> :
            <button onClick={() => navigate('/Login')} className={`flex items-center justify-center bg-main rounded-full w-12 h-12`}>
              <img src={lock} alt="" />
            </button>
        }
      </div>
      <div className={show ? 'absolute bg-white text-black w-[300%] p-2 px-5 right-full bottom-10 shadow-gray-600 shadow-2xl flex flex-col items-center justify-center gap-2' : 'hidden'}>
        <p style={type === 'Blog' ? {display:'flex'} : {display:'none'}} className='cursor-pointer' onClick={() => navigate('/add/Blog')}>New blog</p>
        <p style={type === 'Blog' ? {display:'none'} : {display:'flex'}}  className='cursor-pointer' onClick={() => navigate('/add/Story')}>New Story</p>
      </div>
    </div>
  )
}

export default Add
