import React, { useState } from "react";
import styled from "styled-components";
import { TouchableOpacityButton } from "../../../DesignHelper/HelperComponents";
import Footer from "../../Footer/Footer";
import Navbar from "../../navbar/Navbar";
import CartDetails from "./Cart";
import Mattressontheway from "./Mattressontheway";
import Pay from "./Payment";
import Stepper from "./Stepper";


const Pricedetails = ({ }) => {

  const[state, setState] = useState(1);

    const OnclickHandler = () =>{
      setState(state+1);
    }


  return (
    <>
      <Navbar />
      <Stepper middle={state}/>
      <div className="container mt-5">
        <div className="d-flex flex-row flex-wrap justify-content-between align-items-center ">
       {state === 1 ? <CartDetailSec handler={OnclickHandler} /> : ''}
       {state === 2 ?  <ContactForm handler={OnclickHandler} /> : ''}
       {state === 3 ? <DeliveryAddressSec handler={OnclickHandler} /> : ''}
       {state === 4 ? <PaymentMode handler={OnclickHandler} />: ''}
       {state === 5 ?  <Mattressontheway handler={OnclickHandler} /> : ''}

        </div>

      </div>
      <Footer />
    </>
  );
};


const CartDetailSec = ({handler}) =>{
  return(
    <>
       <CartDetails  />
          <FrameRootRootRoot className="mt-5">
            <Text1>PRICE DETAILS (2 Items)</Text1>
            <FlexRow>
              <Text2>Total Price</Text2>
              <Text3>₹50,600</Text3>
            </FlexRow>
            <FlexRow>
              <Text2>Discount</Text2>
              <Element4>
                - <Element3>₹13,600</Element3>
              </Element4>
            </FlexRow>
            <FlexRow2>
              <Text2>Delivery Charges</Text2>
              <Text6>FREE</Text6>
            </FlexRow2>
            <Line src={`https://file.rendit.io/n/LfxL8AWfIsalueWgyZwl.svg`} />
            <FlexRow3>
              <Text7>Total Amount</Text7>
              <Text3>₹50,600</Text3>
            </FlexRow3>
            <TouchableOpacityButton onClick={handler}>
            <NeonCarrotFlexColumn >
              <Text9>CONTINUE</Text9>
            </NeonCarrotFlexColumn>
            </TouchableOpacityButton>
          </FrameRootRootRoot>

    </>
  )
}
const ContactForm = ({handler}) =>{
  return(
    <>
      <div className='form'>
              <h3 className='nameof'>Contact Details</h3>
              <div className='firstcon'>
                <input type="text" class="form-control" placeholder='Name*' id="usr" className='detailform' />
                <input type="text" class="form-control" placeholder='MobileNo*' id="usr" className='detailform' />
              </div>
              <h3 className='nameof'>Address</h3>
              <div className='firstcon'>
                <input type="text" class="form-control" placeholder='Pin code *' id="usr" className='detailform' />
                <input type="text" class="form-control" placeholder='Address (House No, Building)*' id="usr" className='detailform' />
                <input type="text" class="form-control" placeholder='Locality / town)*' id="usr" className='detailform' />
                <div className='drlist'>
                  <div>
                    <select class="ui dropdown" className='droplist'>
                      <option value="">Country</option>
                      <option value="1">mattress</option>
                      <option value="0">..</option>
                    </select>
                  </div>
                  <div>
                    <select class="ui dropdown" className='droplist'>
                      <option value="">City</option>
                      <option value="1">mattress</option>
                      <option value="0">..</option>
                    </select>
                  </div>
                </div>
                <h3 className='nameof'>Save As</h3>
                <div className='icon'>
                  <h3 className='home'> <img src="assets/images/home.png" alt="" /> Home</h3>
                  <h3 className='home'><img src="assets/images/work.png" alt="" /> Work</h3>
                </div>
                <button type="button" className='addressbtn' onClick={handler}>Add Address</button>
              </div>
            </div>
            <div className='PriceDetailsdet'>
              <h4 className='tottxt'>PRICE DETAILS(2 items)</h4>
              <div className='pricecontent'>
                <div>
                  <h5 className='blendtxt'>Total Price</h5>
                  <h5 className='blendtxt'>Discount</h5>
                  <h5 className='blendtxt'>Delivery Charges</h5>
                </div>
                <div>
                  <h5 className='bldtxt'>₹50,600</h5>
                  <h5 className='bldtxt'>-₹13,600</h5>
                  <h5 className='free'>FREE</h5>
                </div>
              </div>
              <div className='totalprice'>
                <h4 className='tottxt'>Total amount</h4>
                <h4>₹50,600</h4>
              </div>
            </div>
    </>
  )
}
const DeliveryAddressSec = ({handler}) =>{
  return(
    <>
     <div className='commdelivery'>
    <div className='adddiv'>
    <h4 className='deltxt'>SELECT DELVERY ADDRESS <br/>
    Default</h4> 
    <TouchableOpacityButton>
    <button type="button" className='btndel'>Add New Address</button>
    </TouchableOpacityButton>
    </div>
    <div className='addresstot'>
    <div className='addhomcheck'>
    <input type="checkbox" id='deliverycheck'/>
        <h4 className='name'>Markandan</h4>
        <p className='colorname'>[Home]</p>
    </div>
    <div>
        <h4>23, Newyork street, goldman sachman company,
London, united kingdom</h4>
<h5>Mobile:8509473069</h5>
<TouchableOpacityButton>
<button type="button" className='btndel'>EDIT ADDRESS</button>
</TouchableOpacityButton>
    </div>
    </div>
   </div>
   <div className='PriceDetailsdet'>
    <h4 className='tottxt'>PRICE DETAILS(2 items)</h4>
    <div className='pricecontent'>
    <div>
        <h5 className='blendtxt'>Total Price</h5>
        <h5 className='blendtxt'>Discount</h5>
        <h5 className='blendtxt'>Delivery Charges</h5>
    </div>
    <div>
        <h5 className='bldtxt'>₹50,600</h5>
        <h5 className='bldtxt'>-₹13,600</h5>
        <h5 className='free'>FREE</h5>
    </div>
    </div>
    <div className='totalprice'>
    <h4 className='tottxt'>Total amount</h4>
    <h4>₹50,600</h4>
    </div>
    <TouchableOpacityButton onClick={handler}>
    <button type="button" className='continuebtn'>Continue</button>
    </TouchableOpacityButton>
  </div>
    </>
  )
}

const PaymentMode = ({handler}) =>{
  return(
    <>
    <Pay/>
    <div className='PriceDetailsdet'>
    <h4 className='tottxt'>PRICE DETAILS(2 items)</h4>
    <div className='pricecontent'>
    <div>
        <h5 className='blendtxt'>Total Price</h5>
        <h5 className='blendtxt'>Discount</h5>
        <h5 className='blendtxt'>Delivery Charges</h5>
    </div>
    <div>
        <h5 className='bldtxt'>₹50,600</h5>
        <h5 className='bldtxt'>-₹13,600</h5>
        <h5 className='free'>FREE</h5>
    </div>
    </div>
    <div className='totalprice'>
    <h4 className='tottxt'>Total amount</h4>
    <h4>₹50,600</h4>
    </div>
    <div className='otpbtn'>
    <h6 className='otptxt'>we sent a OTP to your registered mobile no.</h6>
    <div className='txtboxbtndiv'>
        <input type="texbox" placeholder='Enter your OTP' className='boxxt'/>
        <button type="button" className='checkbtn'>CHECK</button>
    </div>
    <button type="button" className='continuebtn' onClick={handler}>Buy Now</button>
    </div>
  </div>
    </>
  )
}



export default Pricedetails;

const FlexRow = styled.div`
  width: 314px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 15px 0px;
`;
const Text2 = styled.div`
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Text3 = styled.div`
  color: #393939;
  font-size: 14px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 31px;
  white-space: nowrap;
  letter-spacing: -0.14px;
`;
const FrameRootRootRoot = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  background-color: rgba(255, 255, 255, 0);
`;
const Text1 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 25px 0px;
  font-size: 14px;
  font-weight: 600;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Element4 = styled.div`
  color: #393939;
  font-size: 14px;
  font-family: Nunito;
  line-height: 31px;
  white-space: pre-wrap;
  letter-spacing: -0.14px;
`;
const Element3 = styled.div`
  display: contents;
  color: #393939;
  font-size: 14px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 31px;
  letter-spacing: -0.14px;
`;
const FlexRow2 = styled.div`
  width: 314px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 19px 0px;
`;
const Text6 = styled.div`
  color: #4fb400;
  font-size: 14px;
  font-family: Nunito;
  line-height: 31px;
  white-space: nowrap;
  letter-spacing: -0.14px;
`;
const Line = styled.img`
  width: 314px;
  height: 1px;
  margin: 0px 0px 7px 0px;
`;
const FlexRow3 = styled.div`
  width: 314px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 28px 0px;
`;
const Text7 = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const NeonCarrotFlexColumn = styled.div`
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: stretch;
  padding: 0px 120px;
  border-radius: 20px;
  background-color: #ff8e15;
`;
const Text9 = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
