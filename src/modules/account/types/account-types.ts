import { ResPagination } from "@global/types/global-types";

export type AccountStatus = "blocked" | "challenge" | "active" | "inactive";

export interface AccountStore {
  editMode: boolean;
  account: {
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    status: AccountStatus;
    proxy: string;
    _id: string;
  } | null;
}

export interface AccountListResponse {
  ok: boolean;
  status: AccountStatus;
  data: Account[];
  pagination: ResPagination;
}

export interface Account {
  _id: string;
  username: string;
  password: string;
  proxy: string;
  status: AccountStatus;
  requestCount: number;
  email: string;
  phone: string;
  accountId: string;
  __v: number;
}

export interface AccountDetailResponse {
  ok: boolean;
  status: AccountStatus;
  data: AccountDetailData;
}

export interface AccountDetailData {
  account: AccountDetail;
}

export interface AccountDetail {
  _id: string;
  username: string;
  password: string;
  proxy: string;
  status: AccountStatus;
  requestCount: number;
  email: string;
  phone: string;
  accountId: string;
  __v: number;
}

export interface NewAccount {
  username: string;
  password: string;
  proxy?: string;
  status?: string;
  session?: any;
  email?: string;
  phone?: string;
}

export interface CreateAccountResponse {
  ok: boolean;
  status: AccountStatus;
  data: CreatedAccountData;
}

export interface CreatedAccountData {
  newAccount: CreatedAccount;
}

export interface CreatedAccount {
  username: string;
  password: string;
  proxy: string;
  status: AccountStatus;
  requestCount: number;
  email: string;
  phone: string;
  _id: string;
  accountId: string;
  __v: number;
}

export interface UpdateAccountResponse {
  ok: boolean;
  status: AccountStatus;
  data: UpdatedAccountData;
}

export interface UpdatedAccountData {
  updatedstatus: UpdatedAccount;
}

export interface UpdatedAccount {
  _id: string;
  username: string;
  password: string;
  proxy: string;
  status: AccountStatus;
  requestCount: number;
  email: string;
  phone: string;
  accountId: string;
  __v: number;
}

export interface DeleteAccountResponse {
  ok: boolean;
  status: AccountStatus;
  data: DeletedAccountData;
}

export interface DeletedAccountData {
  deletedAccount: DeletedAccount;
}

export interface DeletedAccount {
  _id: string;
  username: string;
  password: string;
  proxy: string;
  status: AccountStatus;
  requestCount: number;
  email: string;
  phone: string;
  accountId: string;
  __v: number;
}
