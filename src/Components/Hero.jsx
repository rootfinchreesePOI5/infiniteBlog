// Hero Component
import React, { useContext } from 'react';
import { NewsContext } from '../Context/NewsContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { AppContext } from '../Context/AppContext';

function Hero() {
  const { latest, error } = useContext(NewsContext);

  const navigate = useNavigate();

  return latest && (
    <div className='flex flex-col md:flex-row gap-6 w-full'>
      {error && <p className='text-red-500'>{error}</p>}
      <div className='flex flex-col'>
        <p className='text-2xl md:text-3xl font-semibold'>Top Headlines</p>
        {latest.slice(3, 4).map((item, index) => (
          <div key={index} onClick={() => { navigate(`/News/${item.title}`) }} className='cursor-pointer flex flex-col md:flex-row items-center gap-8 w-full p-4  transition-all duration-300'>
            {
              item.image ? <img src={item.image} alt="" /> : ""
            }
            <div className='flex flex-col gap-3'>
              <h1 className='text-xl md:text-2xl font-bold'>{item.title}</h1>
              <h5 className='text-md italic text-gray-700'>{item.description}</h5>
              <p className='text-sm text-gray-600'>{item.content?.slice(0, 150)}...</p>
              <h3 className='text-sm'>Reported by: <span className='font-medium underline'>{item.source.name}</span></h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
