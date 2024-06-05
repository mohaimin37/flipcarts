import React, { useState,useEffect } from 'react'

function Cartright({data}) {
 
  const [price,setprice] = useState(0)
  const [discount,setdiscount] = useState(0)
  useEffect(()=>{
    totalamount();
    },[data])
    const totalamount = () => {
      let price = 0, discount = 0;
      data.map(item=>{
       price += item.price.mrp
          discount += (item.price.mrp - item.price.cost) 
          return price , discount
      })
      setprice(price);
      setdiscount(discount);
  }




  return (
 <div>
 <div className='parentaldiv1'>
  <h3 className='childrendiv1'>Price Details</h3>
 </div>
 <div className='parentaldiv2'>
  <h3>Price ({
    data &&  
    data.length
  } item) 
   <span className='sp1'> {price} </span>
  </h3>

  <h3 >Discount 
   <span className='sp1 '> {discount} </span>
  </h3>

  <h3>Delivery Charge
  <span className='sp1'> ₹40</span>
  </h3>

  <p className='h3h3'>Total Amount
  <span className='sp1'> ₹{price - discount + 40}</span>
  </p>

  <h3 className='discount'>You will save 
   <span > {discount - 40} </span>
   on this order
  </h3>
 </div>

 </div>
  )
}

export default Cartright
