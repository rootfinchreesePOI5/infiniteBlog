import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { bbell, f_1, logo, menuB, menuW, moon, sun, wbell, xB, xW } from '../assets/images';
import { AppContext } from '../Context/AppContext';

const Navbar = () => {
    const { theme, setTheme, token, userData, type, setType } = useContext(AppContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const showMenu = () => {
        setShow(!show);
        document.body.style.overflow = show ? 'auto' : 'hidden'; // Prevent scrolling when menu is open
    };

    return (
        <div className={`flex flex-col fixed w-screen gap-2 p-2 justify-between ${theme === 'light' ? "header" : "dark-header"}  z-50`}>
            <div className={' flex justify-between md:gridcols items-center  p-2.5'} >
                <Link className='flex items-center gap-2 cursor-pointer' to={'/'}>
                    <img className={`${theme === 'light' ? "bg-main" : "bg-dark-main"} w-[35px] p-1.5 rounded-full`} src={logo} alt="" />
                    <span>infiniteBlog</span>
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-20'>
                    <NavLink to="/" className="flex flex-col">
                        <p>Home</p>
                        <hr className={`${theme === 'light' ? "bg-main" : "bg-dark-main"} h-[0.65vh] rounded-full`} />
                    </NavLink>

                    <NavLink to="/News" className="flex flex-col">
                        <p>News</p>
                        <hr className={`${theme === 'light' ? "bg-main" : "bg-dark-main"} h-[0.65vh] rounded-full`} />
                    </NavLink>

                    <NavLink onClick={() => setType('Blog')} to="/Blog" className="flex flex-col">
                        <p>Blog</p>
                        <hr className={`${theme === 'light' ? "bg-main" : "bg-dark-main"} h-[0.65vh] rounded-full`} />
                    </NavLink>

                    <NavLink onClick={() => setType('Stories')} to="/Stories" className="flex flex-col">
                        <p>Stories</p>
                        <hr className={`${theme === 'light' ? "bg-main" : "bg-dark-main"} h-[0.65vh] rounded-full`} />
                    </NavLink>

                    <NavLink to="/Categories" className="flex flex-col">
                        <p>Categories</p>
                        <hr className={`${theme === 'light' ? "bg-main" : "bg-dark-main"} h-[0.65vh] rounded-full`} />
                    </NavLink>

                </div>

                {/* Desktop Right Icons */}
                <div className=' flex md:flex items-center justify-end gap-2'>
                    <button onClick={changeTheme} className='w-[30px] p-1.5  rounded-md'>
                        <img src={theme === 'light' ? sun : moon} alt="" />
                    </button>
                    <button onClick={() => navigate('/Notifications')} className='w-[30px] p-1.5 hover:scale-125 transition-all duration-700 rounded-md'>
                        <img src={theme === 'light' ? bbell : wbell} alt="" />
                    </button>
                    {
                        token ? (
                            <div onClick={() => navigate('/Profile')} className='cursor-pointer'>
                                <img className='w-9 h-9 rounded-full' src={userData.image} alt="" />
                            </div>
                        ) : (

                            <button onClick={() => navigate('/Login')} className={`p-0.5 px-3 ${theme === 'light' ? "bg-main" : "bg-dark-main"} rounded border-none`}>
                                Subscribe
                            </button>
                        )}
                </div>
            </div>

            <hr className='flex md:hidden' />

            {/* Mobile Navigation */}
            <div className="flex md:hidden overflow-x-auto px-4 pb-2 space-x-8 w-full">
                {['/', '/News', '/Blog', '/Stories', '/About', '/Categories'].map((path, index) => (
                    <NavLink key={index} to={path} className="flex flex-col min-w-max">
                        <p>{path === '/' ? 'Home' : path.replace('/', '')}</p>
                        <hr className={`${theme === 'light' ? "bg-main" : "bg-dark-main"} h-[0.65vh] rounded-full`} />
                    </NavLink>
                ))}
            </div>

        </div>
    );
};

export default Navbar;
