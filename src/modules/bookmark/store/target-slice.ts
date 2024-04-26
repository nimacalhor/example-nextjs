import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import {
  addMedia,
  addProfile,
  checkMedia,
  removeMedia,
  checkProfile,
  unCheckMedia,
  removeProfile,
  unCheckProfile,
  switchMediaOverview,
} from "./reducers";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addMedia,
    addProfile,
    checkMedia,
    removeMedia,
    checkProfile,
    unCheckMedia,
    removeProfile,
    unCheckProfile,
    switchMediaOverview,
  },
});

export default bookmarkSlice;
