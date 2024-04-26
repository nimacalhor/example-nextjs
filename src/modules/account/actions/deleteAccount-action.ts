"use server";

import { deleteAccount } from "../api/account-api";
import { revalidatePath } from "next/cache";

async function deleteAccountAction(id: string, page: number, perPage: number) {
  const { ok, message } = await deleteAccount(id);
  if (!ok) return message;
  revalidatePath(`/accounts?page=${page}&per_page=${perPage}`);
}

export default deleteAccountAction;
