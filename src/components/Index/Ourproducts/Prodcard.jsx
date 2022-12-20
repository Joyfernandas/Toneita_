import React from 'react'
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import './Ourproduct.css'



export const Data=[
    {
        id:1, 
        img:("https://images.unsplash.com/photo-1629949008265-af1bcaf59786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"),
        title:'Pillows',
       
    },
    {
      id:2, 
      img:("https://images.unsplash.com/photo-1632829401795-2745c905ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hdHRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"),
      title:'Mattress',
     
  },
  {
    id:3, 
    img:("https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=600"),
    title:'Cushions',
   
  },
  {
    id:4, 
    img:("https://media.istockphoto.com/id/1304920033/photo/beautiful-brunette-woman-in-sportswear-practicing-yoga-doing-supta-baddha-konasana-exercise.jpg?b=1&s=612x612&w=0&k=20&c=d4vUc_ypBLR821TIEV4pkfTY-1hO6fPthhGHWPypmUA="),
    title:'Bolster',
   
  },
  {
    id:5, 
    img:("https://images.pexels.com/photos/776120/pexels-photo-776120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
    title:'Pillows',
   
  },
  {
    id:6, 
    img:("https://images.pexels.com/photos/2396108/pexels-photo-2396108.jpeg?auto=compress&cs=tinysrgb&w=600"),
    title:'Cushions',
   
  },
  ]



function Prodcard(items) {
  return (
<>

<div className='div' style={{ backgroundImage: `url(${items.img})`}} >
 {/* <img src={items.img}
  alt="" /> */}
   <div className='heading'>
   <p className='txttitle'> {items.title}</p>
<p className='txttitle'><BsFillArrowRightSquareFill  fa-sm className='arrowicon'></BsFillArrowRightSquareFill></p>
   </div>
    </div>

</>
  )
}

export default Prodcard