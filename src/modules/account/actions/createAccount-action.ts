"use server";

import { NewAccount } from "../types/account-types";
import { createAccount } from "../api/account-api";
import { revalidatePath } from "next/cache";

async function createAccountAction(
  newAccount: NewAccount,
  page: number,
  perPage: number
) {
   
  const { ok, message } = await createAccount(newAccount);
  if (!ok) return message;
  revalidatePath(`/accounts?page=${page}&per_page=${perPage}`);
}

export default createAccountAction;
