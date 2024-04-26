import { PayloadAction } from "@reduxjs/toolkit";
import {
  AdvancedSearchOperators,
  AdvancedSearchOperatorsEng,
  AdvancedSearchState,
  AdvancedSearchTypesEng,
  SearchItem,
} from "../types/search-item-types";

export function reorderItems(
  state: AdvancedSearchState,
  action: PayloadAction<{ items: SearchItem[] }>
) {
  const { items } = action.payload;
  state.items = items;
}

export function addItem(
  state: AdvancedSearchState,
  action: PayloadAction<{ item: SearchItem }>
) {
  const { item } = action.payload;
  if (state.items.length > 1) item.isFirst = true;
  state.items = [...state.items, item];
}

export function addItems(
  state: AdvancedSearchState,
  action: PayloadAction<{ items: SearchItem[] }>
) {
  const { items } = action.payload;
  state.items = [...state.items, ...items];
}

export function setItems(
  state: AdvancedSearchState,
  action: PayloadAction<{ items: SearchItem[] }>
) {
  const { items } = action.payload;
  state.items = items;
}

export function setCondition(
  state: AdvancedSearchState,
  action: PayloadAction<{ condition: "AND" | "OR" }>
) {
  state.condition = action.payload.condition
}

export function removeItem(
  state: AdvancedSearchState,
  action: PayloadAction<{ id: string }>
) {
  const { id } = action.payload;
  const newItems = state.items.filter((item) => item.id !== id);
  state.items = newItems;
}

export function switchCondition(state: AdvancedSearchState) {
  state.condition = state.condition === "AND" ? "OR" : "AND";
}

export function setOperator(
  state: AdvancedSearchState,
  action: PayloadAction<{ operator?: AdvancedSearchOperatorsEng; id: string }>
) {
  const { operator, id } = action.payload;
  const newItems = state.items.map((itm) => {
    if (itm.id !== id) return itm;
    return { ...itm, operator };
  });

  state.items = newItems;
}

export function setQueryKey(
  state: AdvancedSearchState,
  action: PayloadAction<{ queryKey: string; id: string }>
) {
  const { queryKey, id } = action.payload;
  const newItems = state.items.map((itm) => {
    if (itm.id !== id) return itm;
    return { ...itm, queryKey };
  });

  state.items = newItems;
}

export function setQueryValue(
  state: AdvancedSearchState,
  action: PayloadAction<{ queryValue: string; id: string }>
) {
  const { queryValue, id } = action.payload;
  const newItems = state.items.map((itm) => {
    if (itm.id !== id) return itm;
    return { ...itm, queryValue };
  });

  state.items = newItems;
}

export function setIsFirst(
  state: AdvancedSearchState,
  action: PayloadAction<{ isFirst: boolean; id: string }>
) {
  const { id, isFirst } = action.payload;
  const newItems = state.items.map((itm) => {
    if (itm.id !== id) return itm;
    return { ...itm, isFirst };
  });

  state.items = newItems;
}

export function removeItems(state: AdvancedSearchState) {
  state.condition = "AND";
  state.items = [];
}

export function setQueryType(
  state: AdvancedSearchState,
  action: PayloadAction<{ queryType?: AdvancedSearchTypesEng; id: string }>
) {
  const { queryType, id } = action.payload;
  const newItems = state.items.map((itm) => {
    if (itm.id !== id) return itm;
    return { ...itm, queryType };
  });

  state.items = newItems;
}

export function setDialog(
  state: AdvancedSearchState,
  action: PayloadAction<{ isOpen: boolean }>
) {
  const { isOpen } = action.payload;
  state.dialog = isOpen;
}

export function setAllowedOperators(
  state: AdvancedSearchState,
  action: PayloadAction<{ allowedOperators: string[]; id: string }>
) {
  const { allowedOperators, id } = action.payload;
  const newItems = state.items.map((itm) => {
    if (itm.id !== id) return itm;
    return { ...itm, allowedOperators };
  });
  state.items = newItems;
}

export function setAllowedTypes(
  state: AdvancedSearchState,
  action: PayloadAction<{ allowedTypes: string[]; id: string }>
) {
  const { allowedTypes, id } = action.payload;
  const newItems = state.items.map((itm) => {
    if (itm.id !== id) return itm;
    return { ...itm, allowedTypes };
  });
  state.items = newItems;
}
