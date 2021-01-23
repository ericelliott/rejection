import { describe } from "riteway";
import { reducer } from "./rejection-reducer.js";

describe("reducer", async (assert) => {
  assert({
    given: "no arguments",
    should: "return a valid initial state",
    actual: reducer(),
    expected: []
  });
});
