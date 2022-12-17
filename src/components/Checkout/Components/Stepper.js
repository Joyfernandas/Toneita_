import React from "react";
import styled from "styled-components";


 const Stepper = () => {
  return (
    <MainStep>
      <InchWormFlexRow>
        <Text1>CART</Text1>
        <Checkcircle
          src={`https://file.rendit.io/n/WnRyrKEaowr8wLjRtHTw.svg`}
        />
      </InchWormFlexRow>
      <NeonCarrotText>ADDRESS</NeonCarrotText>
      <WhiteText>PAYMENT</WhiteText>
    </MainStep>
  );
};

const MainStep = styled.div`
  width: 97%;
  gap: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #f2f2f2;
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
`;
export default Stepper
