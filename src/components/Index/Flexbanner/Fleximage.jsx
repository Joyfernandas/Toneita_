import React from 'react'
import './Fleximage.css'
import { Link } from 'react-router-dom'
function Fleximage() {
  return (
   <>
   <div class="imgflex"><img src="assets/images/Rectangle87.png" className="img-fluid" alt="Responsiveimage" />
   
<div>
  <Link to='/mattress'>
  <button type='button' className='flexbtnshop'>Shop now</button>
  </Link></div>
<img src="assets/images/babymattress.png" alt=""  className='img-fluid sleepbabymattress'/>
 </div>
   </>
  )
}

export default Fleximage