import React, { useContext } from 'react'
import './CSS1/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import all_products from '../Components/Assets/AllProducts'

const ShopCategory = (props) => {
  const {all_products}= useContext(ShopContext);
  return (
    <div className='shop_category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by 
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
else{
  return null;
}
        })}
      </div>
      <div className="shopcategory-laodmore">
        Explore more
      </div>


    </div>
  )
}

export default ShopCategory