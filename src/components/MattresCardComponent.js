import React from "react";
import styled from "styled-components";
import { HeartOutline } from "styled-icons/evaicons-outline";
import { TouchableOpacityButton } from "../DesignHelper/HelperComponents";

const MattresCardComponent = (props) => {
    return (
        <MattressCardWrapper>
            <FlexRow style={{ backgroundImage: 'url(' + props.img + ')' }}>
                {props.launch === '' ? '.' :
                    <NeonCarrotFlexColumn>
                        <Text1>{props.launch}</Text1>
                    </NeonCarrotFlexColumn>
                }

                <TouchableOpacityButton>
                    <HeartOutline className="rounded-circle bg-black p-2" width={30} fill="white" />
                </TouchableOpacityButton>
            </FlexRow>
            <WhiteFlexColumn>
                <FlexRow1>
                    <Text2>{props.title}</Text2>
                    <FlexRow2>
                        <Text3>{props.rating}</Text3>
                        <Star src={`assets/images/svgs/star.svg`} />
                        <Text4>(27)</Text4>
                    </FlexRow2>
                </FlexRow1>
                <Text5>The Sustanible maatress ever </Text5>
                <Text6>
                    Festive Offer @<FestiveOffer> </FestiveOffer>
                </Text6>
                <FlexRow3>
                    <Text7>{props.price}</Text7>
                    <Text8>Rs.33.678</Text8>
                </FlexRow3>
            </WhiteFlexColumn>
        </MattressCardWrapper>
    );
};

export default MattresCardComponent;

const MattressCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: fit-content;
  border-radius: 15px;
  overflow: hidden;
  align-items: center;
  margin: 5px;
  box-shadow: 1px 4px 18px #0000000a;
  transition: all 0.5s ease;

  &:hover{
    box-shadow: 1px 4px 20px #00000024;
  }
`;
const FlexRow = styled.div`
  width: 304px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 251px 11px 0.09px 0px;
  background-size: cover;
`;
const NeonCarrotFlexColumn = styled.div`
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0px 32px 0px 12px;
  border-radius: 0px 24px 0px 0px;
  background-color: #ff8e15;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const OuterSpaceFlexColumn = styled.div`
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  padding: 3px 4px;
  border-radius: 24px;
  background-color: #3c3c3c;
`;
const Heart = styled.img`
  width: 24px;
  height: 24px;
`;
const WhiteFlexColumn = styled.div`
  width: 287px;
  height: 177px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 18px 0px 10px;
  background-color: #ffffff;
`;
const FlexRow1 = styled.div`
  gap: 67px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  margin: 0px 0px 6px 0px;
`;
const Text2 = styled.div`
  color: #3c4043;
  font-size: 24px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 30px;
  white-space: nowrap;
`;
const FlexRow2 = styled.div`
  width: 67px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 6px 0px;
`;
const Text3 = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Star = styled.img`
  width: 15px;
  height: 15px;
`;
const Text4 = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Text5 = styled.div`
  margin: 0px 0px 25px 0px;
  color: #3c3c3c;
  font-size: 14px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 24px;
  white-space: pre-wrap;
`;
const Text6 = styled.div`
  margin: 0px 0px 16px 0px;
  color: #0d0654;
  font-size: 14px;
  font-weight: 500;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const FestiveOffer = styled.div`
  display: contents;
  color: #0d0654;
  font-size: 24px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: pre-wrap;
`;
const FlexRow3 = styled.div`
  width: 287px;
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
const Text7 = styled.div`
  color: #3c4043;
  font-size: 24px;
  font-weight: 700;
  font-family: Nunito Sans;
  line-height: 24px;
  white-space: nowrap;
`;
const Text8 = styled.div`
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito Sans;
  line-height: 24px;
  text-decoration: line-through;
  white-space: nowrap;
`;
