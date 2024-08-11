import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/gaurang logo.png'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const[menu,setMenu]=useState("shop");
  return (
    <>
     <div className="navbar">
    <div className="navlogo">
    <img src={logo} alt="" srcset="" height={50}/>
    </div>
    <ul className="navmenu">
    <li><Link to='/'>Shop</Link></li>
        <li><Link to='/womens'>Women</Link></li>
        <li><Link to='/kids'>Kids</Link></li>
    </ul>
    <div className="cart">
        <Link to='./login'><button>Login</button></Link>
       <Link to='./cart'> <img src={cart} alt="" srcset="" height={30}/></Link>
        <div className="navcartcount">0</div>
        </div>
    </div>
   
    </>
  )
}

export default Navbar