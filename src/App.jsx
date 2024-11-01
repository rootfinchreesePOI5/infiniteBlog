import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Articles from './Pages/Articles'
import Categories from './Pages/Categories'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route> ;
        <Route path='/articles' element={<Articles/>}></Route> ;
        <Route path='/categories' element={<Categories/>}></Route> ;
        <Route path='/about' element={<About/>}></Route> ;
        <Route path='/contact' element={<Contact/>}></Route> ;
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
