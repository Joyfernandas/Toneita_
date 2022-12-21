import React from "react";
import "./rating.css";
import { AiFillStar } from "react-icons/ai";
import CustomerReviews from "../Testimonial/CustomerReviews";
import * as fontas from "react-icons/fa";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
  {
    id: 1,
    cusname: "janvi",
    content:
      "So excited to share this comment, premium mattress with more comfort. promotes better circulation of air while you sleep",
    date: "01:20 PM - May 18, 2022",
  },
  {
    id: 1,
    cusname: "janvi",
    content:
      "So excited to share this comment, premium mattress with more comfort. promotes better circulation of air while you sleep",
    date: "01:20 PM - May 18, 2022",
  },
  {
    id: 1,
    cusname: "janvi",
    content:
      "So excited to share this comment, premium mattress with more comfort. promotes better circulation of air while you sleep",
    date: "01:20 PM - May 18, 2022",
  },
  {
    id: 1,
    cusname: "janvi",
    content:
      "So excited to share this comment, premium mattress with more comfort. promotes better circulation of air while you sleep",
    date: "01:20 PM - May 18, 2022",
  },
  {
    id: 1,
    cusname: "janvi",
    content:
      "So excited to share this comment, premium mattress with more comfort. promotes better circulation of air while you sleep",
    date: "01:20 PM - May 18, 2022",
  },
];

function Rating() {
  const settings = {
    dots: true,
    infinite: true,
    Rating: true,
    arrows: false,
    swipeToSlide: true,
    speed: 1600,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll:1,
          centerMode:true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode:true,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide:true,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          centerMode:true,
          swipeToSlide:true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [slideref, setSliderRef] = useState();
  return (
    <>
      <div className="containerrev">
        <div className="headerdiv">
          <h3 className="Custit">Customer Reviews</h3>
          <h3>
            <button type="button" className="feedbackbtn">
              Write Feedback
            </button>
          </h3>
          <div className="fontstyles">
            <span>
              <fontas.FaChevronCircleLeft onClick={slideref?.slickPrev} />{" "}
            </span>
            <span>
              {" "}
              <fontas.FaChevronCircleRight onClick={slideref?.slickNext} />{" "}
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-2">
            <div className="sliderwithrate">
              <div className="mainrating">
                <div className="ratepercent">
                  <div className="starandnum">
                    <h3 className="ml-1">
                      <AiFillStar></AiFillStar>
                    </h3>
                    <div className="mt-1">
                      <h3>5</h3>
                    </div>
                  </div>
                  <div className="percent"></div>
                  <h5>63</h5>
                </div>
                <div className="ratepercent">
                  <div className="starandnum">
                    <h3 className="ml-1">
                      <AiFillStar></AiFillStar>
                    </h3>
                    <div>
                      <h3 className="mt-1">4</h3>
                    </div>
                  </div>
                  <div className="percent2"></div>
                  <h5>63</h5>
                </div>
                <div className="ratepercent">
                  <div className="starandnum">
                    <h3 className="ml-1">
                      <AiFillStar></AiFillStar>
                    </h3>
                    <div>
                      <h3 className="mt-1">3</h3>
                    </div>
                  </div>
                  <div className="percent3"></div>
                  <h5>63</h5>
                </div>
                <div className="ratepercent">
                  <div className="starandnum">
                    <h3 className="ml-1">
                      <AiFillStar></AiFillStar>
                    </h3>
                    <div>
                      <h3 className="mt-1">2</h3>
                    </div>
                  </div>
                  <div className="percent4"></div>
                  <h5>63</h5>
                </div>
                <div className="ratepercent">
                  <div className="starandnum">
                    <h3 className="ml-1">
                      <AiFillStar></AiFillStar>
                    </h3>
                    <div>
                      <h3 className="mt-1">1</h3>
                    </div>
                  </div>
                  <div className="percent4"></div>
                  <h5>63</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="sliderrate">
              <Slider {...settings} ref={setSliderRef}>
                {Data.map((props) => {
                  return (
                    <CustomerReviews
                      cusname={props.cusname}
                      content={props.content}
                      date={props.date}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rating;
