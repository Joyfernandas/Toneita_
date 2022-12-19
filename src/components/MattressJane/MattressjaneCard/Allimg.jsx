import React from 'react'
import './Allimg.css'


const Data=[
    {
    id:1,
    img:('assets/images/mattressjane.png'),

},
{
    id:2,
    img:('assets/images/mattressjane2.png')

}, {
    id:3,
    img:('assets/images/mattressjane3.png')
},
{
    id:4,
    img:('assets/images/mattressjane4.png')
},
{
    id:5,
    img:('assets/images/mattressjane5.png')
}

]
function Allimg(item) {
  return (
    <>
  <div>
   
     <div className='janediv' > 
     {Data.map((item,index)=>
    <img src={item.img} />
    )}
    </div>

     </div>
  </>
  )
}

export default Allimg
