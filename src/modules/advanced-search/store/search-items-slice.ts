import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import {
  addItem,
  addItems,
  setItems,
  setDialog,
  setIsFirst,
  removeItem,
  setOperator,
  setQueryKey,
  removeItems,
  setQueryType,
  reorderItems,
  setCondition,
  setQueryValue,
  switchCondition,
  setAllowedTypes,
  setAllowedOperators,
  
} from "./reducers";

const searchItemSlice = createSlice({
  name: "searchItem",
  initialState,
  reducers: {
    addItem,
    addItems,
    setItems,
    setDialog,
    setIsFirst,
    removeItem,
    setOperator,
    setQueryKey,
    removeItems,
    setQueryType,
    reorderItems,
    setCondition,
    setQueryValue,
    switchCondition,
    setAllowedTypes,
    setAllowedOperators,
    
  },
});

export default searchItemSlice;
