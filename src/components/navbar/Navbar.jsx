import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BsSuitHeart, BsSearch, BsCart2 } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

// import Bannercard from "../Bannercard/Bannercard";

const OpenModalCus = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    alert(location.pathname);
  }, []);
  var component = document.getElementById("ModalContent");
  var parent = document.getElementById("testcus");

  if (component.hasAttribute("hidden")) {
    component.removeAttribute("hidden");
    parent.classList.add("slide-animation-cus");
  } else {
    component.setAttribute("hidden", true);
    parent.classList.remove("slide-animation-cus");
  }

  console.log("hai now am clicked");
};

function Navbar() {
  const [menu, setManu] = useState(false);
  const handledropdown = () => {};
  const location = useLocation();
  return (
    <>
      {/* navbar */}

      <nav
        class="navbar navbar-expand-lg navbar-light bg-white"
        style={{ height: "85px" }}
      >
        <a class="navbar-brand" href="/">
          <img src="assets/images/image1.png" alt="" className="log" />
        </a>
        <button
          class="navbar-toggler allow"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {location.pathname === "/" ? (
              <div
                onClick={OpenModalCus}
                class=" nav-item nav-link"
                id="hoverca"
              >
                Products
              </div>
            ) : null}

          

            <Link class="nav-item nav-link" to="/mattress">
              Mattress
            </Link>

            <Link class="nav-item nav-link" to="/pillows">
              Pillows
            </Link>
            <Link class="nav-item nav-link" to="/kidspillow">
              Kids Pillows
            </Link>
            <Link class="nav-item nav-link" to="/kidspillow">
              Cushions
            </Link>
            <Link class="nav-item nav-link" to="/bolster">
              Bolster
            </Link>
            <ul class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle p-1 nvtest"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">
                  <Link to="/">Home</Link>
                </a>

                <a class="dropdown-item">
                  <Link to="/about">About</Link>
                </a>
                <a class="dropdown-item">
                  <Link to="/profileinfo">Contact Profile </Link>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                  <Link to="/myorder">Orders </Link>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className="right-menu">
          <div class="searchBox">
            <input type="search" placeholder="Search" />
            <i class="fa fa-search"></i>
          </div>
          <div className="wishandcart">
          <Link to="/wishlist">
            <a href="javascript:void(0);" className="user">
              <BsSuitHeart size={"16px"}></BsSuitHeart>
            </a>
          </Link>
          <Link to="/myorder">
            <a href="#">
              <BsCart2 size={"16px"}></BsCart2>
            </a>
          </Link>
          </div>
          <div className="mbl-searchbar">
            <div class="input-group">
              <input
                type="search"
                placeholder="What're you searching for?
                "
                aria-describedby="button-addon1"
                class="form-control border-0 bg-light"
              ></input>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
