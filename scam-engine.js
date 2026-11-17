
const rules = [
  ["Permintaan OTP atau kata sandi", /otp|password|kata sandi|kode verifikasi/i],
  ["Desakan waktu", /segera|sekarang juga|akun diblokir/i],
  ["Janji hadiah tidak wajar", /hadiah|menang|bonus besar|gratis/i],
  ["Permintaan transfer", /transfer|kirim uang|deposit|biaya admin/i],
  ["Tautan", /https?:\/\/|www\./i]
];

function analyze(text) {
  const value = String(text || "");
  const indicators = rules
    .filter(([, pattern]) => pattern.test(value))
    .map(([label]) => label);

  return {
    indicators,
    count: indicators.length,
    conclusion: "Indikator awal saja; perlu pemeriksaan manusia."
  };
}

module.exports = { analyze };
