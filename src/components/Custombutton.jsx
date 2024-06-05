import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import Login from './Login';
import { useContext } from 'react';
import { Datacontext } from '../context/Dataprovider';
import {Link} from 'react-router-dom'
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import {Button} from "@mui/material"

function Custombutton() {
  const {data} = useSelector(state => state.cartData)
  const [open,setopen] = useState(false);
  const {account,setaccount} = useContext(Datacontext)
  const [show,setshow] = useState(false)
  
  const logout = ()=>{
   setshow(true)
  }
  const brought = ()=>{
    setopen(true)
   setshow(false)

  }
  const cancel = ()=>{
    setopen(false)
   setshow(false)


  }
  const ok = ()=>{
    setopen(false)
   setshow(false)


  }
  const backtologin = ()=>{
setaccount(null)
  }
  const become = ()=>{
   alert("For Becoming a Seller Please Contact The Ceo... , Our Team Will Reachout too You Soon")
    window.location.href  = 'https://mohaimin37.github.io/AbdulMohaimin.com/'
  }

  return (

  
    
    <div className='div3'>
    


    {account?<>  
    <div >
      <button className='custom1 custom4 button1' onClick={logout} >{account} </button>
    </div> 

    {
      show === true?<>
      <div className='div40'>
     <button className='custom6' onClick={backtologin}> <LogoutIcon className='log'></LogoutIcon> logout</button>

      </div>
      
     


      </>:<></>
    }

    

    </>:<>
    <button className=' button1' onClick={brought} >Login</button>
    </>}
    <h4 className='custom1' onClick={become} >Become a seller</h4>
    <h4 className='custom1' >More</h4>
    
    <Link to = "/cart" className='linked'>
    <span className='shopspan'>
    <h4 className='customcart '>  Cart </h4>

    <Badge badgeContent = {data?.length} color='primary'>
      <ShoppingCartIcon className='shopping'/>
      </Badge>
    </span>

    </Link>
    
   

    
    <Login open = {open} cancel = {cancel} ok = {ok} setopen = {setopen}></Login>

    </div>
  )
}

export default Custombutton
