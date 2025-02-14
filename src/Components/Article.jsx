import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewsContext } from '../Context/NewsContext'
import Related from './Related';

function Article() {
    const { id: params } = useParams();
    const { latest } = useContext(NewsContext);
    const [article, setArticle] = useState([]);

    useEffect(() => {
        if (params) {
            setArticle(latest.filter(item => item.title === params));
        }
    }, [params, latest]); // Add latest to ensure data updates

    return latest && (
        <div className='flex flex-col gap-5 py-[26%] md:py-[8%] px-[5%]'>
            {article.map((item, index) => (
                <div key={index} className='flex flex-col gap-5'>
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                        {
                            item.image ? <img className='w-full md:w-[50%]' src={item.image} alt="" /> : ""
                        }
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-2xl md:text-3xl font-bold'>{item.title}</h1>
                            <h5 className='md:text-xl italic underline'>{item.description}</h5>
                            <p className='text-sm'>{item.content}</p>
                            <h3>
                                Reported by: <span className='p-1 underline'>{item.source.name}</span>
                            </h3>
                        </div>
                    </div>
                    <Related source={item.source.name} title={item.title} />
                </div>
            ))}
        </div>
    );
}

export default Article;
