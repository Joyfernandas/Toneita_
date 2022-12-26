import React, { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";


const Stepper = () => {
 const location = useLocation();
  useEffect(() => {

    // if(location.pathname == '/'){
    //   setatHidden(false)
    // }else{
    //  setatHidden(true)
    // }


  }, []);

  return (
    <MainStep className="mt-3">
      <CusWrapper>
        <InchWormFlexRow>
          <Text1>CART</Text1>
          <Checkcircle
            src={`https://file.rendit.io/n/WnRyrKEaowr8wLjRtHTw.svg`}
          />
        </InchWormFlexRow>
        <NeonCarrotText>ADDRESS</NeonCarrotText>
        <WhiteText>PAYMENT</WhiteText>
      </CusWrapper>
    </MainStep>
  );
};

const CusWrapper = styled.div`
width: fit-content;
display: flex;
gap: 10px;
background-color: #f2f2f2;
padding: 0 50px;
  border-radius: 20px;
  @media screen and (max-width:600px) {
    padding: 0px 0px;
    gap: 1px;
    
  }
`

const MainStep = styled.div`
  width: 100%;
  /* gap: 36px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border-radius: 20px; */
  /* background-color: #f2f2f2; */
`;
const InchWormFlexRow = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  border-radius: 20px;
  background-color: #3ea500;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;

  @media screen and (max-width: 800px){
    font-size: 10px;
    
  }
`;
const Checkcircle = styled.img`
  width: 24px;
  height: 24px;
`;
const NeonCarrotText = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  padding: 9px 31px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: #ffffff;
  background-color: #ff8e15;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.24);
  @media screen and (max-width:800px) {
    font-size: 10px;
  }
`;
const WhiteText = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
  border-radius: 20px;
  background-color: #f2f2f2;
  @media screen and (max-width:600px) {
padding: 10px 20px;
font-size: 10px;
  }
`;
export default Stepper
