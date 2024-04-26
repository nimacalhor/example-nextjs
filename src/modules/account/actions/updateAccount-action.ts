"use server";

import { updateAccount } from "../api/account-api";
import { revalidatePath } from "next/cache";
import { NewAccount } from "../types/account-types";

async function updateAccountAction(
  id: string,
  account: NewAccount,
  page: number,
  perPage: number
) {
   
  const { ok, message } = await updateAccount(id, account);
  if (!ok) return message;
  revalidatePath(`/accounts?page=${page}&per_page=${perPage}`);
}

export default updateAccountAction;
