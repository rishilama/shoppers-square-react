import React, { useState } from "react";
import "./DropDown.css";
import MenuItems from "../../dummy data/MenuItems";

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <div onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                                
                {MenuItems?.map((item, index) => {
                return (
                    <>
                        <div key={index}>
                            <button className='dropdown-link' >
                                {item.title}
                            </button>

                            {
                                item.categoryList?.map((listItem, index)=>{
                                    console.log(listItem.name)
                                    return(
                                        <button className="array-list" key={index}>{listItem.name}</button>
                                    )
                                })
                            }
                        </div>
                    </>
                );
                })}

            </div>
        </>
    );
}

export default Dropdown;
