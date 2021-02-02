import { useMutation, useQuery } from "@apollo/client";
import { QUESTIONS } from "../queries/";
import { UPDATE_QUESTION } from "../mutations/";
import QuestionList from "./questionList";

export default function QuestionContainer() {
  const { data } = useQuery(QUESTIONS);
  const [updateQuestion] = useMutation(UPDATE_QUESTION);

  const handleStatusClick = (question) => ({ status }) => {
    // todo: use factory function for this.
    const updatedQuestion = { ...question, status };
    delete updatedQuestion.__typename;
    delete updatedQuestion._id;

    updateQuestion({
      variables: { id: question._id, data: updatedQuestion },
      optimisticResponse: {
        __typename: "Mutation",
        updateQuestion: {
          _id: question._id,
          __typename: "Question",
          status: updatedQuestion.status
        }
      }
    });
  };

  const questions = data ? [...data.questions.data].reverse() : [];
  return <QuestionList questions={questions} handleStatusClick={handleStatusClick} />;
}
