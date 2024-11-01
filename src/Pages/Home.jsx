import React from 'react'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import News from '../Components/News'
import Editors from '../Components/Editors'
import AllChoice from '../Components/AllChoice'
import Subscribe from '../Components/Subscribe'
import FeauturedCategory from '../Components/FeauturedCategory'
import Login from '../Components/Login'
import Learn from '../Components/Learn'


const Home = () => {
  return (
    <div className='Home'>
      <Hero />
      <Featured/>
      <News/>
      <Editors/>
      <AllChoice/>
      <Subscribe/>
      <FeauturedCategory/>
      <Login/>
      <Learn/>
    </div>
  )
}

export default Home
