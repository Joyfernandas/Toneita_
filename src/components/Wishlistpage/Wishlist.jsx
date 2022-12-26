import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';
import Paginate from '../pagination/Paginate';
import { Link } from 'react-router-dom';
import './Wishlist.css'
import WishListCardComponent from '../WishLishCardComponent';


const Data = [
    {
        id: 1,
        img: 'assets/images/wish1.png',
        offer: '20%offer',
        price: '35,600',
        price1: '36,700',
    },
    {
        id: 2,
        img: 'assets/images/wishimg2.png',
        offer: '20%offer',
        price: '35,600',
        price1: '36,700',
    },
    {
        id: 3,
        img: 'assets/images/wishimg3.png',
        offer: '20%offer',
        price: '35,600',
        price1: '36,700',
    },
    {
        id: 3,
        img: 'assets/images/wishimg4.png',
        offer: '20%offer',
        price: '35,600',
        price1: '36,700',
    },
    {
        id: 3,
        img: 'assets/images/wishimg5.png',
        offer: '20%offer',
        price: '35,600',
        price1: '36,700',
    }

]

function Wishlist(item) {
    return (
        <>
            <Navbar />
            <div className='container-fluid my-5'> 
<div className='wishwish align-items-center'>
<h5 className='wishtxt'>Wishlist</h5>
<img src="assets/images/heartwish1.png" alt="" />
</div>
            <div className='d-flex gap-5 flex-wrap col-sm align-items-center col-md align-items-center'>

                {/* <div className="col-md-3">   
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div> */}

            {Data.map((item) => (
                <WishListCardComponent
                    offer={item.offer}
                    price={item.price}
                    price1={item.price1}
                />
            )
            )}
            
            </div>
            <Paginate/>
            </div>
            <Footer />
        </>
    )
}

export default Wishlist
