// import React, { useContext } from 'react'
// import ShopContext from '../Context/ShopContext'
// import Breadcrums from '../Components/Breadcrums/Breadcrums';
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
// import { useParams } from 'react-router-dom';


// const Product = () => {
//   const {all_products}=useContext(ShopContext);
//   const {productId}=useParams();
//   const product=all_products.find((e)=>e.id===Number(productId))
//   return (
//     <div>
//       <Breadcrums product={product}/>
//       <ProductDisplay product={product}/>

//     </div>
//   )
// }

// export default Product

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  return (
    <div>
      {/* {product ? ( */}
        <>
          <Breadcrums product={product} />
          <ProductDisplay product={product} />
        </>
      {/* ) : (
        <p>Product not found</p>
      )} */}
    </div>
  );
};

export default Product;
