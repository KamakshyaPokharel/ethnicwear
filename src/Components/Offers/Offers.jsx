import React from 'react'
import './Offers.css'
import offerpic from '../Assets/offers1.webp'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            {/* <h1>Exclusive Offer</h1>
            <h1>For You</h1>
            <p>only on best sellers</p> */}
           <Link to='./womens'><img src={offerpic} alt="" srcset="" /></Link> 

        </div>
    </div>
  )
}

export default Offers