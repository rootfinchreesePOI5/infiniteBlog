import React, { useEffect, useState } from 'react';

const Lifestyle = () => {
  const [lifestyleNews, setLifestyleNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLifestyleNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d182a76173324ba5bc28fde3d7ca16cb`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLifestyleNews(data.articles || []);
      } catch (error) {
        console.error('Error fetching lifestyle news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLifestyleNews();
  }, []);

  if (loading) return <p>Loading celebrity and lifestyle news...</p>;

  return (
    <div className="new-articles">
      <h1 className='NEWS_TYPE'>Celebrity & Lifestyle News</h1>
      <hr />
      <div className="article-container">
        {lifestyleNews.length > 0 ? (
          lifestyleNews.map((item, index) => (
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
          <p>No celebrity or lifestyle news available.</p>
        )}
      </div>
    </div>
  );
};

export default Lifestyle;
