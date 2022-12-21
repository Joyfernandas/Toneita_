import '../Ourproducts/Ourproduct.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
} from "mdb-react-ui-kit";

import { Box } from '@chakra-ui/react';

import Container from 'react-bootstrap/Container';
import { Heading } from '@chakra-ui/react'
import React,{useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prodcard from './Prodcard';
import {Data} from './Prodcard'
import * as fontas from "react-icons/fa";




export  const  Ourproducts=(items)=> {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    centerMode: false,
    arrows:false,
    pauseonhover:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    Ourproducts: true,
    speed: 1600,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
          centerMode: true,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [slideref,setSliderRef]=useState()
  return (
    <>
  
      {/* carousel our products */}

    <div className="ourproducts">


<div className="arrowsslick"><Heading mb={3} style={{marginBottom:"20px",marginTop:"20px",fontWeight:"bolder"}}>Our Products   

</Heading>
<div className="cardstyles">
  <span><fontas.FaChevronCircleLeft onClick={slideref?.slickPrev}/> </span>
 <span> <fontas.FaChevronCircleRight onClick={slideref?.slickNext}/> </span></div>
</div>

  <MDBContainer fluid className="my-5" id='productsrow'>
      <MDBRow>
      <Slider {...settings}ref={setSliderRef}>

      {Data.map((props)=>{
  return(
    <Prodcard
    img={props.img}
    title={props.title}/>
  )
})}
        </Slider>
      </MDBRow>
    </MDBContainer>

</div>
    </>
  )
}

export default Ourproducts