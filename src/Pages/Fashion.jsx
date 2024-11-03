import React, { useEffect, useState } from 'react';

const Fashion = () => {
  const [fashionNews, setFashionNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFashionNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d182a76173324ba5bc28fde3d7ca16cb`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFashionNews(data.articles || []);
      } catch (error) {
        console.error('Error fetching fashion news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFashionNews();
  }, []);

  if (loading) return <p>Loading Fashion news...</p>;

  return (
    <div className="new-articles">
      <h1 className='NEWS_TYPE'>Fashion News</h1>
      <hr />
      <div className="article-container">
        {fashionNews.length > 0 ? (
          fashionNews.map((item, index) => (
            <div key={index} className='Articles'>
              <div
                className="img-articles"
                style={{
                  backgroundImage: `url(${item.urlToImage || ''})`,
                }}
              >
                <h1>{item.title}</h1>
              </div>
              <h5>{item.source.name}</h5>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>No fashion news available.</p>
        )}
      </div>
    </div>
  );
};

export default Fashion;
