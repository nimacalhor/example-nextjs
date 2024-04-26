import { getUniqueStringByDate } from "@global/utils/string-utils";
import {
  OPERATORS_ARR_ENG,
  TYPES_ARR_ENG,
} from "../constants/operators.constants";
import {
  AdvancedSearchState,
  SearchItem
} from "../types/search-item-types";

export function createEmptySearchItem(): SearchItem {
  return {
    id: getUniqueStringByDate(),
    queryType: "string",
    allowedOperators: OPERATORS_ARR_ENG,
    allowedTypes: TYPES_ARR_ENG,
  };
}

export function searchItemsToParams(
  inputArray: Omit<AdvancedSearchState, "dialog">
): string {
  return encodeURIComponent(JSON.stringify(inputArray));
}
