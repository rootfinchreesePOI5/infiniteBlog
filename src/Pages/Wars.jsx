import React, { useEffect, useState } from 'react';

const Wars = () => {
  const [warsNews, setWarsNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWarsNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d182a76173324ba5bc28fde3d7ca16cb`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        // Filter articles that mention 'war' in their title or description
        const filteredWarsNews = data.articles.filter(article => 
          article.title.toLowerCase().includes('war') || 
          (article.description && article.description.toLowerCase().includes('war'))
        );
        setWarsNews(filteredWarsNews);
      } catch (error) {
        console.error('Error fetching war news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWarsNews();
  }, []);

  if (loading) return <p>Loading war news...</p>;

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
                <h1>{item.title}</h1>
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
  );
};

export default Wars;
