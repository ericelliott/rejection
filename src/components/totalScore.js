export default function TotalScore({ score }) {
  return (
    <div className="total-score">
      {score}
      <style jsx>{`
        .total-score {
          position: fixed;
          top: 1rem;
          right: 2rem;
          font-size: 7.5em;
          font-weight: bold;
          margin-bottom: 0.25em;
          color: salmon;
          line-height: 1;
        }
      `}</style>
    </div>
  );
}
