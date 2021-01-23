import { describe } from "riteway";
import { reducer } from "./rejection-reducer.js";
import { addQuestion, removeQuestion, updateQuestionStatus } from "./action-creators";

const createState = (reducer) => (actions) => actions.reduce(reducer, []);

describe("addQuestion()", async (assert) => {
  {
    const questionInput = {
      id: 123,
      timestamp: 1610307303,
      question: `Can I press that button`,
      askee: `Control room manager`,
      status: `Rejected`
    };

    const state = createState(reducer)([addQuestion(questionInput)]);
    const [lastAddedQuestion] = state.slice(-1);

    assert({
      given: "a new question with all arguments",
      should: "add the question to the state",
      actual: lastAddedQuestion,
      expected: questionInput
    });
  }

  {
    const questionInput = {
      question: `Can I press that button`,
      askee: `Control room manager`,
      status: `Rejected`
    };

    const expectedQuestion = {
      id: true,
      timestamp: true,
      question: `Can I press that button`,
      askee: `Control room manager`,
      status: `Rejected`
    };

    const addedQuestion = createState(reducer)([addQuestion(questionInput)])[0];
    const actualQuestion = (({ id, timestamp, question, askee, status } = {}) => ({
      id: id.length === 36,
      timestamp: timestamp <= Date.now(),
      question,
      askee,
      status
    }))(addedQuestion);

    assert({
      given: "a new question",
      should: "add the question to the state",
      actual: actualQuestion,
      expected: expectedQuestion
    });
  }
});

describe("changeQuestionStatus()", async (assert) => {
  {
    const actions = [
      {
        id: 1,
        question: `Can I press that button?`,
        askee: `Control room manager`,
        status: `Rejected`
      }
    ].map(addQuestion);
    const initialState = createState(reducer)(actions);
    const state = reducer(initialState, updateQuestionStatus({ id: initialState[0].id, status: `Accepted` }));

    assert({
      given: "a question id and status",
      should: "update the question status in the state",
      actual: state[0].status,
      expected: `Accepted`
    });
  }
});

describe("removeQuestion()", async (assert) => {
  {
    const questions = [
      {
        id: 1,
        question: `Can I press that button?`,
        askee: `Control room manager`,
        status: `Rejected`
      },
      {
        id: 2,
        question: `Could you pick that up?`,
        askee: `Litterer`,
        status: `Accepted`
      },
      {
        id: 3,
        question: `How about 50% off?`,
        askee: `Store owner`,
        status: `Rejected`
      }
    ];

    const itemToRemoveId = 2;
    const actions = [...questions.map(addQuestion), removeQuestion(itemToRemoveId)];
    const state = createState(reducer)(actions);

    assert({
      given: "the id of a question to remove",
      should: "remove the question from the state",
      actual: !!state.find(({ id }) => id === itemToRemoveId),
      expected: false
    });
  }
});
