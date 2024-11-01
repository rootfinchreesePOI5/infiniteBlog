import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='Menu-category'>
      <div className="categories_main">
        <div className="category-links">
        <Link to='/articles'>Articles</Link>
        </div>
        <div className="category-links">
        <Link to='/technology'>Technology</Link>
        </div>
        <div className="category-links">
        <Link to='/food'>Food</Link>
        </div>
        <div className="category-links">
        <Link to='/fashion'>Fashion</Link>
        </div>
        <div className="category-links">
        <Link to='/life_style'>LifeStyle</Link>
        </div>
      </div>
    </div>
  )
}

export default Categories
