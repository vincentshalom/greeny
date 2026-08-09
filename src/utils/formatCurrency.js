export function formatCurrency(amount, locale = "en-GB", currency = "NGN") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
