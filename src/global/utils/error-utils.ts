import { isAxiosError, isCancel } from "axios";
import { ApiRType, ErrorResponse } from "../types/global-types";
import { ERROR_MESSAGES } from "../constants/api-constants";

/**
 * تابع `handleApiError` برای مدیریت خطاهای مرتبط با API استفاده می‌شود.
 *
 * @param error - خطای دریافت شده که ممکن است از نوع Axios یا CancelToken باشد.
 * @returns - یک شیء با ساختار `ApiRType` که شامل اطلاعات خطا و پیام مناسب است.
 */
export function handleApiError<DType>(error: any): ApiRType<DType> {
  console.log(error?.response?.data);
  if (isAxiosError(error)) {
     
    // خطاهای مرتبط با Axios
    if (!error.response) {
       
      // خطای اتصال به سرور
      return { ok: false, message: ERROR_MESSAGES["5001"], data: null };
      // خطاهای HTTP
    } else {
      console.log(error.response.data);
       
      return {
        ok: false,
        message: (ERROR_MESSAGES as any)[
          (error.response.data as ErrorResponse).data.errorCode + ""
        ],
        data: null,
      };
    }
  } else {
    // خطاهای مرتبط با CancelToken
    if (isCancel(error))
      return { ok: false, message: ERROR_MESSAGES["5041"], data: null };
    else {
      //
      if (error.message.includes("JSON")) {
        // خطای پاسخ نامعتبر
        return {
          ok: false,
          message: ERROR_MESSAGES.invalidResponse,
          data: null,
        };
      }
      // خطای ناشناخته یا خطای پیش‌بینی نشده
      else return { ok: false, message: ERROR_MESSAGES.default, data: null };
    }
  }
}
