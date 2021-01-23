export default function AddQuestion({ handleAdd }) {
  return (
    <div className="add-question">
      <input
        type="text"
        onKeyPress={({ key, target }) => {
          key === "Enter" && handleAdd({ text: target.value });
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
          line-height: 1.2;
          margin-bottom: 0.25em;
          color: salmon;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }
      `}</style>
    </div>
  );
}
