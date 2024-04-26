import { AccountStore } from "../types/account-types";
import { PayloadAction } from "@reduxjs/toolkit";

export function switchMode(
  state: AccountStore,
  action: PayloadAction<{ mode?: boolean; account?: AccountStore["account"] }>
) {
  const { mode, account } = action.payload;
  if (typeof mode === "boolean") state.editMode = mode;

  else state.editMode = !state.editMode;
  if (account) state.account = account;
}

export function setAccount(
  state: AccountStore,
  action: PayloadAction<{ account: AccountStore["account"] }>
) {
  const { account } = action.payload;
  if (account) state.account = account;
  state.account = null;
}
