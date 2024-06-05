import React,{useState} from 'react'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { cartDetails } from '../redux/actions/cartAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {post} from "../utils/paytm"
const url = "https://theflipcart-4.onrender.com"
function Actionitem({product}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [quantity,setquantity] = useState(1);

  const {id} = product;

  const addtocart = ()=>{
    dispatch(cartDetails(id,quantity))
    navigate("/cart")
  }
  const buynow = async()=>{
    alert('Sorry for the inconveniance please do not tap ok as paytm gatway is not working we are working on it..  back one step and refresh')
    try {
   await axios.post(`${url}/payment`,{amount:"500",email:"syedanas19072002@gmail.com"}).then((res)=>{
    let information = {
      action:' https://securegw-stage.paytm.in/order/process',
      params:res
    }
        console.log(res.data)
        post(information)
      })
      
      
      
    } 
    catch (error) {
      console.log("error while calling payment api ", error)
      
    }
  }
  return (
   <div className='actionitem'>
   <br /><br />
<img src= {product.detailUrl}  alt="product"  className='detailurl'/>
<button className='btnone addto' onClick={addtocart}> <span><ShoppingCartIcon/></span> Add to Cart </button>
<button className='btntwo addto' onClick = {buynow}> 
<span>
<FlashOnIcon/>
</span>
 Buy Now  </button>

   </div>
  )
}

export default Actionitem
