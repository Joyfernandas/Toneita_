import '../content/content.css'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react'
import Row from 'react-bootstrap/Row';

function Contentmattress() {
  return (
   <>
   <Container >
      <Row>
      <Col><h1>
<p className="fw-bolder">Calm Your Stress With Your
  MATTRESS
  </p><h1 className='smtext'>
<small class="text-muted">Feel The Touch Of Conscious Lxury With Tonieta</small>
</h1>
</h1>
<button type="button" class="btn btn-outline-success" className='sbutton'>Shop Now</button></Col><br /><br />
        <Col>  <img src="assets/images/bedtonieta.png"  height={"200px"} className="contimg"/></Col>
      </Row>
    </Container>
   </>  
  )
}

export default Contentmattress
