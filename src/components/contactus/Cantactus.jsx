import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../contactus/Contactus.css";
import { BsFillGeoAltFill } from "react-icons/bs";

function Cantactus() {
  return (
    <>
      <div className="map">
        <Container>
          <Row className="align-items-center">
            <Col className="col-md-6">
              {" "}
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                className="mapiframe"
              />
            </Col>
            <Col className="col-md-4 d-flex flex-column">
              <h1 className="maptext"><b>Visit our store to feel the comfort</b>
                {/* <img
                  src="/assets/images/Visit our store to feel the comfort.png"
                  alt=""
                  width={"89%"}
                /> */}
              </h1>
              <div class="container" className="locationbtn">
                <button type="button" class="btn btn-warning" id="locatebtn">
                  <BsFillGeoAltFill></BsFillGeoAltFill> Locate Us
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cantactus;
