import React from "react";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import Navbar from "../../navbar/Navbar";
import CartDetails from "./Cart";
import ContactDetails from "./ContactDetails";
import Deliveryaddress from "./Deliveryaddress";
import Mattressontheway from "./Mattressontheway";
import PaymentMode from "./PaymentMode";
import Stepper from "./Stepper";
import { Link } from "react-router-dom";
const Pricedetails = () => {
    return (
        <>
        {/* <Mattressontheway/> */}
        {/* <PaymentMode/> */}
        {/* <Deliveryaddress/> */}
         {/* <ContactDetails/> */}
         {/* <CartDetails/> */}
         <Navbar/>
         <Stepper/>
            <PriceListContainer>

            <CartDetails/>
                <GroupRootRootRoot>
                    <FlexColumn>
                        <FlexColumn1>
                            <Text1>₹50,600</Text1>
                            <Element4>
                                - <Element3>₹13,600</Element3>
                            </Element4>
                            <Text2>FREE</Text2>
                        </FlexColumn1>
                        <Text1>₹50,600</Text1>
                    </FlexColumn>
                    <FlexColumn2>
                        <FlexColumn3>
                            <Text4>PRICE DETAILS (2 Items)</Text4>
                            <Text5>Total Price</Text5>
                            <Text6>Discount</Text6>
                            <Text7>Delivery Charges</Text7>
                            <Line src={`https://file.rendit.io/n/YozHolshjVWuznA6fQL3.svg`} />
                            <Text8>Total Amount</Text8>
                            <Link to='/contactdetails'>
                            <Button className="btndivprice">Place Order</Button>
                            </Link>
                        </FlexColumn3>
                    </FlexColumn2>
                </GroupRootRootRoot>
            </PriceListContainer>
            <Footer/>
        </>
    );
};

const PriceListContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 70%;
flex-direction: row;
justify-content: space-between;
margin:15px 50px;
`


const Text1 = styled.div`
  color: #393939;
  font-size: 14px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 31px;
  white-space: nowrap;
  letter-spacing: -0.14px;
`;
const GroupRootRootRoot = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexColumn = styled.div`
  width: 63px;
  left: 251px;
  top: 188px;
  position: absolute;
  gap: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width:600px;) {
    top: 50px;
  
  }
`;

const FlexColumn1 = styled.div`
  width: 63px;
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-end;
`;
const Element4 = styled.div`
  align-self: stretch;
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
const Text2 = styled.div`
  color: #4fb400;
  font-size: 14px;
  font-family: Nunito;
  line-height: 31px;
  white-space: nowrap;
  letter-spacing: -0.14px;
`;
const FlexColumn2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexColumn3 = styled.div`
  width: 317px;
  height: 278px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 600px){
    width:317px;
    height: 533px;
  }
  @media screen and (max-width: 920px){
    width:317px;
    height: 533px;
  }
  @media screen and (max-width: 1020px){
    width:317px;
    height: 533px;
  }
  @media screen and (max-width: 1080px){
    width:317px;
    height: 533px;
  }
  /* @media screen and (max-width: 600px) {
  background-color: tomato;
 } */
`;
const Text4 = styled.div`
  margin: 0px 0px 26px 0px;
  font-size: 14px;
  font-weight: 600;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Text5 = styled.div`
  width: 67px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 14px 0px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Text6 = styled.div`
  width: 56px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 13px 0px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Text7 = styled.div`
  width: 109px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 28px 0px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Line = styled.img`
  width: 314px;
  height: 1px;
  margin: 0px 0px 10px 0px;
`;
const Text8 = styled.div`
  gap: 101px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 30px 0px;
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Button = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  padding: 6px 120px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
  border-radius: 20px;
  background-color: #ff8e15;
`;
const btndivprice =styled.div`

`
export default Pricedetails
