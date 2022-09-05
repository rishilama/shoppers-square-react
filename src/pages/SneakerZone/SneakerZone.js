import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import SneakerPageSideBarData from '../../dummy data/SneakerPageSideBarData'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import Slide from 'react-reveal/Slide'
import SneakerProductPage from '../../dummy data/ProductPage/SneakerProductPage'


function SneakerZone() {
    return (
        <div className='container'>
            <div className='page__content'>
                <SideBar data={SneakerPageSideBarData} />
                <Slide bottom>
                    <ProductContainer productData = {SneakerProductPage} />
                </Slide>
            </div>
        </div>
    )
}

export default SneakerZone