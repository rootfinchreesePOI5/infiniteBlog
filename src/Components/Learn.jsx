import React from 'react';
import learn from '../assets/images/learn.jpg'
import { Link } from 'react-router-dom';


const Learn = () => {
  return (
    <div className='learn'>
      <div className="learn-container">
        <div className="learn_items">
            <img src={learn} alt="" />
        </div>
        <div className="learn_items">
            <Link to='/subscribe'><button className="sub">Subscribe</button></Link>
            <h1>We create content for you.</h1>
            <h3 className='h3'>Regular updates ensure that readers have access to fresh persprectives, making Poster a must-read.</h3>
            <Link to='/about'><button className="sub">Learn About US</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Learn
