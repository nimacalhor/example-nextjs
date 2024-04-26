import React from "react";
import {
  Pagination as ChadPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@ui/pagination";
import type { ResPagination } from "@global/types/global-types";
import { getPaginateGroups } from "./helper";

type PaginationProps = {
  paginationData?: ResPagination;
  onPageChange?: (newPage: number) => void;
  onError?: (paginationData: ResPagination) => void;
};

function Pagination({
  paginationData,
  onPageChange,
  onError,
}: PaginationProps) {
  if (!paginationData) return null;

  const { hasNextPage, hasPrevPage, nextPage, page, prevPage, totalPages } =
    paginationData;

  let group1: number[] = [],
    group2: number[] = [],
    group3: number[] = [];

  try {
    [group1, group2, group3] = getPaginateGroups(page, totalPages);
  } catch (error) {
    if (onError) onError(paginationData);
    return null;
  }

  return (
    <>
      <ChadPagination>
        <PaginationContent>
          {hasPrevPage && (
            <PaginationPrevious onClick={handlePageClick(prevPage)} />
          )}
          {group1.map((n, i) => (
            <PaginationLink
              onClick={handlePageClick(n)}
              key={i}
              isActive={n === page}
            >
              {n}
            </PaginationLink>
          ))}
          {group2 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {group2.map((n, i) => (
                <PaginationLink
                  onClick={handlePageClick(n)}
                  key={i}
                  isActive={n === page}
                >
                  {n}
                </PaginationLink>
              ))}
            </>
          )}
          {group3 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {group3.map((n, i) => (
                <PaginationLink
                  onClick={handlePageClick(n)}
                  key={i}
                  isActive={n === page}
                >
                  {n}
                </PaginationLink>
              ))}
            </>
          )}
          {hasNextPage && (
            <PaginationNext onClick={handlePageClick(nextPage)} />
          )}
        </PaginationContent>
      </ChadPagination>
    </>
  );

  function handlePageClick(pageNumber: number) {
    return () => (onPageChange ? onPageChange(pageNumber) : null);
  }
}

export default Pagination;
