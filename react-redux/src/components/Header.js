import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'><h1 id='brew-text'>Brewery</h1><h1 id='find-text'>Finder</h1></div>
            <ul className='links'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header;