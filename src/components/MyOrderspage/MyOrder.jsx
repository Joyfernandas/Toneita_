import React from "react";
import "./MyOrder.css";
import { BsFillBagCheckFill } from "react-icons/bs";
import MyOrder2 from "./MyOrder2";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer"; 
import { Link } from "react-router-dom";
import { TouchableOpacityButton } from "../../DesignHelper/HelperComponents";

const Data = [
  {
    id: 1,
    img: "assets/images/orderimg.png",
    title: "Manchester",
    title2: "the premium segment of toneita",
    price: "35,6000",
    deliverytime: "Delivery By 11 October,2022",
    person: "Sold to Markandan",
    orderid: " 219865383927",
    status: "Order Has been shipped",
  },
  {
      id: 2,
      img:'assets/images/orderimg4.png',
      title: 'Comfort Jo',
      title2: 'the premium segment of toneita',
      price: '35,6000',
      deliverytime: 'Delivery By 11 October,2022',
      person: 'Sold to Markandan',
      orderid: ' 219865383927',
      status: 'Order Has been shipped',
  },
  {
      id: 3,
      img:'assets/images/orderimg3.png',
      title: 'Pattern Conf',
      title2: 'the premium segment of toneita',
      price: '35,6000',
      deliverytime: 'Delivery By 11 October,2022',
      person: 'Sold to Markandan',
      orderid: ' 219865383927',
      status: 'Order Has been shipped',

  }
];

function MyOrder(item) {
  return (
    <>
      <Navbar />
      <div>
        <div className="orderpage">
          <h3 className="myordertxt">My Order</h3>
          <img src="assets/images/shopping-bag.png" alt="" />
        </div>
        <div></div>
      </div>
      {Data.map((item, index) => (
        <>
          <div className="container-fluid allor">
            <div className="row allorder" >
              <div className="col-md-3">
                <img src={item.img} alt="" class="img-fluid"/>
              </div>
              <div className="col-md-3">
                <h3 className="orderhead">{item.title}</h3>
                <p className="orderlight">{item.title2}</p>
                <h2 className="orderprice">{item.price}</h2>
                <TouchableOpacityButton>
                <button type="button" className="viewbtn">
                  View Product
                </button>
                </TouchableOpacityButton>
              </div>
              <div className="col-md-3">
                <h5 className="orderdeliverytxt"><img src="assets/images/dot.png" alt="" className="dot-margin"/>{item.deliverytime}</h5>
                <p className="orderperson">{item.person}</p>
              </div>
              <div className="col-md-3">
                <Link to="/myorder2">
                  <button type="button" className="trackbtn">
                    Track Order
                  </button>
                </Link>
              </div>
           
            
            <div className="bg-white d-flex justify-content-between p-3 border-bottom border-left border-right align-items-center ml-4">
              <h5 className="d-inline-block bold"> Order ID:{item.orderid}</h5>
              <p className="bold">{item.status}</p>
              </div>
              </div>
          </div>
         
       {/* <div className="allor">
            <div className="allorder">
              <div className="contentorder">
                <img src={item.img} alt="" />
                <div className="conttxt">
                  <h3 className="orderhead">{item.title}</h3>
                  <p className="orderlight">{item.title2}</p>
                  <h2 className="orderprice">{item.price}</h2>
                  <button type="button" className="viewbtn">
                    View Product
                  </button>
                </div>
              </div>
              <div className="contdeliverytxt">
                <h5 className="orderdeliverytxt">{item.deliverytime}</h5>
                <p className="orderperson">{item.person}</p>
              </div>
              <div>
                <Link to="/myorder2">
                  <button type="button" className="trackbtn">
                    Track Order
                  </button>
                </Link>
              </div>
            </div>
            <div className="orderdetail">
              <h5> Order ID:{item.orderid}</h5>
              <p>{item.status}</p>
            </div>
          </div> */}
        </>
      ))}
       
      <Footer />
      {/* <MyOrder2/> */}
      {/* <Go/> */}
    </>
  );
}

export default MyOrder;
