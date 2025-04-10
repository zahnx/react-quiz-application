import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { question, newAnswer, answer } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          key={option}
          disabled={answer !== null}
          onClick={() => newAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
