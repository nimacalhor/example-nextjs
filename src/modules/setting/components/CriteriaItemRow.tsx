"use client";
import React from "react";
import { TableCell, TableRow } from "@ui/table";
import SearchCriteriaEditDialog from "./SearchCriteriaEditDialog";
import { Button } from "@/global/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function CriteriaItemRow({
  allowedOperators,
  allowedTypes,
  _key: key,
}: {
  _key: string;
  allowedOperators: string[];
  allowedTypes: string[];
}) {
  return (
    <TableRow className="hover:bg-inherit">
      <TableCell className="text-center">{key}</TableCell>
      <TableCell className="">
        <div className="text-center flex justify-center flex-wrap gap-2">
          {allowedOperators.map((opr, i) => (
            <span key={i}>{opr}</span>
          ))}
        </div>
      </TableCell>
      <TableCell className="">
        <div className="text-center flex justify-center flex-wrap gap-2">
          {allowedTypes.map((typ, i) => (
            <span key={i}>{typ}</span>
          ))}
        </div>
      </TableCell>
      <TableCell>
        <SearchCriteriaEditDialog>
          <Button className="rounded-full" variant={"secondary"} size={"icon"}>
            <FontAwesomeIcon icon={faPen} />
          </Button>
        </SearchCriteriaEditDialog>
      </TableCell>
    </TableRow>
  );
}
