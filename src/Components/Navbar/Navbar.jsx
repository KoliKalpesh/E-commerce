import React, { useState } from 'react'
import shopping_bag from '../Assets/shopping-bag.png'
import shopping_logo from '../Assets/shopping_logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu]= useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img className='shopping-logo' src={shopping_logo} alt="" />
            <p>shopper</p>
        </div>

            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to={'/'}>Shop</Link> {menu === "shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}  to={'/men'}>Men</Link>{menu === "men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}  to={'/women'}>Women</Link>{menu === "women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to={'/kids'}>Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{textDecoration:'none'}}  to={'/login'}><button>Login</button></Link>
                <Link style={{textDecoration:'none'}}  to={'/cart'}><img className='shopping-icon' src={shopping_bag} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>

        
      
    </div>
  )
}

export default Navbar
