"use server";

import { updateSetting } from "../api/updateSetting";
import { revalidatePath } from "next/cache";
import { NewSetting, UpdateSetting } from "../types/setting-types";

async function updateSettingAction(
  setting: UpdateSetting,
  page: number,
  perPage: number
) {
   
  const { ok, message } = await updateSetting(setting);
  if (!ok) return message;
  revalidatePath(`/settings?page=${page}&per_page=${perPage}`);
}

export default updateSettingAction;
