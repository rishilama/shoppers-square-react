import React from 'react'
import SneakerSideBar from '../../components/SneakerSideBar/SneakerSideBar'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import Slide from 'react-reveal/Slide'
import NoAPIData from '../../components/NoAPIData/NoAPIData'

import Navbar from '../../components/Navbar/Navbar'

function SneakerZone({filterResult, setData, filterBrands, data }) {
    
    return (
        <div className='container'>
            <Navbar filterBrands={filterBrands} />
            <div className='page__content'>
                <SneakerSideBar filterResult={filterResult} setData={setData}  filterBrands={filterBrands} />
                <Slide bottom>
                    {data.length>0 ? 
                        <ProductContainer productData = {data} />
                        :
                        <NoAPIData />
                    }
                </Slide>
            </div>
        </div>
    )
}

export default SneakerZone