import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import './SneakerZone.css'
import SneakerPageSideBarData from '../../dummy data/SneakerPageSideBarData'

function SneakerZone() {
    return (
        <div className='container'>
            <div className='page__content'>
                <SideBar data={SneakerPageSideBarData} />
            </div>
        </div>
    )
}

export default SneakerZone