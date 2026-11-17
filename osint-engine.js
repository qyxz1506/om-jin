
function buildPublicSearchUrl(query) {
  const value = String(query || "").trim();
  if (!value) throw new Error("Kata kunci kosong.");

  return "https://www.google.com/search?q=" + encodeURIComponent(value);
}

module.exports = { buildPublicSearchUrl };
