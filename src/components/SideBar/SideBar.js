import React from "react";

function SideBar({ data }) {
    return (
        <div className="sidebar">
            {data?.map((sidebarItem, index) => {
                return(
                    <div key={index}>
                        <p className="sidebar-item__head">{sidebarItem.title}</p>
                        
                        <div className="sidebar__buttons">
                            {
                                sidebarItem.categoryList?.map((sidebarSubitem, index) => {
                                    return(
                                        <button key={index}>{sidebarSubitem.name}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default SideBar;
