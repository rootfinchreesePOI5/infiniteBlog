import React, { createContext, useEffect, useState } from 'react';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [recentNews, setRecentNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=d182a76173324ba5bc28fde3d7ca16cb`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        // Optionally, determine categories here or keep it simple
        setRecentNews(data.articles);
      } catch (error) {
        console.error('Error fetching the recent news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentNews();
  }, []);

  const categories = [
    { name: 'Articles', path: '/articles' },
    { name: 'Technology', path: '/categories/technology' },
    { name: 'Food', path: '/categories/food' },
    { name: 'Fashion', path: '/categories/fashion' },
    { name: 'Lifestyle', path: '/categories/lifestyle' },
    { name: 'Wars', path: '/categories/wars' },
    { name: 'Economy', path: '/categories/economy' },
  ];

  return (
    <NewsContext.Provider value={{ recentNews, loading, categories }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
