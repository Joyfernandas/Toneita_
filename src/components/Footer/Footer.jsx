import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="colofoo pb-4">
        <div className="container-fluid text-center text-md-start mt-5">
          <MDBRow className="mt-3 d-flex mx-5">
            <MDBCol md="8" lg="8">
              <MDBRow className="justify-content-start justify-content-sm-start justify-content-md-start justify-content-lg-start" >

                <MDBCol md="2" lg="2" xl="2" className="col-md-2 col-lg-2 col-xl-2 mr-3 mb-4 text-left text-sm-left text-lg-left text-md-left col-sm-2 w-auto">
                  <h6 className="text-capitalize font-weight-bold  mb-1 change-color">products</h6>
                  <ul className=" ulhover">
                    <li className="text-reset hover-footer">
                      <Link ro='/products' className="text-reset">
                        Mattress
                      </Link>
                    </li>
                    <li href="#!" className="text-reset hover-footer">
                      Pillows
                    </li>
                    <li href="#!" className="text-reset hover-footer">
                      Kid's Pillows
                    </li>
                    <li href="#!" className="text-reset hover-footer">
                      Swatches
                    </li>
                    <li href="#!" className="text-reset hover-footer">
                      Bolster
                    </li>
                    <li href="#!" className="text-reset hover-footer">
                      Cushions
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol
                  md="2"
                  lg="2"
                  xl="2"
                  className="col-md-2 col-lg-2 col-xl-2 mr-3 mb-4 text-left text-sm-left text-lg-left text-md-left col-sm-2 w-auto ">
                  <h6 className="text-capitalize font-weight-bold  mb-1 change-color">Useful links</h6>

                  <ul className=" ulhover">
                    <li className="text-reset hover-footer">
                      <Link to="/" className="text-reset">
                        Home
                      </Link>

                    </li>
                    <li href="/about" className="text-reset hover-footer">
                      <Link to="/about" className="text-reset">
                        About
                      </Link>
                    </li>
                    <li className="text-reset hover-footer">
                      <Link to="/mattress" className="text-reset">
                        products
                      </Link>
                    </li>
                    <li className="text-reset hover-footer">
                      <Link to="/contact" className="text-reset">
                        contact
                      </Link>
                    </li>
                  </ul>
                </MDBCol>
                <MDBCol
                  md="2"
                  lg="2"
                  xl="2"
                  className="col-md-2 col-lg-2 col-xl-2 mr-3 mb-4 text-left text-sm-left text-lg-left text-md-left col-sm-2 w-auto"
                >
                  <h6 className="text-capitalize font-weight-bold  mb-1 text-nowrap change-color">purchase</h6>
                  <ul className=" ulhover">
                    <li className="text-reset hover-footer">
                      <Link to="/myorder" className="text-reset">
                        orders
                      </Link>

                    </li>
                    <li href="#!" className="text-reset hover-footer">
                      Returns
                    </li>
                    <li className="text-reset hover-footer">
                      <Link to="/wishlist" className="text-reset">
                        Wishlist
                      </Link>
                    </li>
                    <li className="text-reset hover-footer">
                      <Link to="/Pricedetails" className="text-reset">
                        cart
                      </Link>

                    </li>
                  </ul>
                </MDBCol>

                <MDBCol
                  md="3"
                  lg="3"
                  xl="3"
                  className="col-md-2 col-lg-2 col-xl-2 mr-3 mb-4 text-left text-sm-left text-lg-left text-md-left col-sm-2 w-auto"
                >
                  <h6 className="text-capitalize font-weight-bold   mb-1 change-color">
                    Terms & Conditions
                  </h6>
                  <ul className=" ulhover">
                    <li className="text-reset hover-footer">Return policy</li>
                    <li className="text-reset hover-footer">Warranty</li>
                    <li className="text-reset hover-footer">Sustainable Energy</li>
                    <li className="text-reset hover-footer">Material</li>
                  </ul>
                </MDBCol>

              </MDBRow>
            </MDBCol>
            <MDBCol md="4" lg="4">
              <div class="d-flex align-items-end flex-column justify-content-center gap-5">
                <div className="d-flex flex-column align-items-center">
                  <h3 className="text-uppercase change-color">Get Support</h3>
                  <p className="salesoch">Sales@ochera.co.in</p>
                </div>
                <Link to="/">
                  <img src="assets/images/image1.png" alt="" class="img-fluid hover-footer mt-3" />
                </Link>
              </div>
            </MDBCol>
            {/* </MDBCol> */}
          </MDBRow>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <h6 className="toniet">
          TONEITA?? is a Registered Trademark of Ochera Ventures Private Limited
          | TN 641002 INDIA | CIN: U20299TZ2019PTC033017
        </h6>
        <br />
        <h6 className="toniet">
          {" "}
          ?? 2022 Copyright | Tonieta | All Rights Reserverd
        </h6>
      </div>
    </MDBFooter>
  );
}
