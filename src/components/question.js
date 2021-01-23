const mapStatusToScore = (status) => (status === "Rejected" ? "+100" : status === "Accepted" ? "+10" : "");

// todo: mapping should move to container layer

export default function Question({ askee, timestamp, question, status }) {
  return (
    <div
      className={`question ${status.toLowerCase()}`}
      onClick={() => {
        alert("edit");
      }}
    >
      <div className="name">{question}</div>
      <div className="details">
        {timestamp} / {askee}
      </div>
      <div className="score">{mapStatusToScore(status)}</div>

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
          }
          .question.accepted .name {
            color: salmon;
          }
          .question.rejected .name {
            color: #95d7b1;
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
        `}
      </style>
    </div>
  );
}
