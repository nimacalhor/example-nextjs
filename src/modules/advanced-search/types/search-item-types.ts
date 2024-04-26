export type AdvancedSearchOperators =
  | "برابر"
  | "نابرابر"
  | "بزرگتر"
  | "کوچکتر"
  | "شامل";

export type AdvancedSearchTypes = "متن" | "عدد" | "تاریخ";

export type AdvancedSearchOperatorsEng = "eq" | "neq" | "gt" | "lt" | "regex";
export type AdvancedSearchTypesEng = "string" | "number" | "date";

export type SearchItem = {
  order?: number;
  operator?: AdvancedSearchOperatorsEng;
  queryKey?: string;
  queryValue?: string;
  queryType?: AdvancedSearchTypesEng;
  id?: string;
  isFirst?: boolean;
  allowedOperators: string[];
  allowedTypes: string[];
};

export type AdvancedSearchState = {
  items: SearchItem[];
  condition: "AND" | "OR";
  dialog: boolean;
};

/*
            d: "eq" | "neq" | "gt" | "lt" | "regex";
            order: number;
            queryKey: string;
            queryValue: string;
            queryType: "string" | "number" | "date";
            allowedOperators: string[];
            allowedTypes: string[];
*/
