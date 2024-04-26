"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";
import { RootState } from "@/global/store";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { getSearchItemById } from "../util/getSearchItemById";

export function SearchItemQueryKeySelect({
  onValueChange,
  value,
}: {
  onValueChange: (queryValue: {
    key: string;
    allowedTypes: string[];
    allowedOperators: string[];
  }) => void;
  value?: string;
}) {
  console.log({ value });
  const { setting, status } = useSelector((state: RootState) => state.setting);

  const pathname = usePathname();

  if (status === "loading" || status === "failed" || !setting)
    return (
      <>
        <Errorstatus></Errorstatus>
      </>
    );

  const { queryKeys } = setting;
  const items =
    pathname === "/media"
      ? queryKeys.media
      : pathname === "/profiles"
      ? queryKeys.profile
      : queryKeys.comment;

  return (
    <Select value={value} onValueChange={selectChangeHandler}>
      <SelectTrigger value={value}>
        <SelectValue placeholder="کلید کوئری">
          <p>{value + " "}</p>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {items.map(({ key, allowedOperators, allowedTypes }, i) => (
          <SelectItem key={i} value={i + ""}>
            {key}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  function selectChangeHandler(selectedIndex: string) {
    const index = parseInt(selectedIndex);
    onValueChange(items[index]);
  }
}

function Errorstatus() {
  return (
    <div className="flex justify-center items-start flex-col min-w-[150px]">
      <span className="text-sm text-destructive">
        اطلاعات تنظیمات به درستی دریافت نشد
      </span>
      <span className="text-xs text-destructive">لطفا صفحه را رفرش کنید</span>
    </div>
  );
}
