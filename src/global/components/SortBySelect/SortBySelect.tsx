"use client";
import React, { useId } from "react";
import { Label } from "@ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";

type SortBySelectProps = {};

function SortBySelect({}: SortBySelectProps) {
  const id = useId();

  return (
    <>
      <div className="select-none flex justify-start items-center gap-2">
        <Label htmlFor={id}>
          <FontAwesomeIcon icon={faArrowDownWideShort} className="w-5 h-5 hidden sm:inline-block" />
        </Label>
        <Select defaultValue="asc">
          <SelectTrigger id={id} className="sm:w-[150px] bg-transparent">
            <SelectValue defaultValue={"asc"} defaultChecked />
          </SelectTrigger>
          <SelectContent defaultChecked defaultValue={"asc"}>
            <SelectItem value="asc">صعودی</SelectItem>
            <SelectItem value="des">نزولی</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default SortBySelect;
