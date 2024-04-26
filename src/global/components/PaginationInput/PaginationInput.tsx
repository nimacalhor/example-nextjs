"use client";
import React, { useRef } from "react";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ResPagination } from "@global/types/global-types";

type PaginationInputProps = {
  paginationData?: ResPagination;
  onPageChange: (page: number) => void;
};

function PaginationInput({
  paginationData,
  onPageChange,
}: PaginationInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  if (!paginationData) return null;
  const { totalPages, page } = paginationData;

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <Button
          variant={"secondary"}
          onClick={changePageHandler}
          className="flex justify-between items-center w-fit sm:w-28 font-light"
        >
          <FontAwesomeIcon icon={faChevronRight} />
          <span className="hidden sm:inline-block">تغییر صفحه</span>
        </Button>
        <Input
          min={1}
          type="number"
          ref={inputRef}
          className="w-28"
          max={totalPages}
          placeholder="شماره صفحه"
        />
      </div>
    </>
  );

  function changePageHandler() {
    const value = inputRef.current?.value;
    if (!value) return;
    const nValue = Number(value);
    if (nValue > totalPages) return;
    onPageChange(nValue);
  }
}

export default PaginationInput;
