import React from "react";
import styled from "styled-components";

 const RibbonComponent = () => {
  return (
    <RectangleRootRootRoot>

      <FlexRow>
        <Edit src={`https://file.rendit.io/n/FPeubQNVG1GxdLwJ3RZN.svg`} />
        <Text1>
          Personalized <br />
          Mattress
        </Text1>
      </FlexRow>
      <FlexRow>
        <Element1 src={`https://file.rendit.io/n/ZzI3kJnR2CAqVDuzGvN1.png`} />
        <Text1>
          Free Swatches <br />
          for Mattress
        </Text1>
      </FlexRow>
      <FlexRow>
        <Warranty src={`https://file.rendit.io/n/qNTOL4pqUOzSXzoTqnIE.png`} />
        <Text1>
          5 Year <br />
          Warranty
        </Text1>
      </FlexRow>
      <FlexRow>
        <Image1 src={`https://file.rendit.io/n/L4ZB4dtudf1t5mFD4sis.svg`} />
        <Text1>
          No cost <br />
          EMI
        </Text1>
      </FlexRow>
    </RectangleRootRootRoot>

  );
};

export default RibbonComponent;

const FlexRow = styled.div`
  gap: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 26px;
  white-space: nowrap;
  letter-spacing: -0.18px;
`;
const RectangleRootRootRoot = styled.div`
  width: 100vw;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #ff8e15;

  @media screen and (max-width: 430px){
    justify-content: center;
  }

`;
const Edit = styled.img`
  width: 40px;
  height: 40px;
`;
const Element1 = styled.img`
  width: 43px;
  height: 43px;
`;
const Warranty = styled.img`
  width: 39px;
  height: 38px;
`;
const Image1 = styled.img`
  width: 42.1px;
  height: 43px;
`;
