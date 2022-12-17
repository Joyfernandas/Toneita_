import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/Index/Index';
import Mattress from './components/mattresspage/Mattress';
import Cantactus from './components/contactus/Cantactus';
import MattressJane from './components/MattressJane/Cartspage/MattressJane';
import CustomerReviews from './components/MattressJane/Testimonial/CustomerReviews';
import About from './components/Aboutus/About';
import Stepper from './components/Checkout/Components/Stepper';
import Profilewithtonieta from './components/Profilepage/components/Profilewithtonieta';
import Wishlist from './components/Wishlistpage/Wishlist';
import MyOrder from './components/MyOrderspage/MyOrder';
import Go from './components/stepper/Stepper';
import Menu from './components/Menus/Menu';
import MyOrder2 from './components/MyOrderspage/MyOrder2';
import ContactDetails from './components/Checkout/Components/ContactDetails';
import Deliveryaddress from './components/Checkout/Components/Deliveryaddress';
import PaymentMode from './components/Checkout/Components/PaymentMode';
import Requestquote from './components/Profilepage/components/Requestquote';
import Pricedetails from './components/Checkout/Components/Pricedetails';
import Mattressontheway from './components/Checkout/Components/Mattressontheway'
import ErrorPage from './components/ErrorPage';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
<>

<BrowserRouter>
<Routes>
  <Route path='/'  element={<Index/>} />
  <Route path='/mattress'  element={<Mattress/>} />
  <Route path='/contactus'  element={<Cantactus/>} />
  <Route path='/jane'  element={<MattressJane/>} />
  <Route path='/about'  element={<About/>} />
  <Route path='stepper'  element={<Stepper/>} />
  <Route path='/deliveryaddress'  element={<Deliveryaddress/>} />
  <Route path='/payment'  element={<PaymentMode/>} />
  <Route path='/ontheway'  element={<Mattressontheway/>} />
  <Route path='/contactdetails' element={<ContactDetails/>} />
  <Route path='/pricedetails' element={<Pricedetails/>} />
  <Route path='/contact'  element={<Requestquote/>} />
  <Route path='/profileinfo'  element={<Profilewithtonieta/>} />
  <Route path='/wishlist'  element={<Wishlist/>} />
  <Route path='/myorder'  element={<MyOrder/>} />
  <Route path='/menu'  element={< Menu />} />
  <Route path='/myorder2'  element={< MyOrder2 />} />
  <Route path="*" element={<ErrorPage />} />
</Routes>
</BrowserRouter>
</>
  )
}

export default App


