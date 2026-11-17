
function validateIdentityNote(data) {
  if (!data || typeof data !== "object") {
    return { valid: false, message: "Data tidak valid." };
  }

  const allowed = ["name", "phone", "reference", "notes"];
  const clean = {};

  for (const key of allowed) {
    clean[key] = String(data[key] || "").trim().slice(0, 300);
  }

  return {
    valid: true,
    data: clean,
    warning: "Simpan hanya informasi yang diperlukan dan diperoleh secara sah."
  };
}

module.exports = { validateIdentityNote };
