import React from 'react'
import Navbar from '../../navbar/Navbar'
import Frequentlybought from '../Frequentlybought/Frequentlybought'
import Rating from '../MainTestimonial/Rating'
import Jane from '../MattressjaneCard/Jane'
import RecentlyView from '../RecentlyViewed/RecentlyView'
import Specific from '../specification/Specific'
import CustomerReviews from '../Testimonial/CustomerReviews'
import './MattressJane.css'
import Footer from '../../Footer/Footer'
function MattressJane() {
  return (
   <>
   <Navbar/>
<Jane/>
<Specific/>
<Frequentlybought/>
<Rating/>
<RecentlyView/>
<Footer/>
{/* <CustomerReviews/> */}

   </>
  )
}

export default MattressJane
