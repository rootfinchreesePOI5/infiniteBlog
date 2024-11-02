import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Articles from './Pages/Articles'
import Categories from './Pages/Categories'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Technology from './Pages/Technology'
import Food from './Pages/Food'
import Fashion from './Pages/Fashion'
import Economy from './Pages/Economy'
import Wars from './Pages/Wars'
import Lifestyle from './Pages/Lifestyle'

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
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/categories/technology' element={<Technology/>}></Route>
        <Route path='/categories/food' element={<Food/>}></Route>
        <Route path='/categories/fashion' element={<Fashion/>}></Route>
        <Route path='/categories/economy' element={<Economy/>}></Route>
        <Route path='/categories/wars' element={<Wars/>}></Route>
        <Route path='/categories/lifestyle' element={<Lifestyle/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;