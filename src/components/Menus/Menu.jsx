import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

 const Menu = () => {
  return (
    <GroupRootRootRoot>
      <OuterSpaceFlexRow>
        <Image1 src={`https://file.rendit.io/n/S4VfDvNHr8sXLjJwWz8U.png`} />
        <FlexColumn>
          <FlexColumn1>
            <OuterSpaceFlexColumn>
              <Link to='/'>
              <Text1>HOME</Text1>
              </Link>
            </OuterSpaceFlexColumn>
          </FlexColumn1>
          <FlexColumn2>
            <OuterSpaceFlexColumn1>
              <Link to='/about'>
              <Text2>ABOUT</Text2>
              </Link>
            </OuterSpaceFlexColumn1>
          </FlexColumn2>
          <FlexColumn3>
            <OuterSpaceFlexColumn2>
              <Link to='/contact'>
              <Text3>CONTACT</Text3>
              </Link>
            </OuterSpaceFlexColumn2>
          </FlexColumn3>
          <FlexColumn4>
            <OuterSpaceFlexColumn3>
              <Link to='/profileinfo'>
              <Text4>PROFILE</Text4>
              </Link>
            </OuterSpaceFlexColumn3>
          </FlexColumn4>
          <FlexColumn5>
            <OuterSpaceFlexColumn4>
              <Link to='/myorder'>
              <Text5>ORDERS</Text5>
              </Link>
            </OuterSpaceFlexColumn4>
          </FlexColumn5>
        </FlexColumn>
      </OuterSpaceFlexRow>
    </GroupRootRootRoot>
  );
};
export default Menu

const GroupRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 24px 30px 0px rgba(0, 0, 0, 0.25);
`;
const OuterSpaceFlexRow = styled.div`
  width: 100%;
  height: 479px;
  gap: 46px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 1px 0px;
  background-color: #37383c;
`;
const Image1 = styled.img`
  width: 594px;
  height: 479px;
`;
const FlexColumn = styled.div`
  height: 364px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 57.8px 0px 56.8px 0px;
`;
const FlexColumn1 = styled.div`
  height: 53.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 22.9px 0px;
`;
const OuterSpaceFlexColumn = styled.div`
  height: 51.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 372px 0px 20px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #6f6f6f;
  background-color: #4c4c4f;
`;
const Text1 = styled.div`
  width: 66px;
  height: 25.9px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.22px;
`;
const FlexColumn2 = styled.div`
  height: 53.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 24.9px 0px;
`;
const OuterSpaceFlexColumn1 = styled.div`
  height: 51.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 360px 0px 20px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #6f6f6f;
  background-color: #4c4c4f;
`;
const Text2 = styled.div`
  width: 77.9px;
  height: 25.9px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.22px;
`;
const FlexColumn3 = styled.div`
  height: 53.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 21.9px 0px;
`;
const OuterSpaceFlexColumn2 = styled.div`
  height: 51.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 334px 0px 20px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #6f6f6f;
  background-color: #4c4c4f;
`;
const Text3 = styled.div`
  width: 104px;
  height: 25.9px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.22px;
`;
const FlexColumn4 = styled.div`
  height: 53.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 25.9px 0px;
`;
const OuterSpaceFlexColumn3 = styled.div`
  height: 51.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 348px 0px 20px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #6f6f6f;
  background-color: #4c4c4f;
`;
const Text4 = styled.div`
  width: 89.9px;
  height: 25.9px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.22px;
`;
const FlexColumn5 = styled.div`
  height: 53.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const OuterSpaceFlexColumn4 = styled.div`
  height: 51.8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 347px 0px 20px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #6f6f6f;
  background-color: #4c4c4f;
`;
const Text5 = styled.div`
  width: 90.9px;
  height: 25.9px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.22px;
`;
