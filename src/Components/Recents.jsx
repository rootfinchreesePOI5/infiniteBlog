import React, { useContext } from 'react';
import { NewsContext } from '../Context/NewsContext';
import { useNavigate } from 'react-router-dom';

function Recents() {
  const { error, latest } = useContext(NewsContext);
  const navigate = useNavigate();

  return latest && (
    <div className='flex flex-col gap-6 w-full'>
      {error && <p className='text-red-500'>{error}</p>}
      <p className='text-2xl font-semibold underline'>Recent News</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {latest.slice(4, 8).map((item, index) => (
          <div key={index} onClick={() => navigate(`/News/${item.title}`)} className='cursor-pointer flex flex-col gap-3 p-4   transition-all duration-300'>
            {
              item.image ? <img src={item.image} alt="" /> : ""
            }
            <div className='flex flex-col gap-2'>
              <h1 className='font-semibold text-lg'>{item.title}</h1>
              <h3 className='text-sm'>Reported by: <span className='font-medium underline'>{item.source.name}</span></h3>
              <h5 className='text-sm text-gray-500'>Read more...</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recents;