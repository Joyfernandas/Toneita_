import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
  } from "mdb-react-ui-kit";
  import './boughtcard.css'

function Boughtcard(item) {
  return (
   <>
   <div>
    <div className='squadiv'>
                  <MDBCard >   
                  <input type="checkbox" className='check' /> 
           <MDBCardImage className="selleimg"
           
             src={item.img}
             
             alt="Data"
             position="top"
           />
           <div id='bodyboughtcard'>
            
             <div className="d-flex justify-content-between mb-3">
               <h2 className="mb-0" id='boughtcardhead'>{item.heading}</h2><br />
         

              
               {/* <div class="ms-auto text-warning"> <h5>{item.rating} <MDBIcon fas icon="star" /> </h5></div><h5>(27)</h5> */}
             </div>  

             <div class="d-flex mb-2" style={{flexDirection: "column"}}>
             
               <div className="display"> 
               <div>  <p class="text-muted mb-0 font-size-fix">
                 {item.price} <span class="fw-bold"> <del>  {item.price}</del></span>
               </p> </div>
               <div className='arrbtn'><button type="button" class="offerbtn font-size-fix">(10% Offer)</button></div>
                
                 </div>
               {/* <h1 className='arrowright'><BsFillArrowRightSquareFill></BsFillArrowRightSquareFill></h1> */}
             </div>
           </div>
             
         </MDBCard >
        
    </div>
    </div>
    </>
  )
}

export default Boughtcard
