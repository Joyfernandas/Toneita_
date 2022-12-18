import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import "../navbar/Nav.css"
import BreadcrumbExample from '../Bredcrumb/Bredcrumb';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import './mattress.css'
import {BsSuitHeart} from  "react-icons/bs";
import MattressCard from '../MatteressCard/MattressCard';
import AccessorieessMattress from '../AccessoriesMattress/AccessorieessMattress';
import Paginate from '../pagination/Paginate';
import Filter from '../Filtersorting/Filter';



const Data=[
  {
      id:1, 
      img:("assets/images/mattressbed.jpg"),
      title:'Mattress Jane',
      rating:4.4,
      price:34000,
  },
  {
    id:2, 
    img:("assets/images/mattressbed (4).jpg"),
    title:'Mattress Jane',
    rating:4.4,
    price:34000,
},{
  id:3, 
  img:("assets/images/mat3 (1).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},{
  id:4, 
  img:("assets/images/mat3 (2).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},{
  id:5, 
  img:("assets/images//mattressbed (2).jpg"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:6, 
  img:("assets/images//mattressbed (3).jpg"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:7, 
  img:("assets/images/mat3 (5).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:8, 
  img:("assets/images/mat3 (6).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:9, 
  img:("assets/images/mat3 (1).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:10, 
  img:("assets/images//mattressbed (1).jpg"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:11, 
  img:("assets/images/mat1.jpg"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:12, 
  img:("assets/images/mat3 (1).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
]



function Mattress() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
      <Navbar />
      <BreadcrumbExample />
      <div className='herodiv'><h1 className='herotx'>Tonieta Mattress</h1>
      <Filter/><h4 className='found-items'> 17 items found</h4></div>
      <div className='card-container'>
        {Data.map((props)=>{
        return(
<MattressCard  title={props.title}
          launch={props.launch}
       img={props.img}
       rating={props.rating}
       price={props.price}
 />
        )}
        )}
      

      </div>

           <Paginate/>
        <hr className='space' />
      <AccessorieessMattress/>

      <Footer/>
    </>
  );
}

export default Mattress;