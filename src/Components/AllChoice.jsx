import React from 'react'
import { AllChoices } from '../assets/Recent'
import { Link } from 'react-router-dom'
import Section_Title from './Section_Title'
const AllChoice = () => {
  return (
    <div className='All'>
        <Section_Title title_text="All Choices"  Details=" A blend of expert insights, personal stories, and detailed reviews"/>
      <div className="allchoice-container">
        {
         AllChoices.map((item) =>{
            return <div className='Choice-item'>
                <div className="Choice" style={{backgroundImage : `url(${item.img})`}}>
                    <Link to={`${item.path}`}><h1>{item.key}</h1></Link>
                </div>
                <div className="read">
                <h5>{item.Read}</h5>
                <p>{item.Title}</p>
                </div>
            </div>
         })   
        }
      </div>
    </div>
  )
}

export default AllChoice
