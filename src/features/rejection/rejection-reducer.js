import { addQuestion, removeQuestion, updateQuestionStatus } from "./action-creators";
export const reducer = (state = [], { type, payload } = {}) => {
  switch (type) {
    case addQuestion().type:
      return [...state, payload];
    case updateQuestionStatus().type:
      return state.map((question) => {
        return {
          ...question,
          status: question.id === payload.id ? payload.status : question.status
        };
      });
    case removeQuestion().type:
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};
