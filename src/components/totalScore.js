export default function TotalScore({ score }) {
  return (
    <div className="total-score">
      <div>
        <div className="total">{score}</div>
        <div className="divider">&nbsp;</div>
        <div className="target">500</div>
        <span className="label">weekly target</span>
      </div>

      <style jsx>{`
        .total-score {
          position: fixed;
          top: 1rem;
          right: 2rem;
          font-size: 6em;
          font-weight: bold;
          margin-bottom: 0.25em;
          color: salmon;
          line-height: 1;
          text-align: center;
        }
        div {
          display: inline-block;
        }
        .divider {
          width: 1px;
          border-right: 1px solid black;
          transform: rotate(15deg);
          margin-left: 0.25em;
          margin-right: 0.25em;
          height: 1.4em;
          line-height: 1.3;
        }
        .label {
          display: block;
          font-size: 1rem;
          font-weight: normal;
          color: black;
          text-align: right;
          margin-top: -0.75em;
          padding-right: 0.3em;
        }
      `}</style>
    </div>
  );
}
