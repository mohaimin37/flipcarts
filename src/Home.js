import React from 'react'
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Carausels from './components/Carausels'
import './styled/app.css'
import Slide from './components/Slide';
import Slidebrother from './components/Slidebrother';
import Banner from './components/Banner';


function Home() {
  return (
<>
    <Navbar></Navbar>
    <div className='div8'>
    <Carausels></Carausels>
    <Slidebrother title = "Deal of the Day " timer = {true} ></Slidebrother>
    <Banner></Banner>
    <Slide title = "Discounts for You" timer = {false} ></Slide>
    <Slide  title = "Suggested Items " timer = {false} ></Slide>
    <Slide  title = "Top Selection " timer = {false} ></Slide>
    <Slide  title = "Recommended Items " timer = {false} ></Slide>
    <Slide  title = "Trending Offfers " timer = {false} ></Slide>
    <Slide  title = "Seasons's Top Picks" timer = {false} ></Slide>
    <Slide  title = "Top Deals on Accessories " timer = {false} ></Slide>

   

    



    </div>
   
    
    </>
  )
}

export default Home

