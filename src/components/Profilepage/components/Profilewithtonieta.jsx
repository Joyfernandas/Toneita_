import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../navbar/Navbar'
import './Profilewithtonieta.css'

function Profilewithtonieta() {
  return (
  <>
  <Navbar/>
  <div className="container">

    <div className="col-md-8">
    <div className='perinfo'>
    <h1 className='infotxt'>Personal Info</h1>
    <img src="../images/personalinfoicon.png" alt=""/>
    </div>
    <div className='namediv'>
        <div className='separate'>
        <label for="First Name">First Name</label>
    <input type="textbox" placeholder='first Name' className='firstn'/>
    <label for="Last Name">Second Name</label>
    <input type="textbox" placeholder='last Name' className='firstn'/>
        </div>
    </div>
    <div>
    <label for="Email">Email</label>
    <input type="textbox" placeholder='Enter your Email'className='txtemail' />  
    </div>
    <div>
    <label for="formFileMultiple">profile photo</label>
    <input placeholder='upload profile here' className='txtemail' type="file" id="formFileMultiple" />  
    </div>
    <div className='addcancel'>
        <button type='button' className='cancel'>Cancel</button>
        <button type='button' className='saveit'>Save Changes</button>

    </div>
    </div>
    <div className="col-md-4">
    <div className='withtoneita'>
    <h4 className='withtxt'>With Toneita</h4>
    <p className='browse'>All your browsing information with toneita</p>
    <div className='btnwithtoneita'>
        <button type='button' className='linkbtn'>Your orders</button>
        <button type='button'  className='linkbtn'>Your wishlist</button>
        <button type='button'  className='linkbtn'>Your cart</button>
        <button type='button'  className='linkbtn'>Your Return</button>
        <button type='button'  className='linkbtn'>Recently Viewed</button>
    </div>
  </div>
    </div>
  </div>



  {/* <div className='infowith'>
  <div className='infodiv'>
    <div className='perinfo'>
    <h1 className='infotxt'>Personal Info</h1>
    <img src="../images/personalinfoicon.png" alt=""/>
    </div>
    <div className='namediv'>
        <div className='separate'>
        <label for="First Name">First Name</label>
    <input type="textbox" placeholder='Enter your first Name' className='firstn'/>
    <label for="Last Name">Second Name</label>
    <input type="textbox" placeholder='Enter your last Name' className='firstn'/>
        </div>
    </div>
    <div>
    <label for="Email">Email</label>
    <input type="textbox" placeholder='Enter your Email'className='txtemail' />  
    </div>
    <div>
    <label for="Email">profile photo</label>
    <input type="textbox" placeholder='upload profile here' className='txtemail' />  
    </div>
    <div className='addcancel'>
        <button type='button' className='cancel'>Cancel</button>
        <button type='button' className='saveit'>Save Changes</button>

    </div>
  </div>
  <div className='withtoneita'>
    <h4 className='withtxt'>With Toneita</h4>
    <p className='browse'>All your browsing information with toneita</p>
    <div className='btnwithtoneita'>
        <button type='button' className='linkbtn'>Your orders</button>
        <button type='button'  className='linkbtn'>Your wishlist</button>
        <button type='button'  className='linkbtn'>Your cart</button>
        <button type='button'  className='linkbtn'>Your Return</button>
        <button type='button'  className='linkbtn'>Recently Viewed</button>
    </div>
  </div>
  </div> */}
  <Footer/>
  </>
  )
}

export default Profilewithtonieta
