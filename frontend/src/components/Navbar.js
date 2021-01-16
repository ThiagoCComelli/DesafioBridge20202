import React from 'react';

import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className="mainNavbar">
            <img alt="" src={`${process.env.PUBLIC_URL}/images/logo.svg`}/>
            <div className="mainNavbarBorder">
                <h3>Factorial Calculator<span>!</span></h3>
            </div>
        </div>
        </>
    );
}

export default Navbar;
