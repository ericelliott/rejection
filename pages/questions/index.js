import { useQuery } from "@apollo/client";
import Head from "next/head";
import QuestionContainer from "../../src/components/questionContainer";
import TotalScore from "../../src/components/totalScore";
import AddQuestion from "../../src/components/addQuestion";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../src/features/rejection/action-creators";
import { QUESTIONS } from "../../src/queries";

const mapStatusToScore = (status) => (status === "REJECTED" ? 100 : status === "ACCEPTED" ? 10 : 0);

export default function Questions() {
  const { loading, error, data } = useQuery(QUESTIONS);
  const dispatch = useDispatch();

  return (
    <div className="question-container">
      <Head>
        <title>Questions</title>
      </Head>

      {data && <TotalScore score={data.questions.data.reduce((a, c) => a + mapStatusToScore(c.status), 0)} />}

      <AddQuestion />

      {data && <QuestionContainer questions={data.questions.data} />}
    </div>
  );
}
