import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Go from "../stepper/Stepper";
import "./MyOrder2.css";
import { Link } from "react-router-dom";
function MyOrder2() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="col-md-3">
          {" "}
          <img src="assets/images/orderimg.png" alt="" class="img-fluid" />
        </div>
        <div className="col-md-3">
          <h3 className="orderhead">Manchester</h3>
          <p className="orderlight">the Premium segment of Toneita</p>
          <h2 className="orderprice">Rs.35,300</h2>
          <button type="button" className="viewbtn">
            View Product
          </button>
        </div>
        <div className="col-md-3">
          {" "}
          <button type="button" className="cancelbtn mt-4">
            Cancel Order
          </button>
          <span className="ml-3">|</span>
          <button type="button" className="recieptbtn m-4">
            Receipt
          </button>
        </div>
        <div className="col-md-3">
          {" "}
          <button type="button" className="trackbtn mt-4">
            {" "}
            Buy Again
          </button>
        </div>
      </div>
      <div className="bg-white d-flex justify-content-between p-3 border-bottom border-left border-right align-items-center">
        {" "}
        <h5>Order ID: 219865383927</h5>
        <p>Order Has been shipped</p>
      </div>
      {/* <div>
        <div className="allorder">
          <div className="contentorder">
            <img src="../images/orderimg.png" alt="" />
            <div className="conttxt">
              <h3 className="orderhead">Manchester</h3>
              <p className="orderlight">the Premium segment of Toneita</p>
              <h2 className="orderprice">Rs.35,300</h2>
              <button type="button" className="viewbtn">
                View Product
              </button>
            </div>
          </div>
          <div className="contdelivery">
            <button type="button" className="cancelbtn">
              Cancel Order
            </button>
            |
            <button type="button" className="recieptbtn">
              Receipt
            </button>
          </div>
          <div>
            <button type="button" className="trackbtn">
              {" "}
              Buy Again
            </button>
          </div>
        </div>
        <div className="orderdetail">
          <h5>Order ID: 219865383927</h5>
          <p>Order Has been shipped</p>
        </div>
      </div> */}

      <Go />
      <div className="shppingorder">
        <Link to="/mattress">
          <button type="button" className="btnshopping">
            Continue shopping
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default MyOrder2;
