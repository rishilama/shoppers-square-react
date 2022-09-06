import React from 'react'
import SneakerSideBar from '../../components/SneakerSideBar/SneakerSideBar'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import Slide from 'react-reveal/Slide'
import SneakerProductPage from '../../dummy data/ProductPage/SneakerProductPage'
import { useState } from 'react'


function SneakerZone() {
    const [data, setData] = useState(SneakerProductPage);
    // const [brand, setBrand] = useState(SneakerProductPage);

    const filterResult = (catItem) => {
        const result = Object.values(SneakerProductPage).filter((currData)=>{
            return currData.category === catItem
        });
        setData(result)

        console.log(result)
        console.log(catItem)
    }

    const filterBrands = (brandItem) => {
        const brandResult = SneakerProductPage.filter((brandCurrData)=>{
            return brandCurrData.brand === brandItem
        })
        setData(brandResult)
    }

    return (
        <div className='container'>
            <div className='page__content'>
                <SneakerSideBar filterResult={filterResult} setData={setData}  filterBrands={filterBrands} />
                <Slide bottom>
                    <ProductContainer productData = {data} />
                </Slide>
            </div>
        </div>
    )
}

export default SneakerZone