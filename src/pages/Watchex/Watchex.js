import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import WatchPageSideBarData from '../../dummy data/WatchPageSideBarData'

function Watchex() {
    return (
        <div className='container'>
            <div className='page__content'>
                <SideBar data={WatchPageSideBarData} />
                <ProductContainer />
            </div>
        </div>
    )
}

export default Watchex