import React from "react";
import styled from "styled-components";
import { TouchableOpacityButton } from "../../DesignHelper/HelperComponents";

const ArrowButton = () => {
    return (
        <TouchableOpacityButton>
        <GradientButtonWrapper>
            <Arrowrighticon
                src={'assets/images/svgs/rightarrow.svg'}
            />
        </GradientButtonWrapper>
        </TouchableOpacityButton>
    )
}
const BestSellerCardComponent = (props) => {
    return (
        <CardWrapper>
            <CardContentWrapper>
                <FlexColumn>
                    <FlexColumn1>
                        <Text1>{props.heading}</Text1>
                        <FlexRow>
                            <Text2>{props.price}</Text2>
                            <FlexColumn2>
                                <Text3>{props.price}</Text3>
                                <Line />
                            </FlexColumn2>
                        </FlexRow>
                    </FlexColumn1>
                    <WhiteFlexColumn>
                        <Text4>(10% offer)</Text4>
                    </WhiteFlexColumn>
                </FlexColumn>
                <FlexColumn3>
                    <FlexRow1>
                        <Text5>{props.rating}</Text5>
                        <Star src={'assets/images/svgs/star.svg'} />
                        <Text6>(27)</Text6>
                    </FlexRow1>
                    <ArrowButton />
                </FlexColumn3>
            </CardContentWrapper>
            <Image1 src={props.img} />
        </CardWrapper>
    );
};

export default BestSellerCardComponent;



const CardWrapper = styled.div`
  width: 280px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 15px;

  &:hover{

    box-shadow: 1px 2px 13px #0000002b;

  }
`;
const CardContentWrapper = styled.div`
  position: relative;
  gap: 58px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 269px 14px 17px 20px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #dfe0e4;
  background-color: #ffffff;
`;
const FlexColumn = styled.div`
  width: 119px;
  gap: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const FlexColumn1 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: stretch;
`;
const Text1 = styled.div`
  color: #37383c;
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 31px;
  white-space: nowrap;
`;
const FlexRow = styled.div`
  width: 113px;
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 3px;
`;
const Text2 = styled.div`
  color: #313131;
  font-size: 14px;
  font-weight: 600;
  font-family: Nunito;
  line-height: 20px;
  white-space: nowrap;
`;
const FlexColumn2 = styled.div`
  width: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 9px 0px 10px 0px;
`;
const Text3 = styled.div`
  left: 3px;
  top: 0px;
  position: absolute;
  color: #757575;
  font-size: 14px;
  font-family: Nunito;
  line-height: 20px;
  white-space: nowrap;
`;
const Line = styled.img`
  width: 50px;
  height: 1px;
  position: relative;
  background-color: red;
`;
const WhiteFlexColumn = styled.div`
  height: 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0px 11px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #ff8e15;
  background-color: #fff9f3;
`;
const Text4 = styled.div`
  color: #ff8e15;
  font-size: 13px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 31px;
  white-space: nowrap;
`;
const FlexColumn3 = styled.div`
  width: 67px;
  height: 112px;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const FlexRow1 = styled.div`
  width: 67px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
`;
const Text5 = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Star = styled.img`
  width: 15px;
  height: 15px;
  align-self: flex-end;
  margin: 0px 0px 4px 0px;
`;
const Text6 = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const GradientButtonWrapper = styled.div`
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0px 19px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #ffffff;
  background-image: linear-gradient(101deg, #ff8e15 0%, #e7c200 120%);
`;
const Arrowrighticon = styled.img`
  width: 24px;
  height: 24px;
`;
const Image1 = styled.img`
  width: 280px;
  height: 250px;
  left: 0px;
  top: 0px;
  position: absolute;


  


`;
