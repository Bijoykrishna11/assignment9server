import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav'>
            <div className='titel'>
                <h1>E-larning</h1>
            </div>
            <div className='routess'>
                <Link to={'/'}>Home</Link>
                <Link to={'/topocs'}>Topics</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blog'}>Blog</Link>

            </div>

        </nav>
    );
};

export default Header;