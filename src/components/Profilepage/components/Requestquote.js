import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../navbar/Navbar'
import './Requestquote.css'
function Requestquote() {
  return (
    <>
    <Navbar/>
    <div className='commonquotediv'>
    <div className='queriediv'>
        <div className='contant'>
        <img src="../images/callicon.png" alt=""/>
        <div>
        <h3 className='querytxt'>Tap to Call for any queries</h3>
        <p className='querytxt1'>feel Free to call our store</p>
        </div>
        </div>
        <div>
        <img src="../images/Rectangle 120.png" alt="" className='imgquery'/>
        </div>
    </div>
    <div className='quotediv'>
        <div>
        <h3 className='requtxt'>Request a Quote</h3> 
        <p className='requtxt2'>for more details about any product or bulk product </p>
        </div>
        <div className='allcontent'>
        <div>
    <label for="Email">Full Name</label>
    <input type="textbox" placeholder='Enter your Full Name'className='namefirst' />  
    </div>
    <div>
    <label for="Email">Organization</label>
    <input type="textbox" placeholder='Enter your organization'className='namefirst' />  
    </div>
    <div>
    <label for="Email">Email</label>
    <input type="textbox" placeholder='Enter your Email'className='namefirst' />  
    </div>
    <div>
    <label for="Email">Select country</label>
    <input type="textbox" placeholder='select your Country'className='namefirst' />  
    </div>
    <div>
    <label for="Email">Message</label>
    <input type="textbox" placeholder='Enter your Message'className='namesecond' />  
    </div>
    <div className='subdiv'>
    <button type="button" className='sub'>Submit</button>
    </div>
        </div>
      
    </div>
    </div>
    <div>
    <Footer/> 
    </div>
        </>
  )
}

export default Requestquote
