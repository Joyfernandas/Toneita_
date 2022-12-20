import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../navbar/Navbar'
import './Cart.css'
import Pricedetails from './Pricedetails'

function CartDetails() {
    return (
        <>
           
            <div className='fulldiv'>
                <div className='maincardj'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" className='inputtxtcart' />
                    <div >
                        <h4 className='txtcard'>2/2 Item selected</h4>

                    </div>
                    <div>
                        <h4 className='txtcard'>Remove|Move to Wishlist</h4>
                    </div>
                </div>
                <div className='checkmain'>
                    <div className='conttentonly'>
                        <div className='imgtodrop'>
                            <div>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" className='checkmate'/>
                                <img src="assets/images/checkout.png" alt="" className='img-fluid' />
                            </div>
                            <div className='contanddrop'>
                                <h4 className='titlename'>Mattress Jane</h4>
                                <p className='secondtitle'>The Premium of Toneita</p>
                                <div className='dropcommon'>
                                    <div>
                                        <select class="ui dropdown" className='dropcheck'>
                                            <option value="">Size:King</option>
                                            <option value="1">..</option>
                                            <option value="0">..</option>
                                            <option value="0">..</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select class="ui dropdown" className='dropcheck'>
                                            <option value="">QTY:1</option>
                                            <option value="1">2</option>
                                            <option value="0">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='offbtn'>
                        <div className='festiveoffer'>
                            <h5 className='pricet'>Rs.25,300 <del className='priceD'>Rs.33,900</del></h5>
                            <h4 className='offertxt'>Festive Offer 20%</h4>
                        </div>
                        <div>
                            <button type='button' className='vproduct'> View Product</button>
                        </div>
                    </div>
                </div>
                <div className='checkmain'>
                    <div className='conttentonly'>
                        <div className='imgtodrop'>
                            <div>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <img src="assets/images/checkout.png" alt="" className='img-fluid' />
                            </div>
                            <div className='contanddrop'>
                                <h4 className='titlename'>Mattress Jane</h4>
                                <p className='secondtitle'>The Premium of Toneita</p>
                                <div className='dropcommon'>
                                    <div>
                                        <select class="ui dropdown" className='dropcheck'>
                                            <option value="Size">size: King</option>
                                            <option value="1">mattress</option>
                                            <option value="0">..</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select class="ui dropdown" className='dropcheck'>
                                            <option value="oty">QTY :1</option>
                                            <option value="1">mattress</option>
                                            <option value="0">..</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='offbtn'>
                        <div className='festiveoffer'>
                            <h5 className='pricet'>Rs.25,300 <del className='priceD'>Rs.33,900</del></h5>
                            <h4 className='offertxt'>Festive Offer 20%</h4>
                        </div>
                        <div>
                            <button type='button' className='vproduct'> View Product</button>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </>
    )
}

export default CartDetails
