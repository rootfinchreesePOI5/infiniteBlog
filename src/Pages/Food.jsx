import React, { useEffect, useState } from 'react';

const Food = () => {
  const [foodNews, setFoodNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=d182a76173324ba5bc28fde3d7ca16cb`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFoodNews(data.articles || []);
      } catch (error) {
        console.error('Error fetching food news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodNews();
  }, []);

  if (loading) return <p>Loading Food news...</p>;

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
                <h1>{item.title}</h1>
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
  );
};

export default Food;
