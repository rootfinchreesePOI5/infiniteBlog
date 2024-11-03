import React, { useEffect, useState } from 'react';

const Articles = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=d182a76173324ba5bc28fde3d7ca16cb`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLatestNews(data.articles || []);
      } catch (error) {
        console.error('Error fetching the latest news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  if (loading) return <p>Loading recent news...</p>;

  return (
    <div className="new-articles">
      <h1 className='NEWS_TYPE'>Recent News</h1>
      <hr />
      <div className="article-container">
        {latestNews.length > 0 ? (
          latestNews.map((item, index) => (
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
          <p>No recent news available.</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
