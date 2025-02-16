import React, { useContext } from 'react'
import { AppContext } from './Context/AppContext'
import { Toaster } from 'sonner'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Myblog from './Pages/Myblog'
import Categories from './Pages/Categories'
import News from './Pages/News'
import Login from './Pages/Login'
import Notifications from './Pages/Notifications'
import Profile from './Pages/Profile'
import MyStories from './Pages/MyStories'
import Article from './Components/Article'
import StoryForm from './Pages/StoryForm'
import FormBlog from './Pages/FormBlog'

function App() {

  const { theme, setTheme } = useContext(AppContext)
  return (
    <div className={`${theme === 'light' ? "bg-primary text-text" : "bg-dark-primary text-dark-text"} transition-all duration-500`}>
      <Navbar />
      <Toaster position="bottom-right" richColors />
      <div className='py-[7%] md:py-[5%] lg:py-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Blog' element={<Myblog />} />
          {/* <Route path='My blog/:id' element={<Myblog />} /> */}
          <Route path='/Stories' element={<MyStories />} />
          <Route path='/add/Blog' element={<FormBlog />} />
          <Route path='/add/Story' element={<StoryForm />} />
          <Route path='/Categories' element={<Categories />} />
          <Route path='/News' element={<News />} />
          <Route path='/News/:id' element={<Article />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Notifications' element={<Notifications />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
