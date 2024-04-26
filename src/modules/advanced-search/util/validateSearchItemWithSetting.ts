import { QueryKeys } from "@/modules/setting/types/setting-types";
import { AdvancedSearchState } from "../types/search-item-types";
import {
  arraysHaveSameElements,
  isArrayValid,
} from "@/global/utils/array-utils";

export function validateSearchItemWithSetting(
  parsedSearchItems: Omit<AdvancedSearchState, "dialog">,
  queryData: QueryKeys["comment"] | QueryKeys["media"] | QueryKeys["profile"]
) {
  console.log({ queryData });
  const { items } = parsedSearchItems;
  const errors: string[] = [];
  const queryDataCopy = [...queryData];
  console.log({ queryData, queryDataCopy });

  items.forEach((itm, i) => {
    console.log({ queryData, queryDataCopy, itm });

    // itm.queryKey should be in queryData.i.key
    const isKeyValid = [...queryDataCopy]
      .map((queryKey) => queryKey.key)
      .some((key) => key === itm.queryKey);

    console.log({ queryData, queryDataCopy });

    if (!isKeyValid)
      return errors.push(
        `queryKey: ${
          itm.queryKey
        } نامعتبر است. queryKey های معتبر : ${queryDataCopy
          .map((keyData) => keyData.key)
          .join("\n\n ")}`
      );

    // itm.allowedOperators === queryDataCopy.[key].allowedOperators
    const allowedOperators = queryDataCopy.find(
      (q) => q.key === itm.queryKey
    )?.allowedOperators;

    if (!isArrayValid(allowedOperators, true) || !allowedOperators)
      return errors.push(
        `queryKey: ${
          itm.queryKey
        } نامعتبر است. queryKey های معتبر : ${queryDataCopy
          .map((keyData) => keyData.key)
          .join("\n\n ")}`
      );

    const isAllowedOperatorsValid = arraysHaveSameElements(
      itm.allowedOperators,
      allowedOperators
    );

    if (!isAllowedOperatorsValid)
      return errors.push(
        `allowedOperators ایتم ${
          i + 1
        } ام معتبر نیست . مقادیر معتبر : ${allowedOperators.join("\n\n ")}`
      );

    // itm.allowedTypes === queryDataCopy.[key].allowedTypes
    const allowedTypes = queryDataCopy.find(
      (q) => q.key === itm.queryKey
    )?.allowedTypes;

    if (!isArrayValid(allowedTypes, true) || !allowedTypes)
      return errors.push(
        `queryKey: ${
          itm.queryKey
        } نامعتبر است. queryKey های معتبر : ${queryDataCopy
          .map((keyData) => keyData.key)
          .join("\n\n ")}`
      );

    const isAllowedTypesValid = arraysHaveSameElements(
      itm.allowedTypes,
      allowedTypes
    );

    if (!isAllowedTypesValid)
      return errors.push(
        `allowedTypes ایتم ${
          i + 1
        } ام معتبر نیست . مقادیر معتبر : ${allowedTypes.join("\n\n ")}`
      );
  });

  return errors;
}

/*
fName(["a", "b", "c"], ["a", "z", "something", "n", "b", "c"]) // true
fName(["a", "sgd", "c"], ["a", "z", "something", "n", "b", "c"]) // false
fName(["a", "b", "c"], ["a", "z", "something", "n", "c"]) // false
fName(["a", "b", "c"], ["a", "b", "c"]) // true
fName(["a", "b", "c"], ["b", "c"]) // false
fName(["b", "c"], ["c", "b"]) // true
*/
