// lib/utils.js
export function formatDate(dateString) {
  const date = dateString;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
