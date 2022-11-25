import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: { value: 0, currValue: 0, currRes: 0 },
  reducers: {
    changeNum(state, action: PayloadAction<number>) {
        console.log(action)
      state.value = action.payload;
    },
  },
});

export const { changeNum } = calculatorSlice.actions;
export default calculatorSlice.reducer;
