import React from 'react'
import Ourproducts from '../../Index/Ourproducts/Ourproducts'
import Prodcard from '../../Index/Ourproducts/Prodcard'
import './Aboutslider.css'

function Aboutslider() {
  return (
<>
<div className='mainabout '>
  <div>
  <div className='contentaboutslide'>
    <h4 className='txtabout1'>Better Homes and a Better World</h4>
    <h3 className='txtabout2'>Contact us to find out more or how we can help you better.
</h3>
<div>
<button type="button" className='browsebtn'>Browse our Products</button>
</div>
</div>
<div>
  <Ourproducts/>
</div>
  </div>
</div>
</>
  )
}

export default Aboutslider
