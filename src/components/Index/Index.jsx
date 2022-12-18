import "../Index/Index.css"
import { BsTelephoneFill } from "react-icons/bs";
import Banner from './banner/Banner';
import { Button } from '@chakra-ui/react'
import Cantactus from '../contactus/Cantactus';
import Contentmattress from './content/Contentmattress';
import Fleximage from './Flexbanner/Fleximage';
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar'
import Ourproducts from './Ourproducts/Ourproducts';
import React from 'react'
import Sellerscart from './Sellerscart';
import FloatingComponent from "../FloatingComponent/FloatingComponent";
import { Data } from "./Ourproducts/Prodcard";



function Index() {
  return (
    <>
     
  <Navbar/>
      <main className="my-2 ">
        
        <Banner />


        {/* contact us */}
        <div class="d-flex p-2"><div class="container" className='buttcon'>
          <div className="mb-2">
            <p align="right"> <Button variant="primary" size="lg" className='buttoncontact' >
              Contact Us
              <BsTelephoneFill></BsTelephoneFill>
            </Button>
              {' '}
              <img src="assets/images/whatsapp.gif" alt="" width={'40px'} />
            </p>

          </div>
        </div>
        </div>

        {/* matress feel */}
        <Contentmattress />

        {/* mattress feel end */}
    
        <Ourproducts />

        {/* our product carousel end */}
        <Sellerscart />
        {/* baby sleep  */}
        <Fleximage />
        {/* baby sleepp end */}
        {/* map box */}
        <Cantactus />
        <FloatingComponent />

        {/* mapbox end */}
        {/* footer start */}
        <Footer />

      </main>

      {/* footer end */}
    </>
  )
}

export default Index
