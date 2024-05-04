import React, { useState } from 'react'
import{assets} from '../../assets/assets'
import './Navbar.css' 
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const[menu,setMemu]=useState("home")
  return (
    <div className='navbar'><img src={assets.logo} alt="" className='logo'/>
    <ul lassName='navbar-menu'>
    <Link to="/" onClick={()=>setMemu("home")} className={menu==="home"?"active":""}> Home  </Link>
    <a href='#explore-menu' onClick={()=>setMemu("menu")} className={menu==="menu"?"active":""}> Menu </a>
    <a href='#app-download' onClick={()=>setMemu("mobile-app")} className={menu==="mobile-app"?"active":""}> Mobile_app </a>
    <a href='#footer' onClick={()=>setMemu("contact-us")} className={menu==="contact-us"?"active":""}> contact_us </a>
    <a href='#footer' onClick={()=>setMemu("about")}className={menu==="about"?"active":""}> about </a>
    </ul>

    <div className="navbar-right">
      <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
      </div>
      <button onClick={()=>(setShowLogin(true))}>signin</button>
    </div>

    </div>
    
  )
}

export default Navbar