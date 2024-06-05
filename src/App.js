import React from 'react'
import Home from './Home'
import Header from "./components/Header"
import Dataprovider from './context/Dataprovider'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Details from "./components/Details"
import Cart from "./components/Cart"

function App() {
  return (
    <Dataprovider>
    <BrowserRouter>

    <Header></Header>
    <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/product/:id' element = {<Details/>}></Route>
        <Route path='/cart' element = {<Cart/>}></Route>



    </Routes>
</BrowserRouter>
    </Dataprovider>
  )
}

export default App
