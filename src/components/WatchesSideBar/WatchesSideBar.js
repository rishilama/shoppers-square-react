import React from "react";

function WatchesSideBar({ filterResult, filterBrands }) {

    return (
        <div className="sidebar">
            
            <p className="sidebar-item__head">CATEGORIES</p>
                        
            <div className="sidebar__buttons">
                <button onClick={()=>filterResult("MEN'S SNEAKERS")}>MEN'S SNEAKERS</button>
                <button onClick={()=>filterResult("WOMEN'S SNEAKERS")}>WOMEN'S SNEAKERS</button>
                <button onClick={()=>filterResult("SNEAKERS UNDER 1000")}>SNEAKERS UNDER 1000</button>
                <button onClick={()=>filterResult("MEN'S WATCHES")}>MEN'S WATCHES</button>
                <button onClick={()=>filterResult("WOMEN'S WATCHES")}>WOMEN'S WATCHES</button>
                <button onClick={()=>filterResult("BAGS AND ACCESSORIES")}>BAGS AND ACCESSORIES</button>
                <button onClick={()=>filterResult("GADGETS")}>GADGETS</button>

            </div>


            <p className="sidebar-item__head">BRANDS</p>
                        
            <div className="sidebar__buttons">
                <button onClick={()=>filterBrands("G-SHOCK")}>G-SHOCK</button>
                <button onClick={()=>filterBrands("EDIFICE")}>EDIFICE</button>
                <button onClick={()=>filterBrands("FOSSIL")}>FOSSIL</button>
                <button onClick={()=>filterBrands("DIESEL")}>DIESEL</button>
                <button onClick={()=>filterBrands("TAG HEUER")}>TAG HEUER</button>
                <button onClick={()=>filterBrands("ROLEX")}>ROLEX</button>
                <button onClick={()=>filterBrands("EMPORIO ARMANI")}>EMPORIO ARMANI</button>
                <button onClick={()=>filterBrands("CARTIER")}>CARTIER</button>
                <button onClick={()=>filterBrands("PATEK PHILIPPE")}>PATEK PHILIPPE</button>

            </div>
        </div>
    );
}

export default WatchesSideBar;
