import { createStore } from "redux";
import { reducer } from "../features/rejection/rejection-reducer";

const questionData = [
  {
    question: "Could you give me some sound advice?",
    timestamp: "2020-01-22",
    askee: "me",
    status: "Accepted"
  },
  {
    question: "Will you buy me dinner?",
    timestamp: "2020-01-16",
    askee: "you",
    status: "Unanswered"
  },
  {
    question: "Can I have a week off?",
    timestamp: "2020-01-14",
    askee: "dad",
    status: "Rejected"
  },
  {
    question: "Can I have a raise?",
    timestamp: "2020-01-03",
    askee: "mom",
    status: "Rejected"
  }
];

export const store = createStore(reducer, questionData);
