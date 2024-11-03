import React, { createContext, useEffect, useState } from 'react';

const NewsContext = createContext({}); // Initialize as an empty object

const NewsProvider = ({ children }) => {
  const [newsByCategory, setNewsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsByCategory = async (category) => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d182a76173324ba5bc28fde3d7ca16cb`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        return data.articles || [];
      } catch (error) {
        console.error(`Error fetching ${category} news:`, error);
        return [];
      }
    };

    const fetchAllNews = async () => {
      setLoading(true);
      const categories = ['general', 'technology', 'food', 'fashion', 'lifestyle', 'wars', 'economy'];
      const newsData = {};

      for (const category of categories) {
        newsData[category] = await fetchNewsByCategory(category);
      }

      setNewsByCategory(newsData);
      setLoading(false);
    };

    fetchAllNews();
  }, []);

  return (
    <NewsContext.Provider value={{ newsByCategory, loading }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
