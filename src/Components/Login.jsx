import React from 'react'
import water from '../assets/images/Army.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='Login'>
      <div className="login-container" style={{backgroundImage: `url(${water})`}}>
        <div className="login-items">
            <Link><button className='sub'>Subscribe</button></Link>
            <h3 className='h3'>Regular updates ensure that readers have access to fresh persprectives, making Poster a must-read.</h3>
            <input type="text" placeholder='Your Full Name' />
            <input type="email" placeholder='Your Email' />
            <Link to='/contact' className="contact">
                <Link>Contact</Link>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
