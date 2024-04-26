export function formatDateToPersian(date: Date) {
  let persianDate = new Intl.DateTimeFormat("fa-IR").format(date);
  return persianDate;
}
