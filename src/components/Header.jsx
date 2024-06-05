import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Search from './Search';
import Custombutton from './Custombutton';
import { NavLink } from 'react-router-dom';

function Header() {


  return (
    <div >
   <AppBar >
    <Toolbar className='tool'>
    <NavLink to = {"/"} className= "nav2">
    <div>
      <img className='img1' src= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt="logo" />
      <p className='p1'>Explore <span className='span1'>Plus</span> <img className='img2' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt="" /></p>
      </div>
      </NavLink>
      <Search></Search>
      <Custombutton></Custombutton>

      
    
    </Toolbar>

   </AppBar>

   
    </div>

  )
}

export default Header
