import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Technology = () => {
  const [technologyNews, settechNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchtechNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d182a76173324ba5bc28fde3d7ca16cb`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        settechNews(data.articles || []);
      } catch (error) {
        console.error('Error fetching tech news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchtechNews();
  }, []);

  if (loading) return <p>Loading tech news...</p>;

  return (
    <div className="new-articles">
      <h1 className='NEWS_TYPE'>Technology News</h1>
      <hr />
      <div className="article-container">
        {technologyNews.length > 0 ? (
          technologyNews.map((item, index) => (
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
          <p>No technology news available.</p>
        )}
      </div>
    </div>
  );
};

export default Technology;
