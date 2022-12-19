import React from 'react'
import { AiOutlineShareAlt ,AiFillStar,AiOutlineStar} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Allimg from './Allimg';

import './jane.css'
function Jane() {

  return (
   <>
   
   <div className='mainjane'>  
<div  className='img-margin'>
<div  className='allimgjan'>
    <Allimg/>
    </div>
    <div >
    <div className='janedivmattress'>
     <img src="assets/images/mattressmain.png" alt="" className='img-fluid exjane' />
     <div className='btnjane'><button type='button' className='jbtn1'>Add to Card</button>
   <Link to='/pricedetails'> <button type='button' className='jbtn'>Shop Now</button></Link>
   </div>
    </div>
    </div>

<div className='for-reponsive'>
    <div className='margin'>

        <div className='head1'><h1 className='txtj'>Mattres Jane</h1>
        <div className='icons'><h2>< AiOutlineShareAlt /></h2>
        <h2><AiFillStar className='i' ></AiFillStar></h2></div>
        
        </div>
        <h6 className='premiummattress'>The Most Premium Mattress For You</h6>
        <div className='rate'><div className='iconjan'><h5><AiFillStar></AiFillStar></h5><h5>4.4 </h5> </div> <div><p className='rateingss'>52 Ratings</p></div></div>
     <div className='pricelist'><h6 className='boldjan'>₹23,995 <del className='striketxt'>₹33,215</del></h6> <h6 className='offerjan'>(20% offer)</h6> <p  className='taxtxt'>inclusive of all taxes</p></div>
     <h5 className='featuresbtn'>Features</h5>
     <div className='flexibletxt'><button type='button'className='btncolor'>Flexible</button><button type='button' className='btncolor'>recycled polyter stable fibre</button><button type='button' className='btncolor'>comfort</button> <div><button type='button' className='more'>Viewmore</button></div></div>
<h4 className='featuresbtn'>Fabric</h4>
<div className='fabricdiv'> <h3 className='poltxt'>100%Spun polyster</h3>
 
 <div>
 
 <h5><input type="text" placeholder='Enter your Pincode' /></h5>
 
 </div>
 </div>
<div className='methodtype'><h3 className='metypetxt'>Size</h3> <h3 className='metypetxt'>Dimension</h3> <h3  className='metypetxt'>Height</h3></div>
<div className='dropdowntype'>
<div className='materialssize' >
<select class="ui-dropdown1 jane">
  <option >size</option>
  <option >..</option>
  <option >..</option>
</select>

<div>
<select class="ui-dropdown1 jane">
  <option className='ma1' >Material</option>
  <option >mattress</option>
  <option >..</option>
</select>
</div>
<div>
    
<select class="ui-dropdown1 jane">
  <option >sort by Recommented</option>
  <option >Pillows</option>
  <option >...</option>
</select>    
</div>
</div>
     </div>
    </div>
    </div>
    </div>
</div>
   </>
  )
}

export default Jane