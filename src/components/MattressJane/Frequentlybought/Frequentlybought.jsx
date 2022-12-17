import './frequentlybought.css'

import React from 'react'
import Square from '../../carouselseller/Square'

import Boughtcard from './Frequentboughtcard/Boughtcard';
const Data=[{
    id:1, 
    img:("../images/pill1.png"),
    heading:'Tonietas Pillows',
    rating:4.4,
  price:('₹741')
},
{
    id:2, 
    img:("../images/pill2.png"),
    heading:'Tonietas Pillows',
    rating:4.4,
    price:('₹741')
   
},
]

function Frequentlybought() {
    
  return (
   <div className='freequentboughttogether'>
    <div className='titlefrequent'> <h1 className='tibo'>Frequently Bought Together</h1></div>
   
<div className='positionbought'>
    {/* first cart */}
    {Data.map ((props)=>{
        return(
<Boughtcard heading={props.heading}
       img={props.img}
       price={props.price} 
/>
        )
    })}
    <div className='totaldivcart'>
    <div className='iconfree'><img src="./Images/image1.png" alt="" id='boughtimg'/>  </div>
    <div className="ftxt"><h2 className='offreequent1'>Total</h2><h5 className='offreequent'>(40% offer)</h5></div>
   
    <div className='buynew'>
        {/* icon */} 
        
        <div className='img-cartitems'>
            <p className='item'>1 item</p>
            <h3 className='pricelists'>₹23,995</h3>
        </div>
        <h5 className='item'>+</h5>
        <div>
            <p className='item'>1 item</p>
            <h3 className='pricelists'>₹23,995</h3>
        </div>
        <h5 className='items'>=</h5>
        <div>
            <p className='item'>Total</p>
            <h3 className='pricelists'>₹24949</h3>
        </div>
        <div>
       
    </div>
</div>
    
<div className='add2card'>
<button type='button' className='add2'>Add 2 Itmes To Cart</button> 
   </div>

</div>
   </div>
   </div>
  )
}

export default Frequentlybought