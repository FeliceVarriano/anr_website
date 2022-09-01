import React, { useState } from "react";
import styled from "styled-components";
import { questions } from "../src/components/Static/HelpMeDecide";
import { Button } from "../src/components/Button";
import CardItem from "../src/components/CardItem";

export default function Services() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowAnswers] = useState(false);
  const [answers, setAnswer] = useState([]);
  const [showHelpMeDecideModal, setShowHelpMeDecideModal] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    setAnswer([...answers, answer]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowAnswers(true);
    }
  };

  const toggleHelpMeDecideModalHandler = () => {
    setShowHelpMeDecideModal(!showHelpMeDecideModal);
  };

  return (
    <Container>
      <div className="services__cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/svg-image-3.svg"
                text="View our 4 Hour Packages"
                label="Services"
                path="/services4hour"
              />
              <CardItem
                src="images/svg-image-2.svg"
                text="View our 8 Hour Packages"
                label="Services"
                path="/services8hour"
              />
            </ul>
          </div>
        </div>
      </div>

      <HelpMeDecideContainer>
        <button
          class="btn--primary btn--medium help-me-decide"
          onClick={toggleHelpMeDecideModalHandler}
        >
          Help Me Decide
        </button>
        {showHelpMeDecideModal ? (
          <div className="popup">
            {showScore ? (
              <div className="score-section">
                {answers.map((txt) => (
                  <p>{txt}</p>
                ))}
                <Button
                  className="btns"
                  buttonStyle="btn--primary"
                  buttonSize="btn--medium"
                  path="/services4hour"
                >
                  View Package!
                </Button>
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.answerText)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        ) : (
          <></>
        )}
      </HelpMeDecideContainer>
    </Container>
  );
}

const Container = styled.div``;

const HelpMeDecideContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;
