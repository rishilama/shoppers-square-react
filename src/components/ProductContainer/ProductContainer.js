import React from 'react'

function ProductContainer({ productData }) {
    return (
        <div className='product-container'>
            {productData?.map((itemData, index)=> {
                return(
                    <div key={index}>
                        <a href='/' className='single-product__card'>
                            <div className='single-product__image-container'>
                                <img src={itemData.image} alt='img' className='product-image' />
                            </div>
                            
                            <div className='single-product__details-container'>
                                <p className='brand'>{itemData.brand}</p>
                                <p className='name'>{itemData.name}</p>
                                <div className='more-details'>
                                    <p className='price'>{itemData.price}</p>
                                    {itemData.inStock === 1 ? <p></p> : <p className='stock'>SOLD OUT</p>}
                                    
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductContainer