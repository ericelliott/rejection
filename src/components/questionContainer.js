import Question from "./question";

export default function QuestionContainer({ questions }) {
  return (
    <div className="question-container">
      <div>
        <ul>
          {questions.map((question, key) => (
            <li key={key}>
              <Question {...question} />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .question-container {
          // margin-top: 10em;
        }
        .question-container {
          padding: 2rem;
        }
        ul {
          padding: 0;
          list-style-type: none;
        }
        ul li {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
