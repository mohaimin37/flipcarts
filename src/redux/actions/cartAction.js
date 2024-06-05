//thunk use here as two function  call has come 
import {getCart,removeCart} from "../constants/constants"
import axios from "axios"
const url = "https://theflipcart-4.onrender.com"
export const cartDetails = (id,quantity) => async(dispatch) => {
    try {
       const {data} = await axios.get(`${url}/product/${id}`)
       console.log(data)
 
       dispatch({type:getCart,payload:{...data,quantity}})
 
 
 
       
    } catch (error) {
       console.log("error coming while getting cartProduct")
 
       
    }
 
 }
 
 export const deleteCartDetails = (id) => async (dispatch) => {
    dispatch({type:removeCart,payload: id})
    
 
 }
 
 