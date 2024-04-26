import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { switchMode, setAccount } from "./reducers";

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    switchMode,
    setAccount,
  },
});

export default accountSlice;
