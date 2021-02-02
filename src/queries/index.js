import { gql } from "@apollo/client";

export const QUESTIONS = gql`
  query GetQuestions {
    questions {
      data {
        _id
        timestamp
        question
        askee
        status
      }
    }
  }
`;
