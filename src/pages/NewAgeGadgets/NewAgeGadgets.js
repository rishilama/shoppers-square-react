import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import Slide from 'react-reveal/Slide'
import GadgetsPageSideBarData from '../../dummy data/GadgetsPageSideBarData'


function NewAgeGadgets() {
    return (
        <div className='container'>
            <div className='page__content'>
                <SideBar data={GadgetsPageSideBarData} />
                <Slide bottom>
                    <ProductContainer />
                </Slide>
            </div>
        </div>
    )
}

export default NewAgeGadgets