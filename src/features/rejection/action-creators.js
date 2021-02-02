import { v4 as uuidv4 } from "uuid";

export const addQuestion = ({
  id = uuidv4(),
  timestamp = Date.now(),
  question,
  askee,
  status = "UNANSWERED"
} = {}) => ({
  type: "ADD_QUESTION",
  payload: {
    id,
    timestamp,
    question,
    askee,
    status
  }
});

export const updateQuestionStatus = ({ id, status } = {}) => ({
  type: "UPDATE_QUESTION_STATUS",
  payload: {
    id,
    status
  }
});

export const removeQuestion = (id) => ({
  type: "REMOVE_QUESTION",
  payload: {
    id
  }
});
