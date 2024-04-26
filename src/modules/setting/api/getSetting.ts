import axios from "@/global/lib/axios";
import { ApiRType } from "@/global/types/global-types";
import { Setting, SettingDetailResponse } from "../types/setting-types";
import { handleApiError } from "@/global/utils/error-utils";
import { cache } from "react";

async function handler(): Promise<ApiRType<Setting>> {
  try {
    const { data: response } = await axios.get<SettingDetailResponse>(
      `/setting`
    );
    return {
      ok: true,
      message: null,
      data: response.data.setting,
    };
  } catch (error) {
    return handleApiError<Setting>(error);
  }
}

const getSetting = cache(handler);

export default getSetting;
