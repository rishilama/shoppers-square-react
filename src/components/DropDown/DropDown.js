import React, { useState } from "react";
import MenuItems from "../../dummy data/MenuItems";

function Dropdown({ filterBrands, MobileView }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <div onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                                
                {MenuItems?.map((item) => {
                return (
                    <>
                        <div key={item.id}>
                            <div className="container">
                                <p className='dropdown-link' >{item.title}</p>
                            </div>

                            {
                                item.categoryList?.map((listItem)=>{
                                    const dropdownClick = () => {
                                        filterBrands(`${listItem.name}`)
                                        MobileView()
                                    }
                                    return(
                                        <>
                                            <button key={listItem.id} onClick={dropdownClick} className="array-list">{listItem.name}</button>
                                        </>
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
