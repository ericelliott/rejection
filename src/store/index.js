import { createStore } from "redux";
import { reducer } from "../features/rejection/rejection-reducer";
import { loadState, saveState } from "./localStorage";

const questionData = [
  {
    id: "1",
    question: "Could you give me some sound advice?",
    timestamp: "2020-01-22",
    askee: "Me",
    status: "Accepted"
  },
  {
    id: "2",
    question: "Will you buy me dinner?",
    timestamp: "2020-01-16",
    askee: "You",
    status: "Unanswered"
  },
  {
    id: "3",
    question: "Can I have a week off?",
    timestamp: "2020-01-14",
    askee: "Dad",
    status: "Rejected"
  },
  {
    id: "4",
    question: "Can I have a raise?",
    timestamp: "2020-01-03",
    askee: "Mom",
    status: "Rejected"
  }
];

export const store = createStore(reducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});
