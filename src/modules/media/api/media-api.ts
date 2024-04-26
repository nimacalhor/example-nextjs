import { handleApiError } from "@global/utils/error-utils";
import axios from "@global/lib/axios";
import type { ApiRType, Pagination } from "@global/types/global-types";
import { formatPaginationQuery } from "@global/utils/string-utils";
import type {
  Media,
  MediaDetail,
  MediaDetailResponse,
  MediaListResponse,
} from "../types/media-types";
import { cache } from "react";
  
export const getMediaList = cache(async function (
  pagination: Pagination,
  query?: string
): Promise<ApiRType<Media[]>> {
  try {
    const { data: response } = await axios.get<MediaListResponse>(
      `/media?${formatPaginationQuery(pagination)}${
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
    return handleApiError<Media[]>(error);
  }
});

export const getMedia = cache(async function (
  id: string
): Promise<ApiRType<MediaDetail>> {
  try {
    const { data: response } = await axios.get<MediaDetailResponse>(
      `/media/${id}`
    );
    return {
      ok: true,
      message: null,
      data: response.data.media,
    };
  } catch (error) {
    return handleApiError<MediaDetail>(error);
  }
});
