import React from 'react'
import { useSelector } from 'react-redux'
import Cartleft from './Cartleft'
import Cartright from './Cartright'
import {Grid} from "@mui/material"
import Empty from './Empty'

function Cart() {
  const {data} = useSelector(state=>state.cartData)
  const place = ()=>{
    window.location.reload(alert("your order has been placed"))
  }

  return (
 <>
 
 {
  data.length>0?
  <Grid container className='parentcontainer con1'>
  <Grid item lg={9} md= {9} sm = {12} xs = {12}>
  <div className='length1' >
    <h3>My Cart ({data.length})</h3>
  </div>
  {
    data.map(product =>{
      return(
        <>
          <Cartleft product={product}/>
        </>
      )
    })
  }
  <div className='buttondiv'> <button className='button5' onClick={place}>Place Order</button></div>


  </Grid>
  <Grid item lg= {3} md ={3} sm ={12} xs ={12}>
  <Cartright data = {data}/>

  </Grid>


  </Grid>:<>
  <div className='empty'><Empty/></div>

  </>
 }
 </>
  )
}

export default Cart
