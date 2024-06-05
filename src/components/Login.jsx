import React, { Fragment, useState } from 'react'
import { useContext } from 'react';
import { Datacontext } from '../context/Dataprovider';
import {  Modal } from 'antd';
import axios from "axios"



function Login({open,cancel,ok,setopen}) {
  const [anas,setanas] = useState(true)
  const[fname,setfname] = useState()
  const[lname,setlname] = useState()
  const[password,setpassword] = useState()
  const[email,setemail] = useState()
  const [username,setusername] = useState()
  const[phone,setphone] = useState()
  const [password1,setpassword1] = useState()
  const [emobile,setemobile] = useState()
  const {setaccount} = useContext(Datacontext)
  const url = "https://theflipcart-4.onrender.com"
  const resume = ()=>{
  axios.post(`${url}/signup`,{email:email,password:password,lname:lname,fname:fname,uname:username}).then((res)=>{
    setaccount(res.data.fname)
    setopen(false)
  })
  }

  



  const opensignup = ()=>{
    setanas(false)
  }
  const back = ()=>{
    setanas(true)
  }
  const login = async()=>{
   await axios.post(`${url}/login`,{password:password1,uname:emobile}).then((res)=>{
   if(res.data === `${emobile} has loged in sucessfully`){
    setaccount(emobile)
    setopen(false)




   }
   else{
    alert(res.data)
    
   }

    }).catch((err)=>{
      alert(err)

    })
  }
  return (
    <Fragment>
    

     <Modal  open={open} onCancel={cancel} onOk={ok} footer = {false} >
     {
      anas === true?(
        <div className='div10'>
          <div className='div11'>
            <h1 className='loged'>Login</h1>
            <p className='get'>get access to your Orders,Wishlist and Recommendations</p>
          </div>
          <div className='div12'>
            <input type="text" placeholder='Enter username' className='input3' value={emobile} onChange={(e)=>{
              setemobile(e.target.value)

            }}/>
            <div className='div13'>
            <input type="text" placeholder='Enter Password' className='input2' value={password1} 
              onChange={(e)=>{
                setpassword1(e.target.value)

              }}
            />
            <button className='forget'>Forgot?</button>

            </div>
            <p className='p4'>By Continuing,you agree to FlipKart's <span className='p6'>Terms of Use </span>
              and <span className='p6'>Privacy Policy</span></p>
             <button className='login' onClick={login} >Login</button>

             <h1 className='h8'>OR</h1>
             <button className='request'>Request OTP</button>
             <button className='new' onClick={opensignup} >New to FlipKart? Create an account</button>


          </div>
        </div>
      ):(
        <div className='div10'>
          <div className='div11'>
            <h1 className='signed'>Looks like you're new here!</h1>
            <p className='get'>sign up with your mobile number to get started</p>
          </div>
          <div className='div20'>
            <input type="text"  placeholder='Enter Firstname' value={fname} onChange={(e)=>{
              setfname(e.target.value)
            }}/>
            <input type="text"  placeholder='Enter Lastname' value={lname} onChange={(e)=>{
              setlname(e.target.value)
            }}/>
            <input type="text"  placeholder='Enter Username' value={username} onChange={(e)=>{
              setusername(e.target.value)
            }}/>
            <input type="text"  placeholder='Enter Email' value={email} onChange={(e)=>{
              setemail(e.target.value)
            }} />
            <input type="text"  placeholder='Enter Password' value={password} onChange={(e)=>{
              setpassword(e.target.value)
            }}/>

            <input type="text"  placeholder='Enter Phone' value={phone} onChange={(e)=>{
              setphone(e.target.value)
            }}/>

            <button className='signup' onClick={resume}>Continue</button>
            <button onClick={back} className='back' >Go To Login</button>



          </div>
          

           




        </div>
      )

        }
      </Modal>
    
    </Fragment>
  )
}

export default Login
