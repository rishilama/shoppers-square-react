import React, { useState } from "react";
import { MenuItems } from "../../dummy data/MenuItems";
import "./DropDown.css";
// import { Link } from "react-router-dom";

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <div onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                {MenuItems.map((item, index) => {
                return (
                    <>
                        <div key={index} >
                            <button className='dropdown-link' onClick={() => setClick(false)}>
                                {item.title}
                            </button>
                        
                            
                            <br />
                        </div>
                    </>
                );
                })}
            </div>
        </>
    );
}

export default Dropdown;
