import React from 'react'
import { Editors_choice } from '../assets/Recent'
import { editors_first } from '../assets/Recent'
import { Link } from 'react-router-dom'
import Section_Title from './Section_Title'

const Editors = () => {
  return (
    <div className='editors'>
      <Section_Title title_text="Editors Choice" Details="A mix of expert analyses, personal anecdotes ,and in depth reviews"/>
      <div className="editors-container">
        <div className="editor-items">
          {
            editors_first.map((item , index) =>{
              return <div className='Editor_group' key={index}>
                <div className='Editors_part1' style={{backgroundImage: `url(${item.img})`}}>
                <Link to={`${item.path}`}><h1>{item.key}</h1></Link>
                </div>
              <div className='read'>
              <h5>{item.Read}</h5>
              <p>{item.Title}</p>
                </div>
              </div>
            })
          }
        </div>
        <div className="editor-items">
          {
            Editors_choice.map((item , index) =>{
              return <div className='Editor_group' key={index} >
                <div className='Editor_part2' style={{backgroundImage: `url(${item.img})`}}>
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
    </div>
  )
}

export default Editors