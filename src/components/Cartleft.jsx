import React from 'react'
import { ellepses } from './ellepses'
import Buttoncomponent from './Buttoncomponent'
import { useDispatch } from 'react-redux'
import { deleteCartDetails } from '../redux/actions/cartAction'

function Cartleft({product}) {
  const dispatch = useDispatch()
  const remove = (id)=>{
    dispatch(deleteCartDetails(id))



  }
  
const url = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  return (
    <div className='leftlength'>
    <div className='length2' style={{display:'flex', flexDirection:"column"}}>
      <img src={product.url} alt="product" style={{height:110,width:110,backgroundColor:'inherit'}} />
      <Buttoncomponent/>

    </div>
    <div className='length3' style={{margin:15}} >
      <h3 style={{fontSize:20}}>{ellepses(product.title.longTitle)}</h3>
      <div className='length4'>
       <h4 className='seller'>Seller : RetailNet</h4>
       <span> <img src={url} alt="FlipCart" style={{width:80, marginLeft:10}} /></span>
      </div>
      <div className='parentdiv4'>
<h2 className='h105'>
₹{product.price.cost}
 </h2>
 <h2 className='h106'>
 <strike>₹{product.price.mrp}</strike>

 </h2>
 <h2 className='h107'>
 {product.price.discount} off
</h2>
 </div>
 <button className='btn1000' onClick={()=>remove(product.id)} >Remove</button>

    </div>


 
    </div>
  )
}

export default Cartleft
