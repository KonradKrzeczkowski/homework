import Button from "./components/Button";
import Questionscreen from "./components/Questionscreen";
import { QUESTIONS } from "./components/Questions";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(QUESTIONS[count].answers);
  const [newArray, setNewArray] = useState([]);
  const [result, setResult] = useState(0);
  console.log(newArray);

  function filterQuestions(selectedAnswerText) {
    const updatedAnswers = nextQuestion.filter(
      ({ text }) => text === selectedAnswerText
    );
    if (updatedAnswers[0].isCorrect === true) {
      setResult((prev) => prev + 1);
    }
    const newQuestion = {
      question: QUESTIONS[count].text,
      answers: updatedAnswers,
    };
    setNewArray((prevArray) => [...prevArray, newQuestion]);
    if (newArray.length < QUESTIONS.length - 1) {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount < QUESTIONS.length) {
          setNextQuestion(QUESTIONS[newCount].answers);
        }

        return newCount;
      });
    }
  }

  const refreshPage = () => {
    setShowQuiz(false);
    setNewArray([]);
    setResult(0);
    setCount(0);
    setNextQuestion(QUESTIONS[0].answers);
  };
  const [showQuiz, setShowQuiz] = useState(false);
  function startQuiz() {
    setShowQuiz(true);
    setNewArray([]);
    setResult(0);
  }
  console.log(result);

  return (
    <>
      {!showQuiz ? (
        <>
          <h1>JavaScript Quiz</h1>
          <Button
            classname="buttonStart"
            onClick={startQuiz}
            label="Rozpocznij Quiz"
          ></Button>
        </>
      ) : newArray.length < QUESTIONS.length ? (
        <Questionscreen
          QUESTIONS={QUESTIONS[count]}
          handleAnswer={filterQuestions}
        />
      ) : (
        <>
          {result / count >= 0.8 ? (
            <span
              style={{
                color: "green",
                fontSize: "24px ",
                textAlign: "center",
                display: "block",
              }}
            >
              Gratuluję, quiz zaliczony
            </span>
          ) : (
            <span
              style={{
                color: "red",
                fontSize: "24px",
                textAlign: "center",
                display: "block",
              }}
            >
              Niestety,quiz niezaliczony
            </span>
          )}
          <h4 style={{ display: "block", textAlign: "center" }}>
            Twój wynik to {((result / newArray.length) * 100).toFixed(2)}%{" "}
            {result}z {newArray.length} poprawnych odpowiedzi
          </h4>

          {newArray.map((question, index) => (
            <div key={index}>
              <h2>
                Pytanie {index + 1} :{question.question}
              </h2>

              <h4
                style={{
                  fontWeight: "400",
                  color: question.answers[0].isCorrect ? "green" : "red",
                  fontSize: "18px",
                }}
              >
                {" "}
                <span style={{ color: "black", fontWeight: "600" }}>
                  Twoja odpowiedź
                </span>{" "}
                {question.answers[0].text}
              </h4>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Button
              className="buttonStart"
              label={"Zacznij od nowa"}
              onClick={refreshPage}
            ></Button>
          </div>
        </>
      )}
    </>
  );
};

export default App;
