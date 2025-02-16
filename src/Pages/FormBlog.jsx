import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

function FormBlog() {
    const [image, setImage] = useState(false)
    const [title, setTitle] = useState(250);
    const {posts} = useContext(AppContext)
    
    const navigate = useNavigate()
    const changeTitle = () => {

    }

    //handle submit
    const FormSubmit = async () => {
            try {
                
            } catch (error) {
                
            }
    }
    return (
        <div>
            <form onSubmit={FormSubmit} action="">
                <label htmlFor="blogimg">
                    <img src={image ? URL.createObjectURL(image) : ''} alt="" />
                    <img src={image ? '' : 'show'} alt="" />
                    <input type="file" className='hidden' id="blogimg" />
                </label>
                <div>
                    <input type="text" onChange={''} placeholder='Post Title*' />
                    <span>{title}</span>
                </div>
                <div>
                    <input type="text" onChange={''} placeholder='Description*' />
                    <span>{title}</span>
                </div>
                <textarea placeholder='Share Your Thought*' />
                <button onClick={() =>{navigate('/'),scrollTo(0 ,0)}}>Cancel</button>
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default FormBlog
