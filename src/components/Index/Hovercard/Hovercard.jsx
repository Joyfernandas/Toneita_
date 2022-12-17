import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
  } from "mdb-react-ui-kit";

  import Container from 'react-bootstrap/Container';
  import { BsFillArrowRightSquareFill } from "react-icons/bs";

function Hovercard() {
  return (
    <>
    <Container>
      <MDBContainer fluid className="my-5">
      <MDBRow>
      <MDBCol md="12" lg="4" className="mb-4 mb-lg-0" id='hcard'>
          <MDBCard>
            <div className="d-flex justify-content-between p-3" id='hovercard'>
              {/* <p className="lead mb-0">Today's Combo Offer</p> */}
            </div>
            <MDBCardImage
              src="https://images.unsplash.com/photo-1553114552-c4ece3a33c93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGlsbG93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              position="top"
              alt="Gaming Laptop"
            />
            <MDBCardBody className='prod'>
            

              <div className="d-flex justify-content-between mb-3" >
                <h4 className="mb-0" color='white;'>Mattress</h4>
                <h3 className="text-dark mb-0"><BsFillArrowRightSquareFill  fa-sm className='arrowicon'></BsFillArrowRightSquareFill></h3>
              </div>

             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3" id='hovercard'>
              {/* <p className="lead mb-0">Today's Combo Offer</p> */}
            </div>
            <MDBCardImage
              src="https://images.unsplash.com/photo-1553114552-c4ece3a33c93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGlsbG93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              position="top"
              alt="Gaming Laptop"
            />
            <MDBCardBody className='prod'>
            

              <div className="d-flex justify-content-between mb-3" >
                <h4 className="mb-0" color='white;'>Mattress</h4>
                <h3 className="text-dark mb-0"><BsFillArrowRightSquareFill  fa-sm className='arrowicon'></BsFillArrowRightSquareFill></h3>
              </div>

             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3" id="hovercard">
              {/* <p className="lead mb-0">Today's Combo Offer</p> */}
            </div>
            <MDBCardImage
              src="https://images.unsplash.com/photo-1506720186575-11354d325017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80"
              position="top"
              alt="Gaming Laptop"
            />
            <MDBCardBody className='prod'>
              <div className="d-flex justify-content-between mb-3">
                <h4 className="mb-0" color='white;'>Mattress</h4>
                <h3 className="text-dark mb-0"><BsFillArrowRightSquareFill></BsFillArrowRightSquareFill></h3>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3" id="hovercard">
              {/* <p className="lead mb-0">Today's Combo Offer</p> */}
            </div>
            <MDBCardImage
              src="https://images.unsplash.com/photo-1506720186575-11354d325017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80"
              position="top"
              alt="Gaming Laptop"
            />
            <MDBCardBody className='prod'>
              <div className="d-flex justify-content-between mb-3">
                <h4 className="mb-0" color='white;'>Mattress</h4>
                <h3 className="text-dark mb-0"><BsFillArrowRightSquareFill></BsFillArrowRightSquareFill></h3>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3" id="hovercard">
              {/* <p className="lead mb-0">Today's Combo Offer</p> */}
            </div>
            <MDBCardImage
              src="https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9sc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              position="top"
              alt="Gaming Laptop"
            />
            <MDBCardBody className='prod'>
              <div className="d-flex justify-content-between mb-3">
                <h4 className="mb-0" >Mattress</h4>
                <h3 className="text-dark mb-0"><BsFillArrowRightSquareFill className='arrowicon'></BsFillArrowRightSquareFill></h3>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3" id="hovercard">
              {/* <p className="lead mb-0">Today's Combo Offer</p> */}
            </div>
            <MDBCardImage
              src="https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9sc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              position="top"
              alt="Gaming Laptop"
            />
            <MDBCardBody className='prod'>
              <div className="d-flex justify-content-between mb-3">
                <h4 className="mb-0" >Mattress</h4>
                <h3 className="text-dark mb-0"><BsFillArrowRightSquareFill className='arrowicon'></BsFillArrowRightSquareFill></h3>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
</Container>
    
    </>
  )
}

export default Hovercard