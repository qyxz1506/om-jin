
function analyzeText(text) {
  const input = String(text || "").trim();

  if (!input) {
    return { success: false, message: "Teks kosong." };
  }

  return {
    success: true,
    engine: "Local rule-based analysis",
    result: "Teks diterima untuk pemeriksaan indikator.",
    limitation: "Bukan model AI dan bukan keputusan hukum."
  };
}

module.exports = { analyzeText };
