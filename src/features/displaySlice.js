import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    value: "",
    lastOperator: 0,
    formula: "",
    answer: "",
    limit: false,
  },
  reducers: {
    updateDisplayNumber: (state, action) => {
      if (state.answer === "") {
        if (state.value.length === 15) {
          state.limit = true;
        } else if (state.value === "0" && action.payload === "0") {
          state.value = "0";
        } else if (state.lastOperator !== 0) {
          state.lastOperator = 0;
          state.value = action.payload;
          state.formula += action.payload;
        } else if (action.payload === ".") {
          //change nothing
          if (state.value === "") {
            state.value = "0.";
          } else if (/\./.test(state.value)) {
            state.value = `${state.value}`;
            state.formula = `${state.formula}`;
          } else {
            state.value += action.payload;
            state.formula += action.payload;
          }
        } else {
          state.value += action.payload;
          state.formula += action.payload;
        }
      } else {
        state.answer = "";
        state.formula = `${action.payload}`;
        state.lastOperator = 0;
        state.value = `${action.payload}`;
      }
    },
    updateDisplayOperator: (state, action) => {
      if (state.answer === "") {
        if (state.lastOperator === 0) {
          state.formula += action.payload;
          state.value = action.payload;
          state.lastOperator += 1;
        } else if (state.lastOperator === 1 && action.payload === "-") {
          state.formula += action.payload;
          state.lastOperator += 1;
          state.value = action.payload;
        } else if (state.lastOperator === 1 && action.payload !== "-") {
          state.formula = `${state.formula.slice(0, -1)}${action.payload}`;
          state.value = action.payload;
        } else if (state.lastOperator === 2 && action.payload !== "-") {
          state.formula = `${state.formula.slice(0, -2)}${action.payload}`;
          state.lastOperator -= 1;
          state.value = action.payload;
        }
      } else {
        state.formula = `${state.answer}${action.payload}`;
        state.value = action.payload;
        state.answer = "";
        state.lastOperator = 1;
      }
    },
    resetLimit: (state) => {
      state.limit = false;
    },
    equalsTo: (state) => {
      if (state.lastOperator === 0 && state.answer === "") {
        state.answer =
          Math.round(1e12 * eval(`${state.formula}`.replace("--", "+"))) / 1e12;
        state.formula = `${state.formula}=${state.answer}`;
        state.value = state.answer.toString();
      } else if (state.lastOperator !== 0 && state.answer === "") {
        state.answer =
          Math.round(
            1e12 *
              eval(
                `${state.formula.slice(0, -state.lastOperator)}`.replace(
                  "--",
                  "+"
                )
              )
          ) / 1e12;
        state.formula = `${state.formula.slice(0, -state.lastOperator)}=${
          state.answer
        }`;
        state.value = state.answer.toString();
        state.lastOperator = 0;
      }
    },
    clearAll: (state) => {
      state.answer = "";
      state.formula = "";
      state.lastOperator = 0;
      state.value = "";
    },
  },
});

export const {
  updateDisplayNumber,
  updateDisplayOperator,
  resetLimit,
  equalsTo,
  clearAll,
} = displaySlice.actions;

export default displaySlice.reducer;
