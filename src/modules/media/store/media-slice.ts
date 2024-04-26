import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { switchNsfw } from "./reducers";

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: { switchNsfw },
});

export default mediaSlice;
