import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import women_banner from './Components/Assets/womenbanner.webp'
import kids_banner from './Components/Assets/kidsbanner.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Shop/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
      <Route path="product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>

</Routes>
<Footer/>



    </BrowserRouter>
  
   
     
    </>
  )
}

export default App
