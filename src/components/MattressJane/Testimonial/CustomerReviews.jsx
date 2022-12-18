import React from 'react'
import { NavItem } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import Rating from '../MainTestimonial/Rating'
import './CustomerReviews.css'


function CustomerReviews(item) {
  return (
   <>
   {/* <Rating/> */}
   <div className='cusmain'>
    <div className='reviewcustomer'>
        <div className='eclipsecontent'><img src="assets/images/Ellipse 12.png" alt="" className='eclipse' />
       <div> <h3 className='janvi'>{item.cusname}</h3>
        <p>Customer</p></div>
        </div>
        <div className='contentreview'>
            <h4 className='revtxt'>
           {item.content}
            </h4>
        </div>
        <div className='dateandstar'>
            <h4 className='tmedte'>{item.date}</h4>
            <div><h4>4.5 <AiFillStar className='star'></AiFillStar></h4></div> 
        </div>
        
    </div>

   </div>

   </>
  )
}

export default CustomerReviews
