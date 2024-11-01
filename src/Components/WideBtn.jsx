import React from 'react'
import { Link } from 'react-router-dom'


const WideBtn = () => {
    return (
        <div>
            <Link to='/contact'>
                <button className='contact-btn'>Contact</button>
            </Link>
        </div>
    )
}

export default WideBtn
