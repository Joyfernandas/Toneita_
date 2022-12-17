import React from 'react'
import './ContactDetails.css'
import { AiFillHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import Stepper from './Stepper';
import Navbar from '../../navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
function ContactDetails() {
  return (
  <>
  <Navbar/>
  <Stepper/>
  <div className='commondi'>
    
  <div className='form'>
    <h3 className='nameof'>Contact Details</h3>
    <div className='firstcon'>
    <input type="text" class="form-control" placeholder='Name*' id="usr"  className='detailform'/>
    <input type="text" class="form-control" placeholder='MobileNo*' id="usr"  className='detailform'/>
    </div>
    <h3 className='nameof'>Address</h3>
    <div className='firstcon'>
    <input type="text" class="form-control" placeholder='Pin Code*' id="usr"  className='detailform'/>
    <input type="text" class="form-control" placeholder='Address(House No,Building)*' id="usr"  className='detailform'/>
    <input type="text" class="form-control" placeholder='Locality/town)*' id="usr"  className='detailform'/>
    <div className='drlist'>
        <div>
        <select class="ui dropdown" className='droplist'>
  <option value="">Country</option>
  <option value="1">mattress</option>
  <option value="0">..</option>
</select> 
        </div>
        <div>
        <select class="ui dropdown" className='droplist'>
  <option value="">City</option>
  <option value="1">mattress</option>
  <option value="0">..</option>
</select>
    </div>
    </div>
    <h3 className='nameof'>Save As</h3>
    <div className='icon'>
      <h3><AiFillHome></AiFillHome>Home</h3> 
      <h3><MdWorkOutline></MdWorkOutline>Work</h3> 
    </div>
    <Link to='/deliveryaddress'>
    <button type="button" className='addressbtn'>Add Address</button>
    </Link>
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
  </div>
  </div>
  <Footer/>

  </>
  )
}

export default ContactDetails
