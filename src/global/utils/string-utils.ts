import { ZodError } from "zod";
import { Pagination } from "../types/global-types";

export function truncateString(
  str: string,
  len: number = 70,
  lines: number = 4,
  useWordBoundary: boolean = true
) {
  if (!str) return "";
  if (str.length <= len) {
    return str;
  }
  const subString = str.slice(0, len - 1);
  return (
    "... " +
    truncateStringByLines(
      useWordBoundary
        ? subString.slice(0, subString.lastIndexOf(" "))
        : subString
    )
  );
}

export function truncateStringByLines(
  input: string,
  maxLines: number = 4
): string {
  const lines = input.split("\n");

  if (lines.length <= maxLines) {
    return input + " ...";
  }

  const truncatedLines = lines.slice(0, maxLines);
  return truncatedLines.join("\n");
}

export function isPersian(text: string) {
  // const persianRegex = /[\u0600-\u06FF\u0750-\u077F]/;
  const persianRegex =
    /[\u0600-\u06FF\u0750-\u077F\uFB8A\u067E\u0686\u06AF\u200C\u200F]+/;
  return persianRegex.test(text);
}

export function getUniqueStringByDate() {
  const date = new Date();
  return date.getTime().toString(36);
}

export function formatPaginationQuery(pagination?: Pagination): string {
  if (!pagination) return "";
  const queryString = `per_page=${pagination.per_page}&page=${pagination.page}`;
  return queryString;
}


export function getZodErrorMessages(error: ZodError): string[] {
  const errorMessages: string[] = [];

  error.errors.forEach((err) => {
    console.log({ err });
    const fieldPath = `[${err.path.join(".")}]`;
    let customMessage = fieldPath;

    if (err.message && isPersian(err.message)) {
      // Use the custom message set in the `.refine()` method
      customMessage = err.message;
    } else {
      // Generate a default message based on the error object
      switch (err.code) {
        status "invalid_type":
          customMessage = `${fieldPath} باید ${err.expected} باشد اما ${err.received} دریافت شد`;
          break;
        // Add more statuss as needed for other error codes
        default:
          customMessage = `خطا در ${fieldPath}: ${err.message || ""}`;
          break;
      }
    }

    errorMessages.push(customMessage);
  });

  return errorMessages;
}
