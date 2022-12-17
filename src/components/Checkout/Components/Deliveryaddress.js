import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../navbar/Navbar'
import './Deliveryaddress.css'
import Stepper from './Stepper'
import { Link } from 'react-router-dom'
function Deliveryaddress() {
  return (
   <>
   <Navbar/>
   <Stepper/>
   <div className='deliveryadddiv'>
   <div className='commdelivery'>
    <div className='adddiv'>
    <h4 className='deltxt'>SELECT DELVERY ADDRESS</h4> 
    <button type="button" className='btndel'>Add New Address</button>
    </div>
    <div className='addresstot'>
    <div className='addhomcheck'>
    <input type="checkbox"/>
        <h4 className='name'>Markandan</h4>
        <p className='colorname'>[Home]</p>
    </div>
    <div>
        <h4>23, Newyork street, goldman sachman company,
London, united kingdom</h4>
<h5>Mobile:8509473069</h5>
<button type="button" className='btndel'>EDIT ADDRESS</button>
    </div>
    </div>
   </div>
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
    <Link to='/payment'>
    <button type="button" className='continuebtn'>Continue</button>
    </Link>
  </div>
  </div>
  <Footer/>
   </>
  )
}

export default Deliveryaddress
