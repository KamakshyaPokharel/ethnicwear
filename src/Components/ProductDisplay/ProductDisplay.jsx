import React from 'react'
import './ProductDisplay.css'
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    // <div className='productdis'>
    //     <div className="productdisplay-left">
    //         <div className="productdisplay-img-list">
    //             <img src={product.image} alt="" />
    //             <img src={product.image} alt="" />
    //             <img src={product.image} alt="" />
    //             <img src={product.image} alt="" />
    //             <img src={product.image} alt="" />
    //             <img src={product.image} alt="" />
    //         </div>
    //         <div className="productdisplay-img">
    //             <img  className= 'productdisplay-main'src={product.image} alt="" />
    //         </div>
    //     </div>
    //     <div className="productdisplay-right">
    //         <h1>{product.name}</h1>
    //         <div className="productdisplay-right-star">
    //             <p>122</p>

    //         </div>
    //         <div className="productdisplay-right-prices">
    //             <div className="productdisplay-right-price-old">${product}</div>
    //         </div>
    //     </div>
      
    // </div>
//     <div className="productdis">
//  <div className='productname'>
    
//     <div/>
//     <div className="productflex">
//     <div className="productimg">
//     <img src={product.image} height={500} alt={product.name} />
//     </div>
//     <div className="productdetails">
//     <h1>{product.name}</h1>
//         <p>{product.category}</p>
//     <p>{product.description}</p>
//     <p>OfferPrice: {product.new_price}</p>
//     <p>OldPrice: {product.old_price}</p>
   
//      <button>Add to Cart</button>
//     <button>Buy Now</button>
//     </div>
//     </div>
    
    
// </div>
//     </div>
<div className="product-card">
<div className="product-image">
  <img src={product.image} alt={product.name} />
</div>
<div className="product-details">
  <h2>{product.name}</h2>
  <p className="price">NPR {product.new_price}</p>
  {/* <div className="options">
    <button className="option-btn">Fall & Edging + NPR {product.fallAndEdging}</button>
    <button className="option-btn">Saree Petticoat + NPR {product.sareePetticoat}</button>
    <button className="option-btn">Blouse Stitching + NPR {product.blouseStitching}</button>
  </div> */}
   {product.category !== 'kids' && (
                    <div className="options">
                        <button className="option-btn">Fall & Edging + NPR {product.fallAndEdging}</button>
                        <button className="option-btn">Saree Petticoat + NPR {product.sareePetticoat}</button>
                        <button className="option-btn">Blouse Stitching + NPR {product.blouseStitching}</button>
                    </div>
                )}
  <div className="purchase-options">
    <input type="number" min="1" defaultValue="1" className="quantity" />
    {/* <Link to='./login'><button className="add-to-cart">Add To Cart</button></Link>  */}
    <Link to="/login"><button className="add-to-cart">Add To Cart</button></Link>
    <Link to="/login"><button className="buy-now">Buy Now</button></Link>
  </div>
</div>
</div>
   
  )
}

export default ProductDisplay