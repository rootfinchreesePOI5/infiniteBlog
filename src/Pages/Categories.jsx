import React, { useContext } from 'react';
import { NewsContext } from '../Context/NewsContext';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { newsByCategory } = useContext(NewsContext);

  // Define paths and display names for each category
  const categoryLinks = [
    { name: 'Articles', path: '/articles' },
    { name: 'Technology', path: '/categories/technology' },
    { name: 'Food', path: '/categories/food' },
    { name: 'Fashion', path: '/categories/fashion' },
    { name: 'Lifestyle', path: '/categories/lifestyle' },
    { name: 'Wars', path: '/categories/wars' },
    { name: 'Economy', path: '/categories/economy' },
  ];

  return (
    <div className='Menu-category'>
      <div className="categories_main">
        {categoryLinks.map((category, index) => (
          <div key={index} className="category-links">
            <Link to={category.path}>{category.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
