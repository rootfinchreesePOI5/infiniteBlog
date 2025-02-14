import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../Context/NewsContext'
import { useNavigate } from 'react-router-dom';

function Related({ source, title }) {
  const { latest } = useContext(NewsContext);
  const navigate = useNavigate();
  const [related, setRelated] = useState([]);

  useEffect(() => {
    setRelated(latest.filter(item => item.source.name === source && item.title !== title));
  }, [source, title, latest]); // Remove 'related' to prevent infinite loop

  return latest && (
    <div className='px-[5%] mt-12 flex flex-col gap-4'>
      <p className='underline text-2xl'>Related News</p>
      <div className='grid md:grid-cols-2 gap-12'>
        {related.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/News/${item.title}`);
              window.scrollTo(0, 0);
            }}
            className='flex flex-col items-center gap-6 cursor-pointer'
          >
            {
              item.image ? <img src={item.image} alt="" /> : ""
            }
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl md:text-3xl font-bold'>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Related;
