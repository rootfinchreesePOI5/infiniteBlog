import React, { useContext } from 'react';
import { NewsContext } from '../Context/NewsContext';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { categories } = useContext(NewsContext);

  return (
    <div className='Menu-category'>
      <div className="categories_main">
        {categories.map((category, index) => (
          <div key={index} className="category-links">
            <Link to={category.path}>{category.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
