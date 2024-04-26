import { AdvancedSearchState } from "../types/search-item-types";

export function getSearchItemById(id: string, state: AdvancedSearchState) {
  const item = state.items.find((itm) => itm.id === id);
  return item
}
