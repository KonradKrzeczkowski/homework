import Button from "./Button";

const Questionscreen = ({ QUESTIONS, handleAnswer }) => {
  return (
    <div className="divQuiz">
      <h1 style={{ color: "blue" }}>
        Pytanie {QUESTIONS.id} : {QUESTIONS.text}
      </h1>
      {QUESTIONS.answers.map((answer, index) => (
        <Button
          key={answer.text}
          label={answer.text}
          onClick={() => handleAnswer(answer.text)}
        ></Button>
      ))}
    </div>
  );
};
export default Questionscreen;
