import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import Slide from 'react-reveal/Slide'
import BagsPageSideBarData from '../../dummy data/BagsPageSideBarData'


function SwankyBags() {
    return (
        <div className='container'>
            <div className='page__content'>
                <SideBar data={BagsPageSideBarData} />
                <Slide bottom>
                    <ProductContainer />
                </Slide>
            </div>
        </div>
    )
}

export default SwankyBags