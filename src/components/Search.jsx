import React,{useEffect, useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from 'react-redux';
import { productAction } from '../redux/actions/productAction';
import { Link } from 'react-router-dom';


function Search() {
  const {products} = useSelector(state=>state.getProducts)
  const dispatch = useDispatch()
  const [text,settext] = useState("")
  useEffect(()=>{
    dispatch(productAction())

  }
  ,[dispatch])

  const clicked = ()=>{
    settext("")
  }
  return (
    <div className='div2'>
    <input className='input1' type="text" placeholder='Search for Products ,Trends and More' value={text} onChange={(e)=>{
      settext(e.target.value)
    }} />
    
    <SearchIcon className='search'/>
    {
      text ?<div className='h200'>
      {
        products.filter(data=>data.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(data=>{
          return(
            <>
            <h2 className='h201' onClick={clicked}>
            <Link to = {`/product/${data.id}`}    
            style={{ textDecoration:'none', color:'inherit'}}>

            {data.title.longTitle}
            </Link>

            </h2>
            </>
          )
        })
      }

      </div>:<>

      </>
    }
   
    </div>
  )
}

export default Search
