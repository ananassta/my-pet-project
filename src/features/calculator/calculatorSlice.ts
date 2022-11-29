import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    currValue: 0,
    currRes: 0,
    currOperation: null,
    isPreviousOperation: false,
    needDot: false,
  },
  reducers: {
    changeNum(state, action: PayloadAction<number>) {
      const calculatorNumberField = document.getElementById(
        "calculatorNumberField"
      );
      const amountOfNumbersOnScreen = Math.floor(
        calculatorNumberField.offsetWidth /
          Number(
            window
              .getComputedStyle(calculatorNumberField, null)
              .getPropertyValue("font-size")
              .split("p")[0]
          )
      );
      if (state.isPreviousOperation) {
        state.currValue = action.payload;
        state.isPreviousOperation = false;
      } else if (!(String(state.currValue).split("").length + 1 > amountOfNumbersOnScreen)) {
        if (state.needDot) {
          state.needDot = false;
          state.currValue = Number(state.currValue + "." + action.payload);
        } else {
          state.currValue = Number(state.currValue + "" + action.payload);
        }
      }
    },
    countNum(state, action: PayloadAction<string>) {
      const operation = action.payload;
      const currValue =
        operation === "%" && state.currOperation !== null
          ? (state.currRes * state.currValue) / 100
          : state.currValue;
      if (operation === "+/-") {
        state.currValue *= -1;
      } else {
        state.isPreviousOperation = true;
        state.needDot = false;
        if (operation === "C") {
          state.currRes = 0;
          state.currValue = 0;
          state.currOperation = null;
        } else if (operation === ".") {
          state.isPreviousOperation = false;
          state.needDot = true;
          // state.currValue = Number(state.currValue + "." + 0)
        } else if (state.currOperation === null) {
          if (operation !== "=" && operation !== "%") {
            state.currOperation = operation;
            state.currRes = state.currValue;
          }
        } else if (state.currOperation === "+") {
          state.currRes = state.currRes + currValue;
          state.currValue = state.currRes;
          state.currOperation =
            operation !== "=" && operation !== "%" ? operation : null;
        } else if (state.currOperation === "-") {
          state.currRes = state.currRes - currValue;
          state.currValue = state.currRes;
          state.currOperation =
            operation !== "=" && operation !== "%" ? operation : null;
        } else if (state.currOperation === "x") {
          state.currRes = state.currRes * currValue;
          state.currValue = state.currRes;
          state.currOperation =
            operation !== "=" && operation !== "%" ? operation : null;
        } else if (state.currOperation === "/") {
          state.currRes = state.currRes / currValue;
          state.currValue = state.currRes;
          state.currOperation =
            operation !== "=" && operation !== "%" ? operation : null;
        }
      }
      const calculatorNumberField = document.getElementById(
        "calculatorNumberField"
      );
      const amountOfNumbersOnScreen = Math.floor(
        calculatorNumberField.offsetWidth /
          Number(
            window
              .getComputedStyle(calculatorNumberField, null)
              .getPropertyValue("font-size")
              .split("p")[0]
          )
      );
      if ((String(state.currValue).split("").length + 1 > amountOfNumbersOnScreen)) {
        state.currValue = Number(state.currValue.toFixed(amountOfNumbersOnScreen))
      }
      //   console.log(state.currRes, state.currOperation)
    },
  },
});

export const { changeNum, countNum } = calculatorSlice.actions;
export default calculatorSlice.reducer;
