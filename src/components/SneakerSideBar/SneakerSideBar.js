import React, { useEffect, useState } from "react";
// import SneakerProductPage from "../../dummy data/ProductPage/SneakerProductPage";

function SneakerSideBar({ filterResult,setData, filterBrands }) {

    const [sneakerData, setSneakerData] = useState({});

    useEffect(()=>{
        const fetchData = async () => {
        try {
            const response = await fetch('https://api-product-shopperssquare.herokuapp.com/AllProductData')
            if (!response.ok){
            throw new Error("Server responds with error!")
            }
            
            const res = await response.json();
            const sneaker = res.filter(sneaker=>{
                return sneaker.category==="MEN'S SNEAKERS" || sneaker.category==="WOMEN'S SNEAKERS"
            })
            console.log("SNEAKER",sneaker)
            setSneakerData(sneaker)
            }
            catch{
                console.log("err")
            }
        }
        fetchData();
    }, [])


    return (
        <div className="sidebar">
            
            <p className="sidebar-item__head">CATEGORIES</p>
                        
            <div className="sidebar__buttons">
                <button onClick={()=>setData(sneakerData)}>EVERYTHING</button>
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
                <button onClick={()=>filterBrands("NIKE")}>NIKE</button>
                <button onClick={()=>filterBrands("JORDAN")}>JORDAN</button>
                <button onClick={()=>filterBrands("ADIDAS")}>ADIDAS</button>
                <button onClick={()=>filterBrands("YEEZY")}>YEEZY</button>
                <button onClick={()=>filterBrands("CROCS")}>CROCS</button>
                <button onClick={()=>filterBrands("VANS")}>VANS</button>
                <button onClick={()=>filterBrands("CONVERSE")}>CONVERSE</button>
                <button onClick={()=>filterBrands("NEW BALANCE")}>NEW BALANCE</button>
                <button onClick={()=>filterBrands("BALENCIAGA")}>BALENCIAGA</button>
                <button onClick={()=>filterBrands("ASICS")}>ASICS</button>
                <button onClick={()=>filterBrands("PUMA")}>PUMA</button>
                <button onClick={()=>filterBrands("UNDER ₹1000")}>UNDER ₹1000</button>

            </div>
        </div>
    );
}

export default SneakerSideBar;
