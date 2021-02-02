import { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUESTIONS } from "../queries/";
import { ADD_QUESTION } from "../mutations";

const createQuestion = ({ timestamp = Date.now(), askee, question, status = "UNANSWERED" }) => ({
  timestamp,
  askee,
  question,
  status
});

export default function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [addQuestion] = useMutation(ADD_QUESTION, {
    refetchQueries: [{ query: QUESTIONS }]
  });

  return (
    <div className="add-question">
      <input
        type="text"
        value={question}
        placeholder="..."
        onChange={({ target }) => setQuestion(target.value)}
        onKeyPress={({ key, target }) => {
          if (key === "Enter") {
            addQuestion({
              variables: {
                data: createQuestion({ askee: "someone", question: target.value })
              }
            });
            setQuestion("");
          }
        }}
      />
      <style jsx>{`
        .add-question {
          padding: 2rem;
        }
        input[type="text"] {
          border: 0;
          border-bottom: 1px solid gray;
          width: 50%;
          outline: none;
          font-size: 3em;
          font-weight: bold;
          line-height: 1.5;
          margin-bottom: 0.25em;
          color: salmon;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }
        ::placeholder {
          color: lightgrey;
        }
      `}</style>
    </div>
  );
}
