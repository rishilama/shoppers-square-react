import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to='/'>
                    <img src="/images/logo.png" alt="logo" className="logo" />
                </Link>
            </div>

            <div className="text-container">
                <p className="header-text">Free Shipping All Over India on orders over ₹4k</p>
                <p className="header-text">Shipping All Over India</p>
            </div>
        </div>
    )
}

export default Header