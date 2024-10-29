import React, { useState } from "react";
import Totalscore from "./Totalscore";
import Numberselector from "./Numberselector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    // Generate a random number between 1 and 6
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      // If the selected number matches the random number, add score and stop rolling
      setScore((prev) => prev + randomNumber);
      setError("winner🎉👏🏻 You guessed the number!");
    } else {
      // If the numbers don't match, deduct score and allow re-rolling
      setScore((prev) => prev - 2);
    }

    // Deselect the number after each roll
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  const showrules = () => {
    setRules((prev) => !prev);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <Totalscore score={score} />
        <Numberselector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Rolldice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <Button
          onClick={() => {
            resetScore();
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            showrules();
          }}
        >
          Show Rules
        </Button>
      </div>
      {rules && (
        <div className="rules">
          <div className="rulescontent">
            <h1>How to play dice game</h1>
            <p>Select any number</p>
            <p>
              after click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </p>
            <p>if you get wrong guess then 2 point will be dedcuted </p>
          </div>
        </div>
      )}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding: 20px 40px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .rules {
    /* background-color: pink; */
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .rulescontent{
      background-color: #FBF1F1;
      padding: 15px 20px;
      font-size: 15 px;
      /* line-height: 25px; */
    }
    h1{
      font-size: 25px;
    }
  }
`;
const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px 5px 5px 5px;
  background-color: black;
  color: white;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  float: right;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
