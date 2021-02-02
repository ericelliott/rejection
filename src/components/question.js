import { useState } from "react";

export default function Question({ id, askee, handleStatusClick, timestamp, question, status, score }) {
  const [isEditing, setisEditing] = useState(false);

  const handleNameClick = () => setisEditing(!isEditing);

  const statuses = [
    { name: "accepted", value: "ACCEPTED" },
    { name: "rejected", value: "REJECTED" },
    { name: "unanswered", value: "UNANSWERED" }
  ];

  return (
    <div className={`question ${status.toLowerCase()}`}>
      <div className="name" onClick={handleNameClick}>
        {question}
      </div>
      <div className="details">
        <div className={`edit ${isEditing ? "active" : ""}`}>
          <div className="status">
            <ul>
              {statuses.map(({ name, value }) => (
                <li
                  key={name}
                  className={`${name} ${status === value ? "active" : ""}`}
                  onClick={() => handleStatusClick({ id, status: value.toUpperCase() })}
                >
                  {value.toLowerCase()}
                </li>
              ))}
            </ul>
          </div>
          <div className="askee">{askee}</div>
          <div className="divider">&bull;</div>
          <div className="timestamp">{new Date(timestamp).toLocaleDateString("en-GB")}</div>
        </div>
      </div>
      <div className="score">{score > 0 ? `+${score}` : ""}</div>

      <style jsx>
        {`
          .question {
            position: relative;
            margin-bottom: 1em;
          }
          .name {
            font-size: 3em;
            font-weight: bold;
            line-height: 1.2;
            cursor: pointer;
            user-select: none;
          }
          .question.accepted .name {
            color: #95d7b1;
          }
          .question.rejected .name {
            color: salmon;
          }
          .question.unanswered .name {
            color: lightgrey;
          }
          .score {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 3em;
            font-weight: bold;
            color: salmon;
          }
          .edit {
            display: none;
          }
          .edit.active {
            display: block;
          }
          .status,
          .timestamp,
          .askee,
          .divider {
            display: inline-block;
            margin-right: 0.25em;
          }
          .timestamp,
          .askee,
          .divider {
            // color: lightgrey;
          }
          .timestamp {
            color: black;
          }
          .askee {
            // margin-right: 0.5em;
          }
          .status {
            margin-left: 1em;
            margin-right: 4em;
          }
          .status ul {
            list-style: none;
            padding: 0;
          }
          .status ul li {
            display: inline-block;
            cursor: pointer;
            list-style: none;
            margin-right: 0.5em;
            padding-bottom: 2px;
            user-select: none;
            text-transform: capitalize;
          }
          .status ul li:hover,
          .status ul li.active {
            border-bottom: 2px solid black;
            padding-bottom: 0;
          }
          .status ul li.accepted:hover,
          .status ul li.accepted.active {
            border-color: #95d7b1;
          }
          .status ul li.rejected:hover,
          .status ul li.rejected.active {
            border-color: salmon;
          }
          .status ul li.unanswered:hover,
          .status ul li.unanswered.active {
            border-color: lightgrey;
          }
        `}
      </style>
    </div>
  );
}
