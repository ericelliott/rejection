import Head from "next/head";
import QuestionContainer from "../../src/components/questionContainer";
import TotalScore from "../../src/components/totalScore";
import AddQuestion from "../../src/components/addQuestion";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../src/features/rejection/action-creators";
const mapStatusToScore = (status) => (status === "Rejected" ? 100 : status === "Accepted" ? 10 : 0);

export default function Questions() {
  const dispatch = useDispatch();
  const questions = useSelector((questions) => questions);

  const handleAdd = ({ text }) => {
    dispatch(addQuestion({ question: text, askee: "me" }));
  };

  return (
    <div className="question-container">
      <Head>
        <title>Questions</title>
      </Head>

      <TotalScore score={questions.reduce((a, c) => a + mapStatusToScore(c.status), 0)} />

      <AddQuestion handleAdd={handleAdd} />

      <QuestionContainer questions={questions} />
    </div>
  );
}
