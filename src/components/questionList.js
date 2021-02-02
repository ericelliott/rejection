import Question from "./question";

export default function QuestionList({ questions, handleStatusClick }) {
  return (
    <div className="question-container">
      <div>
        <ul>
          {questions &&
            questions.map((question) => {
              return (
                <li key={question._id}>
                  <Question {...question} handleStatusClick={handleStatusClick(question)} />
                </li>
              );
            })}
        </ul>
      </div>
      <style jsx>{`
        .question-container {
          padding: 2rem;
          padding-top: 5rem;
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
