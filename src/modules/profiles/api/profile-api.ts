import { ApiRType, Pagination } from "@global/types/global-types";
import {
  Profile,
  ProfileDetail,
  ProfileDetailResponse,
  ProfileListResponse,
} from "../types/profile-types";
import { cache } from "react";
import axios from "@global/lib/axios";
import { formatPaginationQuery } from "@global/utils/string-utils";
import { handleApiError } from "@global/utils/error-utils";

export const getProfileList = cache(async function (
  pagination: Pagination,
  query?: string
): Promise<ApiRType<Profile[]>> {
  try {
    const { data: response } = await axios.get<ProfileListResponse>(
      `/profiles?${formatPaginationQuery(pagination)}${
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
    return handleApiError<Profile[]>(error);
  }
});

export const getProfile = cache(async function (
  id: string
): Promise<ApiRType<ProfileDetail>> {
  try {
    const { data: response } = await axios.get<ProfileDetailResponse>(
      `/profiles/${id}`
    );
    return {
      ok: true,
      message: null,
      data: response.data.profile,
    };
  } catch (error) {
    return handleApiError<ProfileDetail>(error);
  }
});
