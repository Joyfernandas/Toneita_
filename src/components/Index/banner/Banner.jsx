import '../banner/banner.css'

import { BiBadgeCheck, BiBlanket, BiCheckShield } from "react-icons/bi";
import { BsFillPenFill, BsTelephoneFill, BsWhatsapp } from "react-icons/bs";

import React from 'react'
function Banner() {
  return (
    <>

      {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="..." alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="../images/banner1.png" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="../images/banner2.png" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div> */}


      <div id="carouselExampleIndicators" className="carousel slide bannerhover" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" id='btn1prev' />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" id='btn2prev' />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" id='btn3prev' />
        </div>
        <div className="carousel-inner" >
          <div className="carousel-item active">
            <img src="../images/banner1.png" className="d-block w-100" alt="girl" max-width={'100px'} />
          </div>
          <div className="carousel-item">
            <img src="../images/banner2.png" className="d-block w-100" alt="boy" max-width={'100px'} />
          </div>
          <div className="carousel-item">
            <img src="../images/banner3.png" className="d-block w-100" alt="baby" max-width={'100px'} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
          <span aria-hidden="True" />
          <img src="../images/Vector (1).png" alt="" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span aria-hidden="True" />
          <img src="../images/Vector.png" alt="" />
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
              <h4>personalized <br />Mattress</h4>
            </div>
          </div>

          <div class="col afterbanner">
            <div class="d-inline-flex p-2">
              <BiBlanket className="iconsize1 afterbannerSvg"></BiBlanket>
              <h4>Free swatches For Mattress</h4>
            </div>
          </div>
          <div class="col afterbanner">
            <div class="d-inline-flex p-2">
              <BiCheckShield className="iconsize1 afterbannerSvg"></BiCheckShield>
              <h4>5 Years <br /> Warranty</h4>
            </div></div>
          <div class="col afterbanner">
            <div class="d-inline-flex p-2">
              <BiBadgeCheck className="iconsize1 afterbannerSvg"></BiBadgeCheck>

              <h4>No Cost <br /> EMI</h4>
            </div>
          </div>
        </div>
      </div>
      {/* contact us */}

    </>
  )
}

export default Banner
