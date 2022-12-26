import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../navbar/Navbar'
import Pay from './Payment'
import './PaymentMode.css'
import Stepper from './Stepper'
import { Link } from 'react-router-dom'

function PaymentMode() {
  return (
   <>
   <Navbar/>
   <Stepper/>
   <div className='paymodetota container'>
   <Pay/>
   
   {/* <div className='paymentdiv'>
    <div className='mode'>
    <h3 className='paym'> PAYMENT MODE</h3>
    choose payment
    <button type="buttton" className='btndel'>Edit Address</button>
    </div>
    <div className='allbox'>
    <div className='checkboxdiv'>
    <input type="checkbox" className='colorcheck'/>
   <p className='cash'>Cash On Delivery</p>
    </div>
    <div className='checkboxdiv'>
    <input type="checkbox" className='colorcheck'/>
   <p className='cash'>UPI</p>
    </div>
    <div className='checkboxdiv'>
    <input type="checkbox" className='colorcheck'/>
   <p className='cash'>Credit/Debit Card</p>
    </div>
    <div className='checkboxdiv'>
    <input type="checkbox" className='colorcheck'/>
   <p className='cash'>Netbanking</p>
    </div>
    </div>
   </div> */}
   
   <div className='PriceDetailsdet'>
    <h4 className='tottxt'>PRICE DETAILS(2 items)</h4>
    <div className='pricecontent'>
    <div>
        <h5 className='blendtxt'>Total Price</h5>
        <h5 className='blendtxt'>Discount</h5>
        <h5 className='blendtxt'>Delivery Charges</h5>
    </div>
    <div>
        <h5 className='bldtxt'>₹50,600</h5>
        <h5 className='bldtxt'>-₹13,600</h5>
        <h5 className='free'>FREE</h5>
    </div>
    </div>
    <div className='totalprice'>
    <h4 className='tottxt'>Total amount</h4>
    <h4>₹50,600</h4>
    </div>
    <div className='otpbtn'>
    <h6 className='otptxt'>we sent a OTP to your registered mobile no.</h6>
    <div className='txtboxbtndiv'>
        <input type="texbox" placeholder='Enter your OTP' className='boxxt'/>
        <button type="button" className='checkbtn'>CHECK</button>
    </div>
    <Link to='/ontheway'>
    <button type="button" className='continuebtn'>Buy Now</button>
    </Link>
    </div>
  </div>
  </div>
  <Footer/>
   </>
  )
}

export default PaymentMode
