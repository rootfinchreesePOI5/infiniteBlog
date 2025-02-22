import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const NewsContext = createContext();

const NewsProvider = (props) => {
  const Latesturl = import.meta.env.VITE_API_URL;
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const getHeadline = async () => {
    try {
      console.log(Latesturl);
  
      const response = await axios.get(Latesturl, {
        headers: {
          "User-Agent": navigator.userAgent, // Use browser's user-agent
          "Accept": "application/json",
        },
      });
  
      console.log(response);
  
      if (response.status === 200) {
        setLatest(response.data.articles);
      } else {
        setError("Error fetching data");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("Failed to fetch news");
    }
  };
  

  useEffect(() => {
    getHeadline();
  }, [Latesturl]);

  // Check when all images are loaded
  useEffect(() => {
    if (latest.length > 0) {
      const imagePromises = latest.map(article => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = article.urlToImage;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even if an image fails to load
        });
      });

      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
        setLoading(false);
      });
    }
  }, [latest]);

  return (
    <NewsContext.Provider value={{ Latesturl, latest, loading, error, imagesLoaded }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
