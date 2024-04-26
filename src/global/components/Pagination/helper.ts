// تابع getPaginateGroups برای تولید صفحات برای کامپوننت صفحه‌بندی استفاده می‌شود
export function getPaginateGroups(
  currentPage: number,
  totalPages: number
): number[][] {
  const [x, y] = [currentPage, totalPages];
  // شرایط ورودی را اعتبارسنجی می‌کنیم
  if (x <= 0 || y <= 0 || y < x) {
    throw new Error("current page should be less than total pages");
  }

  // مورد 1: X <= 5
  if (x <= 5) {
    if (y <= 5) return [Array.from({ length: totalPages }, (_, i) => i + 1)];
    return [Array.from({ length: 6 }, (_, i) => i + 1), [y - 2, y - 1, y]];
  }

  // مورد 2: y-5 > x > 5
  if (y - 5 > x && x > 5) {
    return [
      [1, 2, 3],
      Array.from({ length: 5 }, (_, i) => x - 2 + i),
      [y - 2, y - 1, y],
    ];
  }

  // مورد 3: x >= y-5
  return [[1, 2, 3], _fillToNumber(x, y)];
}

// تابع fillToNumber برای تولید یک آرایه از اعداد به تعداد مشخص شده است
function _fillToNumber(from: number, to: number): number[] {
  // اعتبارسنجی ورودی 'from' باید کمتر یا مساوی 'to' باشد
  if (from > to) {
    throw new Error("ورودی نامعتبر: 'from' باید کمتر یا مساوی 'to' باشد.");
  }

  // ایجاد آرایه از اعداد با استفاده از تابع Array.from
  return Array.from({ length: to - from + 3 }, (_, index) => from + index - 2);
}
