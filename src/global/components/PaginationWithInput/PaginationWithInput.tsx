"use client";
import { useRouter } from "next/navigation";
import Pagination from "@global/components/Pagination";
import { ResPagination } from "@global/types/global-types";
import PaginationInput from "@global/components/PaginationInput";

type PaginationWithInputProps = {
  paginationData?: ResPagination;
  basePath: string;
  className?: string;
};

function PaginationWithInput({
  paginationData,
  basePath,
  className,
}: PaginationWithInputProps) {
  const router = useRouter();

  if (!paginationData || !basePath) return null;

  const { limit, totalDocs, totalPages } = paginationData;
  if (limit === totalDocs) return null;
  if (totalPages <= 1) return null;

  return (
    <>
      <div className={className}>
        <Pagination
          onError={paginationErrorHandler}
          onPageChange={pageChangeHandler}
          paginationData={paginationData}
        />
        <br />
        <PaginationInput
          paginationData={paginationData}
          onPageChange={pageChangeHandler}
        />
      </div>
    </>
  );

  function pageChangeHandler(page: number) {
    router.push(`/${basePath}?page=${page}&per_page=${limit}`);
  }

  function paginationErrorHandler(pagination: ResPagination) {
    const { page, limit } = pagination;
    router.push(
      `/${basePath}?page=${page - 1 || 1}&per_page=${limit}`
    );
  }
}

export default PaginationWithInput;
