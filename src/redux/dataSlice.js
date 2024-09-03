import { createSlice } from "@reduxjs/toolkit";
import data from "../data";
const initialState = {
  value: data,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const selectData = (state) => state.data.value;

export default dataSlice.reducer;
