import React from "react";
import styled from "styled-components";
import { TouchableOpacityButton } from "../DesignHelper/HelperComponents";

 const WishListCardComponent = (props) => {
  return (
    <WishListCardWrapper>
      <FlexColumn>
        <WhiteFlexColumn>
            <TouchableOpacityButton>
          <X src={`https://file.rendit.io/n/bQinbW4KewaE0FrSCWTb.svg`} />
            </TouchableOpacityButton>
        </WhiteFlexColumn>
      </FlexColumn>
      <OuterSpaceFlexColumn>
        <Text1>{props.offer}</Text1>
      </OuterSpaceFlexColumn>
      <OuterSpaceFlexRow>
        <Text2>
          Rs. {props.price}<Rs> </Rs>
        </Text2>
        <FlexColumn1>
          <Rs3>
            <Text3>Rs.{props.price1}</Text3>
          </Rs3>
          <Line src={`https://file.rendit.io/n/RZcAahElbgnQgIeybmVu.svg`} />
        </FlexColumn1>
      </OuterSpaceFlexRow>
      <NeonCarrotFlexColumn>
        <TouchableOpacityButton>
        <AddToCart className="text-nowrap">Add to Cart </AddToCart>
        </TouchableOpacityButton>
      </NeonCarrotFlexColumn>
    </WishListCardWrapper>
  );
};
export default WishListCardComponent;
const WishListCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 250px;
`;
const FlexColumn = styled.div`
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 11px 11px 11px 215px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/8GGiUdhV0RNf5QxFr5BG.png");
`;
const WhiteFlexColumn = styled.div`
  height: 22.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 3.4px;
  border-width: 0.6px;
  border-radius: 20px;
  border-style: solid;
  border-color: #aeaeae;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const X = styled.img`
  width: 16px;
  height: 16px;
`;
const OuterSpaceFlexColumn = styled.div`
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0px 164px 0px 18px;
  background-color: #37383c;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito Sans;
  line-height: 24px;
  white-space: nowrap;
`;
const OuterSpaceFlexRow = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 22px 21px 22px 18px;
  background-color: #595959;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Nunito Sans;
  line-height: 24px;
  white-space: nowrap;
`;
const Rs = styled.div`
  display: contents;
  color: #3c4043;
  font-size: 24px;
  font-weight: 700;
  font-family: Nunito Sans;
  line-height: 24px;
  white-space: pre-wrap;
`;
const FlexColumn1 = styled.div`
  width: 79px;
  height: 6px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  padding: 9px 0px 9px 5px;
`;
const Rs3 = styled.div`
  left: 0px;
  top: 0px;
  position: absolute;
  color: #3c4043;
  font-size: 24px;
  font-weight: 700;
  font-family: Nunito Sans;
  line-height: 24px;
  white-space: pre-wrap;
`;
const Text3 = styled.div`
  display: contents;
  color: #c5c5c5;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito Sans;
  line-height: 24px;
`;
const Line = styled.img`
  width: 79px;
  height: 1.2px;
  position: relative;
  top:6px
`;
const NeonCarrotFlexColumn = styled.div`
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0px 81px;
  border-radius: 0px 0px 8px 8px;
  background-color: #ff8e15;
`;
const AddToCart = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: pre-wrap;
`;
