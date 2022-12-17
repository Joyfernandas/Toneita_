import React from 'react'
import "../carouselseller/squarecss.css"
import { Link } from 'react-router-dom';

import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
  } from "mdb-react-ui-kit";



function Square(item) {
    
  return (
    <Link to='/jane'>
    <div className='squarediv'>
                  <MDBCard >    
           <MDBCardImage className="sellersimg"
             src={item.img}
             
             alt="Data"
             position="top"
           />
           <MDBCardBody>
            
             <div className="d-flex justify-content-between mb-3">
               <h2 className="mb-0">{item.heading}</h2><br />
         

              
               <div class="ms-auto text-warning"> <h5>{item.rating} <MDBIcon fas icon="star" /> </h5></div><h5>(27)</h5>
             </div>  

             <div class="d-flex mb-2" style={{flexDirection: "column"}}>
              <p class="text-muted mb-0 font-size-fix">
                ₹ {item.price} <span class="fw-bold"> <del> ₹ {item.price}</del></span>
               </p> 
               <div className="display"> 
               <div className='arrbtn'><button type="button" class="offerbtn font-size-fix">(10% Offer)</button></div>
                 <div> <img src="../images/Frame262.png" alt="" /></div>
                 </div>
               {/* <h1 className='arrowright'><BsFillArrowRightSquareFill></BsFillArrowRightSquareFill></h1> */}
             </div>
           </MDBCardBody>
           
         </MDBCard > 
    </div>
    </Link>
     )
}

export default Square