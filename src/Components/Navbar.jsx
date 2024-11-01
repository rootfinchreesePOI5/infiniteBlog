import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import menuIcon from '../assets/menu.svg'; // Add your menu icon path
import closeIcon from '../assets/close.svg'; // Add your close icon path
import WideBtn from './WideBtn';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <header className='header'>
                <nav className="navbar">
                    <div className="logo-item">
                        <img src={logo} alt="" />
                        <Link className='logo' to='/'>Hobson's</Link>
                    </div>
                    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <NavLink to='/articles' onClick={toggleMenu}>
                                Articles
                            </NavLink>
                            <NavLink to='/categories' onClick={toggleMenu}>
                                Categories
                            </NavLink>
                            <NavLink to='/About' onClick={toggleMenu}>
                                About
                            </NavLink>
                            <NavLink to='/contact' onClick={toggleMenu}>
                                Contact
                            </NavLink>
                        </ul>
                    </div>
                    <div className="search">
                        <Link className='icon-search' to='/categories'>
                            <img src={search} alt="" />
                        </Link>
                        <WideBtn />
                    </div>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu" />
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;