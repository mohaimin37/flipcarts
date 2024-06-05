import {success,failure,getproduct,getproductsuccess,getproductfail} from "../constants/constants.js"
import axios from 'axios'

const url = "https://theflipcart-4.onrender.com"


export  const productAction = ()=> async(dispatch)=>{
 try {
  const {data} = await axios.get(`${url}/datas`)
        dispatch({type:success,payload:data})
   

    
 } catch (error) {
    dispatch({type:failure,payload:"big error"})

 }
}
//dispatch ko call karte he reducer call ho jata hai 

export const getProductDetails = (id)=> async(dispatch)=>{
try {
   dispatch({type:getproduct})

   const {data} = await axios.get(`${url}/product/${id}`)
 
   dispatch({type:getproductsuccess,payload:data})
   
} catch (error) {
   dispatch({type:getproductfail,payload:"getting product get failed "})
}
}
