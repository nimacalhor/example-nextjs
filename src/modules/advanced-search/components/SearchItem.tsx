"use client";
import { Badge } from "@ui/badge";
import { Input } from "@ui/input";
import { actions } from "../store";
import React, { ChangeEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@ui/button";
import { cn } from "@global/utils/chadcn-utils";
import {
  AdvancedSearchOperators,
  AdvancedSearchOperatorsEng,
  AdvancedSearchTypesEng,
  SearchItem,
} from "../types/search-item-types";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";
import {
  OPERATORS_ARR,
  OPERATORS_ARR_ENG,
  OPERATORS_MAP,
  TYPES_ARR,
  TYPES_ARR_ENG,
  TYPES_MAP,
} from "../constants/operators.constants";
import { SearchItemQueryKeySelect } from "./SearchItemQueryKeySelect";
import { RootState } from "@/global/store";

type SearchItemsProps = {
  onDrop: React.DragEventHandler<HTMLLIElement>;
  onDragStart: React.DragEventHandler<HTMLLIElement>;
  item: SearchItem;
  isFirst: boolean;
};

const durationInMs = 300;
const durationClass = `duration-300`;
const slideAnimationClasses = [
  `translate-x-full`,
  "transition-transform",
  "ease-in",
  durationClass,
];

function SearchItems({ onDrop, onDragStart, item, isFirst }: SearchItemsProps) {
  const dispatch = useDispatch();
  const itemElRef = useRef<HTMLLIElement | null>(null);
  const { condition } = useSelector((state: RootState) => state.advancedSearch);
  const { id } = item;

  useEffect(() => {
    if (!id) return;
    dispatch(actions.setIsFirst({ isFirst, id }));
  }, [dispatch, isFirst, id]);
  if (!id) return null;

  return (
    <>
      <li
        ref={itemElRef}
        draggable
        onDragStart={onDragStart}
        onDragOver={(event) => event.preventDefault()}
        onDrop={onDrop}
        className={cn(
          "active:bg-muted border-border border p-3 rounded-lg flex justify-between items-center gap-4 flex-wrap md:flex-nowrap relative ",
          durationClass
        )}
      >
        <FontAwesomeIcon icon={faBars} className="hover:cursor-pointer" />
        {!isFirst && (
          <Badge
            onClick={getBadgeClickHandler}
            className={cn("hover:cursor-pointer hover:bg-muted tracking-wide")}
            variant={"secondary"}
          >
            {condition}
          </Badge>
        )}
        <SearchItemQueryKeySelect
          value={item.queryKey}
          onValueChange={queryKeyChangeHandler}
        ></SearchItemQueryKeySelect>
        <Select value={item.operator} onValueChange={operatorChangeHandler}>
          <SelectTrigger>
            <SelectValue placeholder="مقایسه" />
          </SelectTrigger>
          <SelectContent>
            {item.allowedOperators.map((opt, i) => (
              <SelectItem value={opt} key={i}>
                {OPERATORS_MAP[opt]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={item.queryType} onValueChange={typeChangeHandler}>
          <SelectTrigger>
            <SelectValue placeholder="نوع دیتا" />
          </SelectTrigger>
          <SelectContent>
            {item.allowedTypes.map((tp, i) => (
              <SelectItem value={tp} key={i}>
                {TYPES_MAP[tp]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          value={item.queryValue}
          onChange={searchValueChangeHandler}
          placeholder="متن جستجو"
        />
        <Button
          size={"icon"}
          className="p-4 bg-destructive/80"
          variant={"destructive"}
          onClick={getRemoveItemCB(id)}
        >
          <FontAwesomeIcon icon={faX} />
        </Button>
      </li>
    </>
  );

  function getBadgeClickHandler() {
    dispatch(actions.switchCondition());
  }

  function getRemoveItemCB(itemId: string) {
    return () => {
      //   (slideAnimationClasses);
      itemElRef.current?.classList.add(...slideAnimationClasses);
      setTimeout(() => {
        itemElRef.current?.classList.remove(...slideAnimationClasses);
        dispatch(actions.removeItem({ id: itemId }));
      }, durationInMs + 100);
    };
  }

  function queryKeyChangeHandler({
    allowedOperators,
    allowedTypes,
    key,
  }: {
    key: string;
    allowedOperators: string[];
    allowedTypes: string[];
  }) {
    dispatch(actions.setQueryKey({ id: id as string, queryKey: key }));
    dispatch(
      actions.setAllowedOperators({ allowedOperators, id: id as string })
    );
    dispatch(actions.setAllowedTypes({ allowedTypes, id: id as string }));
    dispatch(actions.setOperator({ id: id as string, operator: undefined }));
    dispatch(actions.setQueryType({ id: id as string, queryType: undefined }));
  }

  function operatorChangeHandler(value: AdvancedSearchOperatorsEng) {
    dispatch(actions.setOperator({ id: id as string, operator: value }));
  }
  function typeChangeHandler(value: AdvancedSearchTypesEng) {
    dispatch(actions.setQueryType({ id: id as string, queryType: value }));
  }

  function searchValueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    if (!value) return;
    dispatch(actions.setQueryValue({ id: id as string, queryValue: value }));
  }
}

export default SearchItems;
