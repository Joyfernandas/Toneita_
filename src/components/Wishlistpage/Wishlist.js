import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';
import Paginate from '../pagination/Paginate';
import { Link } from 'react-router-dom';
import './Wishlist.css'


const Data = [
    {
        id: 1,
        img: 'assets/images/wish1.png',
        offer: '20%offer',
        price: 'Rs.35,600',
        price1: 'Rs.36,700',
    },
    {
        id: 2,
        img: 'assets/images/wishimg2.png',
        offer: '20%offer',
        price: 'Rs.35,600',
        price1: 'Rs.36,700',
    },
    {
        id: 3,
        img: 'assets/images/wishimg3.png',
        offer: '20%offer',
        price: 'Rs.35,600',
        price1: 'Rs.36,700',
    },
    {
        id: 3,
        img: 'assets/images/wishimg4.png',
        offer: '20%offer',
        price: 'Rs.35,600',
        price1: 'Rs.36,700',
    },
    {
        id: 3,
        img: 'assets/images/wishimg5.png',
        offer: '20%offer',
        price: 'Rs.35,600',
        price1: 'Rs.36,700',
    }
 
]

function Wishlist(item) {
    return (
        <>
        <Navbar/>
            <div className='wish'>
                <h3 className='wishtxt'>Wishlist </h3>
                <AiFillHeart size={'25px'} className='heartfill'></AiFillHeart>
            </div>
            <div className='wcardtotal'>
                {Data.map((item) =>
                    <div className='totalcard'>
                        <div className='fcard'>
                        <Link to='/myorder'>
                            <div className='fimg'>
                                <img src={item.img} alt="" className='wishimg' />
                                <h4 className='wishoffer'>{item.offer}</h4>
                                <h3 className='wishprice'>{item.price} <del className='wishdel'>{item.price1}</del></h3>
                             
                                <button type="button" className='wishcartbtn'>Add to Cart</button>                            
                            </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <Paginate/>
            <Footer/>
        </>
    )
}

export default Wishlist
