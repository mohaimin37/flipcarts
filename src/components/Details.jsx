

import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import  {getProductDetails} from '../redux/actions/productAction'
import Actionitem from './Actionitem'
import Producttable from './Producttable'

const url = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

function Details() {
const {product } = useSelector(state=>state.getItems)

  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(()=>{
if(product && id !== product.id)
    dispatch(getProductDetails(id))
  },[dispatch,id,product])
  console.log(product)
  return (
    <>
  {
   product && Object.keys(product).length && // return arrays of keys 
  <div className='parentdiv1'>
  <div className='parentdiv2'>
  <Actionitem  product = {product}/>
  </div>
  <div className='parentdiv3'>
  
<h1 className='h101'> {product.title.longTitle}</h1>  
<div className='child'> 
<h1 className='h100'>8 Ratings & 1 Reviews </h1>

<img src={url} alt="" className='imgsrc3'  />
</div>
<div className='parentdiv4'>
<h2 className='h105'>
₹{product.price.cost}
 </h2>
 <h2 className='h106'>
 <strike>₹{product.price.mrp}</strike>

 </h2>
 <h2 className='h107'>
 {product.price.discount}off
</h2>
 </div>

   <Producttable product = {product}/>

  </div>


  </div>

  }
  
      
    </>
  )
}

export default Details





