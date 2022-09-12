import { StyledH1 } from "./components/Title";
import MainCounter from "./components/MainCounter";
import styled from "styled-components/macro";
import { StyledPrimaryButton, StyledTertiaryButton } from "./components/Button";

import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./firebase";

const DAILY_KCAL = 1800;
const WEEKLY_KCAL = 1800 * 7;

// This should be a modal which let users combinate buttons: Like 200+50+10
// Or this should remember what users chose the last times.
const QUICK_ADD_KCALS = [100, 200, 300, 400, 500];

function App() {
  useEffect(() => {
    const testDb = async () => {
      try {
        const docRef = await setDoc(doc(db, "test", "aha"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        // const docRef = await addDoc(collection(db, "records"), {
        //   first: "Ada",
        //   last: "Lovelace",
        //   born: 1815,
        // });
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    testDb();
  }, []);

  return (
    <ContentWrapper>
      <TopContent>
        <StyledH1>Mandag 25.07 🧗🏻‍♂️</StyledH1>
        {/* Currently weekly, but should be controlled by user settings in the future */}
        {/* The number should go down so it motivates users */}
        <MainCounter totalKcal={WEEKLY_KCAL}></MainCounter>
        <MainStatsWrapper>
          <h4>Uke 30 (23.07-39.07)</h4>
          <MainStats>
            <p>Du har dunka, denne uka:</p>
            <p>600 kcal</p>
            <p>Du har dunka, i dag:</p>
            <p>600 kcal</p>
          </MainStats>
        </MainStatsWrapper>
      </TopContent>
      <BottomContent>
        <QuickAddButtonsWrapper>
          <h4>Dunke tid</h4>
          <QuickAddButtons>
            {QUICK_ADD_KCALS.map((kcal, i) => (
              <StyledPrimaryButton key={i}>{kcal} kcal</StyledPrimaryButton>
            ))}
            <StyledPrimaryButton>Custom</StyledPrimaryButton>
          </QuickAddButtons>
        </QuickAddButtonsWrapper>
        <MainStatsAverageLeft>
          For resten av uke kan du dunke 2000 kcal per dag (i dag: 1400 kcal
          igjen),
        </MainStatsAverageLeft>
      </BottomContent>
    </ContentWrapper>
  );
}

const TopContent = styled.div``;
const BottomContent = styled.div``;

const QuickAddButtonsWrapper = styled.div`
  margin-top: 8px;
  h4 {
    margin: 0;
  }
`;

const QuickAddButtons = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  flex-direction: column;
  justify-content: space-between;
`;

const MainStatsWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
  }
  p {
    font-size: 18px;
  }
`;

const MainStats = styled.div`
  width: 100%;
  margin-top: 8px;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 8px;

  p {
    margin: 0;
  }
`;

const MainStatsAverageLeft = styled.p`
  margin-top: 4px;
`;

export default App;
