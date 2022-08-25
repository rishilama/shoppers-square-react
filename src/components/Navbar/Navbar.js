import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DropDown from "../DropDown/DropDown";
import Header from "../Header/Header";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="container">
            <Header />
            <nav className="navbar">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="underline nav-links" onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>

                    <li className="nav-item" onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                        <button className="nav-links" onClick={closeMobileMenu}>
                            SHOP <i className="fas fa-caret-down" />
                        </button>
                        {dropdown && <DropDown />}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
