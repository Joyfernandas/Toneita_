import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../contactus/Contactus.css'
import { BsFillGeoAltFill } from "react-icons/bs";

function Cantactus() {
  return (
    <>

{/* <div className="container-fluid">
  <div className="map-responsive">
    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
    <h4 className='maptext'>Visit Our Store to Feel Comfortable </h4>
  </div>

</div> */}
<div className='map'>
 <Container>
      <Row>
        <Col>  <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" className='mapiframe'/>
        </Col>
        <Col><h3 className='maptext'><img src="../images/Visit our store to feel the comfort.png" alt="" width={'89%'}/></h3>
        <div class='container' className='locationbtn'>
      
      <button type="button" class="btn btn-warning"><BsFillGeoAltFill></BsFillGeoAltFill> Locate Us</button> 
      </div>
        </Col>
      </Row>
    </Container>
    </div>
   
</>
  )
}


export default Cantactus
