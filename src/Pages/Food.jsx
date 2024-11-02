import React, { useContext } from 'react';
import { NewsContext } from '../Context/NewsContext';
import { Link } from 'react-router-dom';

const Food = () => {

  const { recentNews, loading } = useContext(NewsContext);

  if (loading) return <p>Loading Food news...</p>;

  // Filter the news articles based on the category (for example, technology)
  const foodNews = recentNews.filter(article => 
    article.category === 'food'
  );
  return (
    <div className="new-articles">
      <h1 className='NEWS_TYPE'>Food News</h1>
      <hr />
      <div className="article-container">
        {foodNews.length > 0 ? (
          foodNews.map((item, index) => (
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
          <p>No food news available.</p>
        )}
      </div>
    </div>
  )
}

export default Food
