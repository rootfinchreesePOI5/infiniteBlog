import React from 'react';
import { Trendy } from '../assets/Recent';
import { Recent } from '../assets/Recent';
import { Trending } from '../assets/Whole_news';
import { Recent_News } from '../assets/Whole_news';
import { Link } from 'react-router-dom';

const News = () => {
    const show = () => {
        let part = document.getElementById("news-container");
        part.style.display = "none";
        let whole = document.getElementById("whole-news-container");
        whole.style.display = "contents";
    };

    return (
        <div className='News'>
            <div id='news-container' className="News-container">
                <div className="news-items">
                    <h1 className='NEWS_TYPE'>Trendy News</h1>
                    {Trendy.map((item, index) => (
                        <div key={index} className='Trendy_News'>
                            <div
                                className="img-div"
                                style={{ backgroundImage: `url(${item.img})` }}>
                                <Link to={`${item.path}`}><h1>{item.key}</h1></Link>
                            </div>
                            <div className="read">
                                <h5>{item.Read}</h5>
                                <p>{item.Title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="news-items">
                    <h1 className='NEWS_TYPE'>Recent News</h1>
                    {Recent.map((item, index) => (
                        <div key={index} className='Trendy_News'>
                            <div
                                className="img-div"
                                style={{ backgroundImage: `url(${item.img})` }}>
                                <Link to={`${item.path}`}><h1>{item.key}</h1></Link>
                            </div>
                            <div className="read">
                                <h5>{item.Read}</h5>
                                <p>{item.Title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id='whole-news-container' className="Whole-News-container">
                <div className="news-items">
                    <h1 className='NEWS_TYPE'>Trendy News</h1>
                    {Trending.map((item, index) => (
                        <div key={index} className='Trendy_News'>
                            <div
                                className="img-div"
                                style={{ backgroundImage: `url(${item.img})` }}>
                                <Link to={`${item.path}`}><h1>{item.key}</h1></Link>
                            </div>
                            <h5>{item.Read}</h5>
                            <p>{item.Title}</p>
                        </div>
                    ))}
                </div>
                <div className="news-items">
                    <h1 className='NEWS_TYPE'>Recent News</h1>
                    {Recent_News.map((item, index) => (
                        <div key={index} className='Trendy_News'>
                            <div
                                className="img-div"
                                style={{ backgroundImage: `url(${item.img})` }}>
                                <Link to={`${item.path}`}><h1>{item.key}</h1></Link>
                            </div>
                            <h5>{item.Read}</h5>
                            <p>{item.Title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={show} className='read_more'>Read More</button>
        </div>
    );
};

export default News;
