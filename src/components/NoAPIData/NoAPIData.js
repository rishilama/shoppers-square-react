import React from 'react'
import { Slide } from 'react-reveal'

function NoAPIData() {
    return (
        <Slide bottom>
            <div className='noapidata'>
                <p className='noapidata_para'>Oops!</p>
                <p className='noapidata_secondary-para'>Looks like we have run out of stock</p>
            </div>
        </Slide>
    )
}

export default NoAPIData