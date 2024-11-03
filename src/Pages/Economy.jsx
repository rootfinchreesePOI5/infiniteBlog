import React, { useEffect, useState } from 'react';

const Economy = () => {
  const [economyNews, setEconomyNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEconomyNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d182a76173324ba5bc28fde3d7ca16cb`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setEconomyNews(data.articles || []);
      } catch (error) {
        console.error('Error fetching economy news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEconomyNews();
  }, []);

  if (loading) return <p>Loading economy news...</p>;

  return (
    <div className="new-articles">
      <h1 className='NEWS_TYPE'>Economy News</h1>
      <hr />
      <div className="article-container">
        {economyNews.length > 0 ? (
          economyNews.map((item, index) => (
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
          <p>No economy news available.</p>
        )}
      </div>
    </div>
  );
};

export default Economy;
