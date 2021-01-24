export default function TotalScore({ score }) {
  return (
    <div className="total-score">
      <div className="total">{score}</div>
      <div className="divider">&nbsp;</div>
      <div className="target">500</div>

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
      `}</style>
    </div>
  );
}
