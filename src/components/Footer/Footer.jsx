import React from 'react';
import  "../Footer/Footer.css";
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

      <div>
  <a href classname="me-4 text-reset">
    <mdbicon color="secondary" fab icon="facebook-f">
    </mdbicon></a>
  <a href classname="me-4 text-reset">
    <mdbicon color="secondary" fab icon="twitter">
    </mdbicon></a>
  <a href classname="me-4 text-reset">
    <mdbicon color="secondary" fab icon="google">
    </mdbicon></a>
  <a href classname="me-4 text-reset">
    <mdbicon color="secondary" fab icon="instagram">
    </mdbicon></a>
  <a href classname="me-4 text-reset">
    <mdbicon color="secondary" fab icon="linkedin">
    </mdbicon></a>
  <a href classname="me-4 text-reset">
    <mdbicon color="secondary" fab icon="github">
    </mdbicon></a>
</div>

      </section> */}

      <section className='colofoo'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Mattress
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pillows
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kid's Pillows
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Swatches
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bolster
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Cushions
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
             
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
             
              <p>
             
                <a href='/about' className='text-reset'>
                  About
                </a>
               
              </p>
              <p>
              
                <a href='/mattress' className='text-reset'>
                  Products
                </a>
               
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  Contact
                </a>
              </p>
            </MDBCol>
            <MDBCol md='4' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>purchase</h6>
              <p>
                <a href='myorder' className='text-reset'>
                 Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Returns
                </a>
              </p>
              <p>
               
                <a href='/wishlist' className='text-reset'>
                  Wishlist
                </a>
               
              </p>
              <p>
             
                <a href='/pricedetails' className='text-reset'>
                  Cart
                </a>
            
              </p>
            </MDBCol>

            <MDBCol md='5' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Terms & Conditions</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
               Return policy
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
               Warranty
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> Sustainable Energy
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' />Material
              </p>
            </MDBCol>
            <MDBCol md='5' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <div>
              <h3 className='text-uppercase'>Get Support</h3>
              <p className='salesoch'>Sales@ochera.co.in</p>
              <div className='margincorrection'> <image>
                   {/*logo----------*/}
                   <Link to='/'>
    <img src="../Images/image1.png" alt="" />
    </Link>
              </image></div>
             
              </div>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <h6 className='toniet'>TONEITA®  is a Registered Trademark of  Ochera Ventures Private Limited | TN 641002 INDIA | CIN: U20299TZ2019PTC033017</h6>
      <br/>
      <h6 className='toniet'> © 2022 Copyright | Tonieta | All Rights Reserverd</h6>
              <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>

        </a>
      </div>
    </MDBFooter>
  );
}