import React, { useContext } from 'react';
import { NewsContext } from '../Context/NewsContext';
import { Link } from 'react-router-dom';

const Wars = () => {

    
  const { recentNews, loading } = useContext(NewsContext);

  if (loading) return <p>Loading war news...</p>;

  // Filter the news articles based on the category (for example, technology)
  const warsNews = recentNews.filter(article => 
    article.category === 'wars'
  );
  return (
<div className="new-articles">
      <h1 className='NEWS_TYPE'>Wars News</h1>
      <hr />
      <div className="article-container">
        {warsNews.length > 0 ? (
          warsNews.map((item, index) => (
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
          ))
        ) : (
          <p>No wars news available.</p>
        )}
      </div>
    </div>
  )
}

export default Wars
