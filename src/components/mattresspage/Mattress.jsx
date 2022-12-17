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
      img:("./images/mattressbed.jpg"),
      title:'Mattress Jane',
      rating:4.4,
      price:34000,
  },
  {
    id:2, 
    img:("./images/mattressbed (4).jpg"),
    title:'Mattress Jane',
    rating:4.4,
    price:34000,
},{
  id:3, 
  img:("./images/mat3 (1).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},{
  id:4, 
  img:("./images/mat3 (2).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},{
  id:5, 
  img:("./images//mattressbed (2).jpg"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:6, 
  img:("./images//mattressbed (3).jpg"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:7, 
  img:("./images/mat3 (5).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:8, 
  img:("./images/mat3 (6).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:9, 
  img:("./images/mat3 (1).png"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:10, 
  img:("./images//mattressbed (1).jpg"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:11, 
  img:("./images/mat1.jpg"),
  title:'Mattress Jane',
  rating:4.4,
  price:34000,
},
{
  id:12, 
  img:("./images/mat3 (1).png"),
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

      {/* <div class="row">
        <div class="col">
          <div className='mainmat'>
          <div className='containermattress'>
            <div> <h4 className='hearticon'><BsSuitHeart className='suitheart'></BsSuitHeart></h4><img src="../images/mat3 (1).png"  alt="" /> </div>
            <div className='launch'><h2 className='newlaunch'>Newly Launched</h2></div>
         
         
            <div className='headermatress'>
              <h1 className='bold'>Mattress Jane</h1><div className='iconmattress'>  <h4 className='boldtxt'> 4.4</h4><div class="ms-auto text-warning"> <h5><MDBIcon fas icon="star" /> </h5></div> (27)</div>
             <h6><p className='matcontent'>the sustainable mattress ever</p> </h6> 
             <div className='offertxt'>
              <span >
            <h5 className='festivetxt'> Festive offer@</h5> 
              </span>
              <br /> 
            <span>  <h3 className='bold'>Rs.25,300 </h3></span> </div><del className='del'>Rs.33,670</del>
            </div>
          </div>
          </div>
          </div>

        <div class="col">
         
        <div className='containermattress'>
            <div> <h4 className='hearticon'><BsSuitHeart className='suitheart'></BsSuitHeart></h4><img src="../images/mat1.jpg"  alt="" /> </div>
        
         
            <div className='headermatress'>
              <h1 className='bold'>Mattress Jane</h1><div className='iconmattress'>  <h4 className='boldtxt'> 4.4</h4><div class="ms-auto text-warning"> <h5><MDBIcon fas icon="star" /> </h5></div> (27)</div>
             <h6><p className='matcontent'>the sustainable mattress ever</p> </h6> 
             <div className='offertxt'>
              <span >
            <h5 className='festivetxt'> Festive offer@</h5> 
              </span>
              <br /> 
            <span>  <h3 className='bold'>Rs.25,300 </h3></span> </div><del className='del'>Rs.33,670</del>
            </div>
          </div>
         
              </div>
        <div class="col">
        <div className='containermattress'>
            <div> <h4 className='hearticon'><BsSuitHeart className='suitheart'></BsSuitHeart></h4><img src="../images/mat1.jpg"  alt="" /> </div>
       
         
         
            <div className='headermatress'>
              <h1 className='bold'>Mattress Jane</h1><div className='iconmattress'>  <h4 className='boldtxt'> 4.4</h4><div class="ms-auto text-warning"> <h5><MDBIcon fas icon="star" /> </h5></div> (27)</div>
             <h6><p className='matcontent'>the sustainable mattress ever</p> </h6> 
             <div className='offertxt'>
              <span >
            <h5 className='festivetxt'> Festive offer@</h5> 
              </span>
              <br /> 
            <span>  <h3 className='bold'>Rs.25,300 </h3></span> </div><del className='del'>Rs.33,670</del>
            </div>
          </div>
        </div>
        <div class="col">
        <div className='containermattress'>
            <div> <h4 className='hearticon'><BsSuitHeart className='suitheart'></BsSuitHeart></h4><img src="../images/mat1.jpg"  alt="" /> </div>
           
         
         
            <div className='headermatress'>
              <h1 className='bold'>Mattress Jane</h1><div className='iconmattress'>  <h4 className='boldtxt'> 4.4</h4><div class="ms-auto text-warning"> <h5><MDBIcon fas icon="star" /> </h5></div> (27)</div>
             <h6><p className='matcontent'>the sustainable mattress ever</p> </h6> 
             <div className='offertxt'>
              <span >
            <h5 className='festivetxt'> Festive offer@</h5> 
              </span>
              <br /> 
            <span>  <h3 className='bold'>Rs.25,300 </h3></span> </div><del className='del'>Rs.33,670</del>
            </div>
          </div>
        </div>
      </div> */}
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
   
     


      {/* navvend */}
      {/* <div class="row">
        <div class="col"><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/3933040/pexels-photo-3933040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card.Body>
            <Card.Title>Mattress</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          <br /><br /></div>
        <div class="col"><Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1559051668-9024c9b5e84b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
          <Card.Body>

            <Card.Title>Pillows</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          <br /><br /></div>
        <div class="col"><Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/4473804/pexels-photo-4473804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card.Body>
            <Card.Title>Kid's Pillows</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          <br /><br /></div>
        <div class="col"><Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card.Body>
            <Card.Title>Cushions</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          <br /><br /></div>
      </div>
      <Footer /> */}
           <Paginate/>
        <hr className='space' />
   
     

      <AccessorieessMattress/>

      <Footer/>
    </>
  );
}

export default Mattress;