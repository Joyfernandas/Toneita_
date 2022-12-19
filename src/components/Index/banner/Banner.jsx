import '../banner/banner.css'

import { BiBadgeCheck, BiBlanket, BiCheckShield } from "react-icons/bi";
import { BsFillPenFill, BsTelephoneFill, BsWhatsapp } from "react-icons/bs";

import React from 'react'
function Banner() {
  return (
    <>

     


      <div id="carouselExampleIndicators" className="carousel slide bannerhover" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" id='btn1prev' />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" id='btn2prev' />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" id='btn3prev' />
        </div>
        <div className="carousel-inner" >
          <div className="carousel-item active">
            <img src="assets/images/banner1.png" className="d-block w-100" alt="girl" max-width={'100px'} />
          </div>
          <div className="carousel-item">
            <img src="assets/images/banner2.png" className="d-block w-100" alt="boy" max-width={'100px'} />
          </div>
          <div className="carousel-item">
            <img src="assets/images/banner3.png" className="d-block w-100" alt="baby" max-width={'100px'} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
          <span aria-hidden="True" />
          <img src="assets/images/Vector (1).png" alt="" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span aria-hidden="True" />
          <img src="assets/images/Vector.png" alt="" />
          <span ></span>
        </button>
      </div>


      {/* main card */}
      <div class='container' className='products '>
        <div class="row-RowClass">
          <div class="col afterbanner">
            <div class="d-inline-flex p-2">
              <BsFillPenFill className="iconsize1 afterbannerSvg" >
              </BsFillPenFill>
              <h4 className='txtsize'>personalized Mattress</h4>
            </div>
          </div>

          <div class="col afterbanner">
            <div class="d-inline-flex p-2">
              <BiBlanket className="iconsize2 afterbannerSvg"></BiBlanket>
              <h4 className='txtsize'>Free swatches For Mattress</h4>
            </div>
          </div>
          <div class="col afterbanner">
            <div class="d-inline-flex p-2">
              <BiCheckShield className="iconsize3 afterbannerSvg"></BiCheckShield>
              <h4 className='txtsize'>5 Years Warranty</h4>
            </div></div>
          <div class="col afterbanner">
            <div class="d-inline-flex p-2">
              <BiBadgeCheck className="iconsize4 afterbannerSvg"></BiBadgeCheck>

              <h4 className='txtsize'>No Cost  EMI</h4>
            </div>
          </div>
        </div>
      </div>
      {/* contact us */}

    </>
  )
}

export default Banner
