import React from 'react'

const Section_Title = ({title_text , Details}) => {
  return (
    <div className="Section_title">
      <h1>{title_text}</h1>
      <p>{Details}</p>
    </div>
  )
}

export default Section_Title
