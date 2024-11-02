import React, { useContext } from 'react';
import { NewsContext } from '../Context/NewsContext';
import { Link } from 'react-router-dom';

const Articles = () => {
  const { recentNews, loading } = useContext(NewsContext);

  if (loading) return <p>Loading recent news...</p>;

  return (
    <div className="new-articles">
      <h1 className='NEWS_TYPE'>Recent News</h1>
      <hr />
      <div className="article-container">
        {recentNews.map((item, index) => (
          <div key={index} className='Articles'>
            <div
              className="img-articles"
              style={{
                backgroundImage: `url(${item.urlToImage || ''})`,
              }}
            >
              <Link to={`/${item.category}`} target="_self">
                <h1>{item.title}</h1>
              </Link>
            </div>
            <h5>{item.source.name}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
