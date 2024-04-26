import { handleApiError } from "@global/utils/error-utils";
import axios from "@global/lib/axios";
import type { ApiRType, Pagination } from "@global/types/global-types";
import { formatPaginationQuery } from "@global/utils/string-utils";
import type {
  Account,
  NewAccount,
  AccountDetail,
  CreatedAccount,
  DeletedAccount,
  UpdatedAccount,
  AccountListResponse,
  AccountDetailResponse,
  CreateAccountResponse,
  DeleteAccountResponse,
  UpdateAccountResponse,
} from "../types/account-types";
import { cache } from "react";

export const getAccountList = cache(async function (
  pagination: Pagination
): Promise<ApiRType<Account[]>> {
  try {
    const { data: response } = await axios.get<AccountListResponse>(
      `/accounts?${formatPaginationQuery(pagination)}`
    );
    return {
      ok: true,
      message: null,
      data: response.data,
      pagination: response.pagination,
    };
  } catch (error) {
    return handleApiError<Account[]>(error);
  }
});

export const getAccount = cache(async function (
  id: string
): Promise<ApiRType<AccountDetail>> {
  try {
    const { data: response } = await axios.get<AccountDetailResponse>(
      `/accounts/${id}`
    );
    return {
      ok: true,
      message: null,
      data: response.data.account,
    };
  } catch (error) {
    return handleApiError<AccountDetail>(error);
  }
});

export async function createAccount(
  newAccount: NewAccount
): Promise<ApiRType<CreatedAccount>> {
  try {
    const { data: response } = await axios.post<CreateAccountResponse>(
      `/accounts`,
      {
        account: newAccount,
      }
    );
    return {
      data: response.data.newAccount,
      message: null,
      ok: response.ok,
    };
  } catch (error) {
    return handleApiError<CreatedAccount>(error);
  }
}

export async function updateAccount(
  id: string,
  newAccount: NewAccount
): Promise<ApiRType<UpdatedAccount>> {
  try {
    const { data: response } = await axios.put<UpdateAccountResponse>(
      `/accounts/${id}`,
      {
        account: newAccount,
      }
    );
    return {
      data: response.data.updatedstatus,
      message: null,
      ok: response.ok,
    };
  } catch (error) {
    return handleApiError<UpdatedAccount>(error);
  }
}

export async function deleteAccount(
  id: string
): Promise<ApiRType<DeletedAccount>> {
  try {
    const { data: response } = await axios.delete<DeleteAccountResponse>(
      `/accounts/${id}`
    );
    return {
      data: response.data.deletedAccount,
      message: null,
      ok: response.ok,
    };
  } catch (error) {
    return handleApiError<DeletedAccount>(error);
  }
}
