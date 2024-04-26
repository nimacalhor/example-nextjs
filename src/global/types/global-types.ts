export type Pagination = {
  per_page: number;
  page: number;
};

export interface ErrorResponse {
  ok: boolean;
  status: string;
  data: Data;
  errorDetails: any;
}

export interface Data {
  errorMessage: string;
  errorCode: number;
}

export type ApiRType<DType> = {
  ok: boolean;
  message: string | null;
  data: DType | null;
  pagination?: ResPagination
};

/*
{
  ok: true,
  message: null,
  data: Something,
  pagination?: ...
}
{
  ok: false,
  message: "متن ارور",
  data: null,
  pagination?: undefined
}
*/

export interface ResPagination {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: number;
}