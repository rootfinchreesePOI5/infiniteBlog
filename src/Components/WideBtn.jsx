import React from 'react'
import { Link } from 'react-router-dom'



const WideBtn = () => {

    return (
        <div>
            <Link to='/login'>
                <button  className='contact-btn'>Login</button>
            </Link>
        </div>
    )
}

export default WideBtn