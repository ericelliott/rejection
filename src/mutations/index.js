import { gql } from "@apollo/client";

export const ADD_QUESTION = gql`
  mutation addQuestion($data: QuestionInput!) {
    createQuestion(data: $data) {
      _id
      status
    }
  }
`;

export const UPDATE_QUESTION = gql`
  mutation updateQuestion($id: ID!, $data: QuestionInput!) {
    updateQuestion(id: $id, data: $data) {
      _id
      status
    }
  }
`;
