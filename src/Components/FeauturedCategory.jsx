import React from 'react'
import Section_Title from './Section_Title'
import { Feautured } from '../assets/categories'
import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom'

const FeauturedCategory = () => {
  return (
    <div className='fCategory'>
      <Section_Title title_text={"Featured Category"} Details={"Readers alwasy have access to latest trends and perspectives. Lifestyle"} />
      <div className="FCategory-container">
        {
          Feautured.map((item, index) => {
            return <div key={index} className='f-items'>
              <div className="f_img">
                <img src={item.img} alt="" />
              </div>
              <div className="f_text">
                <Link to={`/${item.path}`}><h1>{item.title}</h1></Link>
                <p>{item.des}</p>
              </div>
              <div className="f_btn">
              <Link to={`/${item.path}`}><img src={arrow} alt="" /></Link>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default FeauturedCategory