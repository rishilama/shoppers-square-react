import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "../DropDown/DropDown";

function Navbar({ filterBrands }) {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const MobileView = ()=>{
       setDropdown(!dropdown)
    }

    return (
        <div className="bg-color__navbar">
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
                        <button className="nav-links" onClick={MobileView}>
                            SHOP <i className="fas fa-caret-down" />
                        </button>
                        {dropdown && <DropDown filterBrands={filterBrands} MobileView={MobileView} />}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
