import { useState } from "react";
import styled from "styled-components/macro";

interface Props {
  children: React.ReactNode;
}
const MainCounter = ({ totalKcal }: { totalKcal: number }) => {
  return (
    <Wrapper>
      <TotalKcalLeft>{totalKcal}</TotalKcalLeft>
      <MainCounterHelperText>KCAL igjen denne uken</MainCounterHelperText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 260px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* background-color: #bce08a; */
  background-color: #ffffff85;
  /* border: 2px solid #99bc69; */
  margin: auto;
`;

const TotalKcalLeft = styled.h2`
  color: #93c572;
  font-size: 50px;
  line-height: 1.5;
  font-weight: bold;
  margin: 0;
`;

const MainCounterHelperText = styled.p`
  font-size: 16px;
  margin: 0;
`;
export default MainCounter;
