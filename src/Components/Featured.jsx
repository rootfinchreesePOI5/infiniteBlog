import React from 'react'
import f_img_1 from '../assets/images/Feautured_img_1.jpg'
import f_img_2 from '../assets/images/Feautured_img_2.jpg'
import f_img_3 from '../assets/images/Feautured_img_3.jpg'
import { Link } from 'react-router-dom'
import { categories } from '../assets/categories.js'
const Featured = () => {
  return (
    <div className='Featured'>
      <div className="Featured-container">
        <div className="Feautured-items">
          <Link to='/fashion'>
            <img src={f_img_1} alt="" />
          </Link>
        </div>
        <div className="Feautured-items">
          <Link>
            <img src={f_img_2} alt="" />
          </Link>
          <Link>
            <img src={f_img_3} alt="" />
          </Link>
        </div>
      </div>
      <div className="categories">
      {categories.map((item, index) => {
        const path = `/${item.toLowerCase().replace(/\s+/g, '-')}`; // Converts category names to lowercase with dashes
        return (
          <div key={index} className="category">
            <Link to={path}>{item}</Link>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default Featured
