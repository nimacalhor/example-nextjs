import { OPERATORS_ARR, TYPES_ARR } from "../constants/operators.constants";
import { AdvancedSearchState } from "../types/search-item-types";

const initialState: AdvancedSearchState = {
  items: [],
  condition: "OR",
  dialog: false,
};

export default initialState;
