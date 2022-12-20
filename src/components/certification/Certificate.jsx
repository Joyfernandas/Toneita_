import React from 'react'
import './Certificate.css'

function Certificate() {
  return (
   <>
   <div className="container-fluid d-flex align-items-center justify-content-center flex-row certific">
    <div className="col-md-3 d-flex certificate-wrapper">
       
        {/* <div className="d-flex"> */}
        <img className='img-fluid imgcerti' src="assets/images/image1.png" alt="" />
         <h3 className='text-center our'>Our certification</h3></div>
         {/* </div> */}
    <div className="col-md-3 d-flex align-items-center justify-content-center">
        <img className='img-fluid imgcerti' src="assets/images/certificate.png" alt=""/>
    </div>
    <div className="col-md-3 d-flex align-items-center justify-content-center">
    <img className='img-fluid imgcerti' src="assets/images/certificate.png" alt=""/>
    </div>
    <div className="col-md-3 d-flex align-items-center justify-content-center">
    <img className='img-fluid imgcerti' src="assets/images/certificate.png" alt=""/>
    </div>
   </div>
   </>
  )
}

export default Certificate
