import React from "react";
import styled from "styled-components";

const Pay = () => {
  return (
    <GroupRootRootRoot>
      <FlexRow>
        <FlexColumn>
          <Text1>PAYMENT MODE</Text1>
          <Text2>Choose Payment</Text2>
        </FlexColumn>
        <Button>EDIT ADDRESS</Button>
      </FlexRow>


      <FlexColumn1>
        <FlexColumn2>
          <FlexRow1>
            <FlexColumn2>
              <Container>
                <Container1 />
              </Container>
            </FlexColumn2>
            <Markandan>Cash on Delivery</Markandan>
          </FlexRow1>
        </FlexColumn2>
      </FlexColumn1>


      <FlexColumn4>
        <FlexColumn2>
          <FlexRow1>
            <FlexColumn2>
              <Container>
                <Container1 />
              </Container>
            </FlexColumn2>
            <Markandan>UPI</Markandan>
          </FlexRow1>
        </FlexColumn2>
      </FlexColumn4>


      <FlexColumn7>
        <FlexColumn2>
          <FlexRow1>
            <FlexColumn2>
              <Container>
                <Container1 />
              </Container>
            </FlexColumn2>
            <Markandan>Credit/Debit Card</Markandan>
          </FlexRow1>
        </FlexColumn2>
      </FlexColumn7>


      <FlexColumn7>
        <FlexColumn2>
          <FlexRow1>
            <FlexColumn2>
              <Container>
                <Container1 />
              </Container>
            </FlexColumn2>
            <Markandan>Netbanking</Markandan>
          </FlexRow1>
        </FlexColumn2>
      </FlexColumn7>
    </GroupRootRootRoot>
  );
};

export default Pay


const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexRow1 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 3px;
  border-radius: 10px;
  background-image: linear-gradient(138deg, #ff8e15 0%, #fcc80d 39%);
`;
const Container1 = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: #ffffff;
`;
const Markandan = styled.div`
  font-size: 15px;
  font-weight: 700;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
`;
const GroupRootRootRoot = styled.div`
  width: 462px;
  height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width:600px) {
    width: 100%;
  }
`;
const FlexRow = styled.div`
  width: 461px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  margin: 0px 0px 22px 0px;
  padding: 0px 1px 0px 0px;
`;
const FlexColumn = styled.div`
  width: 121px;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Text1 = styled.div`
  align-self: stretch;
  font-size: 14px;
  font-weight: 600;
  font-family: Nunito;
  line-height: 24px;
  white-space: nowrap;
  letter-spacing: 0.84px;
`;
const Text2 = styled.div`
  color: #787878;
  font-size: 13px;
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
  align-self: flex-start;
  align-items: flex-start;
  padding: 8px 10px;
  color: #030303;
  font-size: 14px;
  font-weight: 600;
  font-family: Nunito;
  line-height: 16px;
  white-space: nowrap;
  border-radius: 6px;
  background-color: #f4f4f4;
`;


const FlexColumn1 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 0px 16px 0px;
  padding: 23px 299px 23px 13px;
  border-width: 1px;
  border-radius: 7px;
  border-style: solid;
  border-color: #c4c4c4;
  width: 461px;
`;
const FlexColumn4 = styled.div`
  width: 461px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 18px 0px;
  padding: 23px 299px 23px 13px;
  border-width: 1px;
  border-radius: 7px;
  border-style: solid;
  border-color: #c4c4c4;
`;
const FlexColumn7 = styled.div`
  width: 461px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 16px 0px;
  padding: 23px 299px 23px 13px;
  border-width: 1px;
  border-radius: 7px;
  border-style: solid;
  border-color: #c4c4c4;
`;
const FlexColumn10 = styled.div`
  width: 461px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  padding: 23px 299px 23px 13px;
  border-width: 1px;
  border-radius: 7px;
  border-style: solid;
  border-color: #c4c4c4;
`;
