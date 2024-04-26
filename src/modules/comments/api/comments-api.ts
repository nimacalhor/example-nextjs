import { handleApiError } from "@global/utils/error-utils";
import axios from "@global/lib/axios";
import type { ApiRType, Pagination } from "@global/types/global-types";
import { formatPaginationQuery } from "@global/utils/string-utils";
import type {
  Comment,
  CommentDetail,
  CommentDetailResponse,
  CommentListResponse,
} from "../types/comments-types";
import { cache } from "react";

export const getCommentsList = cache(async function (
  pagination: Pagination,
  query?: string
): Promise<ApiRType<Comment[]>> {
  try {
    const { data: response } = await axios.get<CommentListResponse>(
      `/comments?${formatPaginationQuery(pagination)}${
        query ? `&query=${query}` : ""
      }`
    );
    return {
      ok: true,
      message: null,
      data: response.data,
      pagination: response.pagination,
    };
  } catch (error) {
    return handleApiError<Comment[]>(error);
  }
});

export const getComments = cache(async function (
  id: string
): Promise<ApiRType<CommentDetail>> {
  try {
    const { data: response } = await axios.get<CommentDetailResponse>(
      `/comments/${id}`
    );
    return {
      ok: true,
      message: null,
      data: response.data.comment,
    };
  } catch (error) {
    return handleApiError<CommentDetail>(error);
  }
});
