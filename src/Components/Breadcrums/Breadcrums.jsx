import React from 'react'
import './Breadcrums.css'

const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='Breadcrums'>
       HOME  SHOP {product.category} {product.name}
    </div>
  )
}

export default Breadcrums