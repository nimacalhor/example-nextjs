// dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getSetting from "../api/getSetting"; // replace with your API module or function
import initialState from "./initial-state";

export const fetchSetting = createAsyncThunk(
  "setting/fetchSetting",
  async () => {
    const { data } = await getSetting();
    return data;
  }
);

const dataSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addstatus(fetchSetting.pending, (state) => {
        state.status = "loading";
      })
      .addstatus(fetchSetting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.setting = action.payload;
      })
      .addstatus(fetchSetting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "";
      });
  },
});

export default dataSlice;
