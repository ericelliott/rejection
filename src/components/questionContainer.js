import { useDispatch } from "react-redux";

import { updateQuestionStatus } from "../features/rejection/action-creators";
import Question from "./question";

const mapStatusToScore = (status) => (status === "Rejected" ? 100 : status === "Accepted" ? 10 : 0);

export default function QuestionContainer({ questions }) {
  const dispatch = useDispatch();

  const handleStatusClick = ({ id, status }) => {
    dispatch(updateQuestionStatus({ id, status }));
  };

  return (
    <div className="question-container">
      <div>
        <ul>
          {questions.map((question, key) => {
            return (
              <li key={key}>
                <Question
                  handleStatusClick={handleStatusClick}
                  {...question}
                  score={mapStatusToScore(question.status)}
                />
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
