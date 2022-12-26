import React from "react";
import styled from "styled-components";
import { TouchableOpacityButton } from "../../DesignHelper/HelperComponents";

 const Tracker = ()=> {
  return (
    <GroupRootRootRoot className="container-fluid mt-5">
      <FlexColumn>
        <FlexRow>
          <TouchableOpacityButton>
          <Ellipse>
            <Check src={`https://file.rendit.io/n/ccEBsNn4yiloCz3nm0Yz.svg`} />
          </Ellipse>
          </TouchableOpacityButton>
          <Line2  src={`https://file.rendit.io/n/OnwZnjjkfslwTlvLeu5s.svg`} />
        </FlexRow>
        <FlexColumn1>
          <Text1>Ordered</Text1>
          <Text2>12 October, 2022</Text2>
          <Text3>12:10:28 PM</Text3>
        </FlexColumn1>
      </FlexColumn>
      <FlexColumn2>
        <FlexRow1>
         
          <Ellipse>
            <Check src={`https://file.rendit.io/n/ccEBsNn4yiloCz3nm0Yz.svg`} />
          </Ellipse>
          
          <Line2  src={`https://file.rendit.io/n/OnwZnjjkfslwTlvLeu5s.svg`} />
        </FlexRow1>
        <FlexColumn3>
          <Text1>Store Picked up</Text1>
          <Text2>12 October, 2022</Text2>
          <Text3>03:22:34 PM</Text3>
        </FlexColumn3>
      </FlexColumn2>
      <FlexColumn4>
        <FlexRow2>
          <FlexColumn5>
            <Ellipse4
              src={`https://file.rendit.io/n/LKRFUc7fPIKDa1uxJ1RG.svg`}
            />
            <Image1 src={`https://file.rendit.io/n/sX7ZaggdNqt47QPQ29sC.svg`} />
          </FlexColumn5>
          <Line2 src={`https://file.rendit.io/n/XSsjWaeghfve4hQd7KAz.svg`} />
        </FlexRow2>
        <FlexColumn6>
          <FlexColumn7>
            <Text7>Dispatched</Text7>
            <Text3>Processing</Text3>
          </FlexColumn7>
          <Refreshcw2
            src={`https://file.rendit.io/n/hNz32fs4Wcf6Ipv93gmz.svg`}
          />
        </FlexColumn6>
      </FlexColumn4>
      <FlexColumn8>
        <FlexRow3>

          <Ellipse2>
            <Refreshcw2
              src={`https://file.rendit.io/n/TakcNANK9ON9zmJE5ZBf.svg`}
            />
          </Ellipse2>
          <Line2 src={`https://file.rendit.io/n/yGpbbNn9dIJFiVGbyWTY.svg`} />
        </FlexRow3>
        <FlexColumn9>
          <Text1>Out of delivery</Text1>
          <Text2>12 October, 2022</Text2>
          <Text3>Expected</Text3>
        </FlexColumn9>
      </FlexColumn8>
      <FlexColumn10>
        <Ellipse2>
          <Refreshcw2
            src={`https://file.rendit.io/n/TakcNANK9ON9zmJE5ZBf.svg`}
          />
        </Ellipse2>
        <FlexColumn11>
          <Text1>Delivered</Text1>
          <Text2>13 October, 2022</Text2>
          <Text3>Expected</Text3>
        </FlexColumn11>
      </FlexColumn10>
    </GroupRootRootRoot>
  );
};
export default Tracker;


const Ellipse = styled.div`
  height: 33px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  padding: 3px 4px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/LKRFUc7fPIKDa1uxJ1RG.svg");
`;
const Check = styled.img`
  width: 24px;
  height: 24px;
`;
const Line = styled.img`
  width: 234px;
  height: 1px;
  align-self: flex-start;
  margin: 15px 0px 0px 0px;
`;
const Text1 = styled.div`
  color: #303030;
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Text2 = styled.div`
  align-self: stretch;
  color: #636363;
  font-size: 14px;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Text3 = styled.div`
  color: #636363;
  font-size: 14px;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const Refreshcw2 = styled.img`
  width: 16px;
  height: 16px;
`;
const Ellipse2 = styled.div`
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0px 8px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/tqNhYpCTgjFt8hR06RP3.svg");
`;
const GroupRootRootRoot = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  /* flex-wrap: wrap; */
`;
const FlexColumn = styled.div`
  height: 123px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
 
`;
const FlexRow = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexColumn1 = styled.div`
  width: 111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 164px 0px 1px;
`;
const FlexColumn2 = styled.div`
  height: 123px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
const FlexRow1 = styled.div`
  gap: 9px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexColumn3 = styled.div`
  width: 111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 164px 0px 0px;
`;
const FlexColumn4 = styled.div`
  height: 123px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const FlexRow2 = styled.div`
  height: 33.1px; 
   display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexColumn5 = styled.div`
  width: 35px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;
const Ellipse4 = styled.img`
  width: 32px;
  height: 32px;
  left: 2px;
  top: 1px;
  position: absolute;
`;
const Image1 = styled.img`
  width: 35px;
  height: 33.1px;
  position: relative;
`;
const Line2 = styled.img`
  width: 15vw;
  height: 1px;
  align-self: flex-start;
  margin: 16px 0px 0px 0px;
`;
const FlexColumn6 = styled.div`
  width: 74px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 168px 0px 2px;
`;
const FlexColumn7 = styled.div`
  width: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: flex-start;
`;
const Text7 = styled.div`
  align-self: stretch;
  color: #303030;
  font-size: 14px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const FlexColumn8 = styled.div`
  height: 123px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlexRow3 = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Line3 = styled.img`
  width: 224px;
  height: 1px;
  align-self: flex-start;
  margin: 15px 0px 0px 0px;
`;
const FlexColumn9 = styled.div`
  width: 111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 162px 0px 0px;
`;
const FlexColumn10 = styled.div`
  width: 111px;
  height: 123px;
  gap: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const FlexColumn11 = styled.div`
  width: 111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: flex-start;
`;
