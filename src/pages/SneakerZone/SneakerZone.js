import React from 'react'
import SneakerSideBar from '../../components/SneakerSideBar/SneakerSideBar'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import Slide from 'react-reveal/Slide'


function SneakerZone({filterResult, setData, filterBrands, data }) {
    

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