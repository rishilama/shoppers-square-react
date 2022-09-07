import React, { useState } from 'react'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import Slide from 'react-reveal/Slide'
import WatchesSideBar from '../../components/WatchesSideBar/WatchesSideBar';
import AllProductData from '../../dummy data/AllProductData/AllProductData'

function Watchex() {
    const [data, setData] = useState(AllProductData);

    const filterResult = (catItem) => {
        const result = Object.values(AllProductData).filter((currData)=>{
            return currData.category === catItem
        });
        setData(result)

        console.log(result)
        console.log(catItem)
    }

    const filterBrands = (brandItem) => {
        const brandResult = AllProductData.filter((brandCurrData)=>{
            return brandCurrData.brand === brandItem
        })
        setData(brandResult)
    }
    return (
        <div className='container'>
            <div className='page__content'>
                <WatchesSideBar filterResult={filterResult} setData={setData}  filterBrands={filterBrands} />
                <Slide bottom>
                    <ProductContainer productData = {data} />
                </Slide>
            </div>
        </div>
    )
}

export default Watchex