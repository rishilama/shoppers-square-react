import React, { useState } from "react";
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
                            <div className="container">
                                <p className='dropdown-link' >{item.title}</p>
                            </div>

                            {
                                item.categoryList?.map((listItem, index)=>{
                                    return(
                                        <button key={index} className="array-list">{listItem.name}</button>
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
