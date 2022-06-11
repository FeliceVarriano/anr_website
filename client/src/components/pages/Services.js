import React, { useState } from "react";
import Footer from "../Footer";
import styled from "styled-components";
import "../../Css/HelpMeDecide.css";
import { questions } from "../Static/HelpMeDecide";
import { Button } from "../Button";

export default function Services() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answers, setAnswer] = useState([]);

  const handleAnswerOptionClick = (answer) => {
    setAnswer([...answers, answer]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <Container>
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
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
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
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  height: 61em;
`;
