import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import SneakerPageSideBarData from '../../dummy data/SneakerPageSideBarData'
import ProductContainer from '../../components/ProductContainer/ProductContainer'

function SneakerZone() {
    return (
        <div className='container'>
            <div className='page__content'>
                <SideBar data={SneakerPageSideBarData} />
                <ProductContainer />
            </div>
        </div>
    )
}

export default SneakerZone