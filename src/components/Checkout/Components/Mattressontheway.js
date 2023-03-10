import React from 'react'
import './Mattressonthewway.css'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Navbar from '../../navbar/Navbar'

function Mattressontheway() {
  return (
    <>
      <div className='ontheway d-flex justify-content-center w-100'>
        <div>
          <img src="assets/images/lastcheckout.png" alt="" className='imgontheway' />
          <h4 className='onthewaytxt'>Your Mattress Is On The Way</h4>
        </div>
        <Link to='/mattress'>
          <button type="button" className='continuebtn'>Continue Shopping</button>
        </Link>
        <button type='button' className='orderview'>View Orders</button>
      </div>
    </>

  )
}

export default Mattressontheway
