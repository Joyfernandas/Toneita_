import React from 'react'
import './Mattressonthewway.css'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Navbar from '../../navbar/Navbar'

function Mattressontheway() {
  return (
    <>
    <Navbar/>
    <div className='ontheway'>
    <div>
    <img src="assets/images/lastcheckout.png" alt=""/>
    <h4 className=''>your mattress is on the way</h4>
    </div>
    <Link to='/mattress'>
    <button type="button" className='continuebtn'>Continue Shopping</button>  
    </Link>
    </div>
    <Footer/>
    </>
    
  )
}

export default Mattressontheway
