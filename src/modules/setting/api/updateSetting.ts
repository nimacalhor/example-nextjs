import customAxios from "@/global/lib/axios";
import { ApiRType } from "@/global/types/global-types";
import {
  NewSetting,
  UpdateSetting,
  UpdateSettingResponse,
} from "../types/setting-types";
import { handleApiError } from "@/global/utils/error-utils";

export async function updateSetting(
  newSetting: UpdateSetting
): Promise<ApiRType<NewSetting>> {
  try {
    const { data: response } = await customAxios.put<UpdateSettingResponse>(
      `/setting`,
      {
        setting: newSetting,
      }
    );
    return {
      data: response.data.newSetting,
      message: null,
      ok: response.ok,
    };
  } catch (error) {
    return handleApiError<NewSetting>(error);
  }
}
