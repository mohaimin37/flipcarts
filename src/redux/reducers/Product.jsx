
//2nd working reducer 
import {success,failure,  getproductsuccess, getproductfail, getproductupdate,getCart,removeCart} from "../constants/constants.js"

export const getProductsReducer = (state = {products:[]},action) => {
    switch(action.type){
        case success :
            return {products :action.payload}
            case failure : 
            return {error:action.payload}
            default:
                return state
    }


}
//here products is an array 



export const getitemreducer = (state = {product:{}},action)=>{
    switch(action.type){
        
            case getproductsuccess :
                return {
                    product:action.payload
                }
                case getproductfail :
                    return{
                        product:action.payload
                    }
                    case getproductupdate :
                        return{
                            product:{}
                        }
                        default: return state
                            
                            
                    
    }


}

export const getcartproduct = (state = {data:[]},action)=>{
    switch(action.type){
        case getCart : return {
            ...state,data:[...state.data,action.payload]
        }
        case removeCart : return {
            ...state, data: state.data.filter(product => product.id !== action.payload)
        }
         default : return state
    }

}





