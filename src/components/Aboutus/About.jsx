import React from 'react'
import './About.css'
import GirlMattress from './Girlwithmatt/GirlMattress'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'

function About() {
  return (
   <>
   <Navbar/>
   <div className='totalblurimg container rounded-4'>
    <h1 className='aboutus'>
        About us
    </h1>
    <div>
    <div className='abimg container rounded-5'>
       <div className='contentspec'>
         <p className='bulding'>Building a More Sustainable Era with Recycled Polyester Staple Fibre!</p>
         <h3 className='maincontent'>With a significant interest in sustainability, we are very attentive to utilizing recycled polyester staple fibre from pet bottles in our goods. We offer a wide selection of comfy pillows including Cushions, baby pillows and adult pillows with various sizes and thicknesses of filling.</h3>
    </div>
    </div>
    </div>
   </div>
   <GirlMattress/>
   <Footer/>
   </>
  )
}

export default About
