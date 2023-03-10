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
import { BsSuitHeart } from "react-icons/bs";
import MattressCard from '../MatteressCard/MattressCard';
import AccessorieessMattress from '../AccessoriesMattress/AccessorieessMattress';
import Paginate from '../pagination/Paginate';
import Filter from '../Filtersorting/Filter';
import MattresCardComponent from '../MattresCardComponent';



const Data = [
  {
    id: 1,
    img: "assets/images/mattressbed.jpg",
    title: 'Mattress Jane',
    launch: 'Newly Launched',
    rating: 4.4,
    price: 34000,
  },
  {
    id: 2,
    img: "assets/images/mattressbed2.jpg",
    title: 'Mattress Jane',
    rating: 4.4,
    launch: '',
    price: 34000,
  }, {
    id: 3,
    img: "assets/images/mat31.png",
    title: 'Mattress Jane',
    launch: '',
    rating: 4.4,

    price: 34000,
  },
  {
    id: 4,
    img: "assets/images/mattressbed.jpg",
    title: 'Mattress Jane',
    launch: 'Newly Launched',
    rating: 4.4,
    price: 34000,
  },
  {
    id: 5,
    img: "assets/images/mattressbed2.jpg",
    title: 'Mattress Jane',
    rating: 4.4,
    launch: '',
    price: 34000,
  }, {
    id: 6,
    img: "assets/images/mat31.png",
    title: 'Mattress Jane',
    launch: 'Newly Launched',
    rating: 4.4,

    price: 34000,
  },
  {
    id: 7,
    img: "assets/images/mattressbed.jpg",
    title: 'Mattress Jane',
    launch: 'newly launched',

    rating: 4.4,
    price: 34000,
  },
  {
    id: 8,
    img: "assets/images/mattressbed2.jpg",
    title: 'Mattress Jane',
    rating: 4.4,
    launch: '',
    price: 34000,
  }, {
    id: 9,
    img: "assets/images/mat31.png",
    title: 'Mattress Jane',
    launch: '',
    rating: 4.4,

    price: 34000,
  },
  {
    id: 10,
    img: "assets/images/mattressbed.jpg",
    title: 'Mattress Jane',
    launch: 'Newly Launched',
    rating: 4.4,
    price: 34000,
  },
  {
    id: 11,
    img: "assets/images/mattressbed2.jpg",
    title: 'Mattress Jane',
    launch: '',
    rating: 4.4,
    price: 34000,
  }, {
    id: 12,
    img: "assets/images/mat31.png",
    title: 'Mattress Jane',
    launch: 'Newly Launched',
    rating: 4.4,

    price: 34000,
  },

]



function Mattress() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
      <Navbar />
      <BreadcrumbExample />
      <div className='herodiv'><h1 className='herotx'>Toneita Mattress</h1>
      <div className="d-flex justify-content-between align-items-center">
      <h4 className='found-items'> 17 items found</h4><Filter />
      </div>
        </div>
      <div className='card-container'>
        {Data.map((props) => {
          return (
            <MattresCardComponent title={props.title}
              launch={props.launch}
              img={props.img}
              rating={props.rating}
              price={props.price}
            />
          )
        }
        )}


      </div>

      <Paginate />
      <hr className='space' />
      <AccessorieessMattress />

      <Footer />
    </>
  );
}

export default Mattress;