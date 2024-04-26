export function toFarsiNumber(n: number) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n
    .toString()
    .split("")
    .map((x) => farsiDigits[Number(x)])
    .join("");
}

export function bytesToKilobytes(bytes: number) {
  let kilobytes = bytes / 1024;
  return kilobytes.toFixed(2) + "kb";
}
