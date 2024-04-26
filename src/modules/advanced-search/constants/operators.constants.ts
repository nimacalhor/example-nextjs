import { number } from "zod";
import {
  AdvancedSearchOperators,
  AdvancedSearchOperatorsEng,
  AdvancedSearchTypes,
  AdvancedSearchTypesEng,
} from "../types/search-item-types";

export const OPERATORS_ARR: AdvancedSearchOperators[] = [
  "برابر",
  "نابرابر",
  "بزرگتر",
  "کوچکتر",
  "شامل",
];
export const OPERATORS_ARR_ENG: AdvancedSearchOperatorsEng[] = [
  "eq",
  "neq",
  "gt",
  "lt",
  "regex",
];
export const OPERATORS_MAP: { [key: string]: AdvancedSearchOperators } = {
  eq: "برابر",
  neq: "نابرابر",
  lt: "کوچکتر",
  gt: "بزرگتر",
  regex: "شامل",
};
export const TYPES_ARR: AdvancedSearchTypes[] = ["متن", "عدد"];
export const TYPES_MAP: { [key: string]: AdvancedSearchTypes } = {
  string: "متن",
  number: "عدد",
};
export const TYPES_ARR_ENG: AdvancedSearchTypesEng[] = ["string", "number"];
