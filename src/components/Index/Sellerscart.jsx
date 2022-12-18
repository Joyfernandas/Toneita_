import "../Index/Sellers.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as fontas from "react-icons/fa";
import {
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { Heading } from '@chakra-ui/react'
import Square from "../carouselseller/Square";
import { useState } from "react";

const Data=[
  {
      id:1, 
      img:("assets/images/sellerimg (1).png"),
      heading:'Mattress',
      rating:4.4,
      price:1745,
  },
  {
      id:2, 
      img:("assets/images/sellerimg (2).png"),
      heading:'Mattress',
      rating:4.4,
      price:1745,
  },
  {
      id:3, 
      img:("assets/images/sellerimg (3).png"),
      heading:'Mattress',
      rating:4.4,
      price:1745,
  },
  {
      id:4, 
      img:("assets/images/sellerimg (4).png"),
      heading:'Mattress',
      rating:4.4,
      price:1745,
  },
  {
    id:5, 
    img:("assets/images/sellerimg (1).png"),
    heading:'Mattress',
    rating:4.4,
    price:1745,
},
{
  id:6, 
  img:("assets/images/sellerimg (2).png"),
  heading:'Mattress',
  rating:4.4,
  price:1745,
},
{
  id:7, 
  img:("assets/images/sellerimg (3).png"),
  heading:'Mattress',
  rating:4.4,
  price:1745,
},
{
  id:8, 
  img:("assets/images/sellerimg (4).png"),
  heading:'Mattress',
  rating:4.4,
  price:1745,
},

]

function Sellerscart() {
  
  const settings = {
    dots: true,
    infinite: true,
    Sellerscart: true,
    arrows:false,
    speed: 1600,
    autoplay:true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: false,
    slidesToShow:4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1
        }
      }
    ]
  };


const [slideref,setSliderRef]=useState()
  return (
    <>
    
    {/* Our Best Sellers */}
<div class="divseller">
<MDBContainer className="containerslick">

<div className="arrowsslick"><Heading mb={3} style={{marginBottom:"20px",marginTop:"20px",fontWeight:"bolder"}}>Best Sellers    

</Heading>
<div className="fontstyles">
  <span><fontas.FaChevronCircleLeft onClick={slideref?.slickPrev}/> </span>
 <span> <fontas.FaChevronCircleRight onClick={slideref?.slickNext}/> </span></div>
</div>
      <MDBRow>
      <Slider {...settings}ref={setSliderRef}>
       {Data.map ((props)=>{
        return(
       <Square 
       heading={props.heading}
       img={props.img}
       rating={props.rating}
       price={props.price}
       />
        )
       }  
       )}             
       </Slider>
      </MDBRow>
    </MDBContainer><br /><br />
    </div>
    </>
  )
}

export default Sellerscart
