import React from "react";
import styled from "styled-components";
import { TouchableOpacityButton } from "../../DesignHelper/HelperComponents";
 const Paginate = () => {
  return (
    <>
    
    <FrameRootRootRoot className="container float-right mt-4">
      <TouchableOpacityButton>
      <FlexRow>
        <Chevronleft
          src={`https://file.rendit.io/n/bWp2SVKa9raRl3G0BM1Q.svg`}
        />
        <Text1>Prev</Text1>
      </FlexRow>
      </TouchableOpacityButton>
      
      <Text2>1</Text2>
      <Text3>2</Text3>
      <TouchableOpacityButton>
      <FlexRow1>
        <Text4>Next</Text4>
        <Chevronleft1
          src={`https://file.rendit.io/n/QjnyZWT5tfznaEJ8v6cG.svg`}
        />
      </FlexRow1>
      </TouchableOpacityButton>
    </FrameRootRootRoot>
    </>
  );
};
export default Paginate;

const FrameRootRootRoot = styled.div`
  width: auto;
  gap: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 11px 0px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #d5d9d9;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06);
`;
const FlexRow = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Chevronleft = styled.img`
  width: 24px;
  height: 24px;
`;
const Text1 = styled.div`
  color: #b0b0b0;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito Sans;
  white-space: nowrap;
  letter-spacing: -0.16px;
`;
const Text2 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito Sans;
  white-space: nowrap;
  letter-spacing: -0.16px;
`;
const Text3 = styled.div`
  align-self: flex-start;
  color: #b0b0b0;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito Sans;
  white-space: nowrap;
  letter-spacing: -0.16px;
`;
const FlexRow1 = styled.div`
  width: 61px;
  gap: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text4 = styled.div`
  align-self: flex-end;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito Sans;
  white-space: nowrap;
  letter-spacing: -0.16px;
`;
const Chevronleft1 = styled.img`
  width: 23px;
  height: 24px;
  margin: 0px 0px -1px 0px;
`;
