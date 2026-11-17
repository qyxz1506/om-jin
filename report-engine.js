
function validateReport(report) {
  if (!report || typeof report !== "object") {
    return { valid: false, message: "Format laporan tidak valid." };
  }

  const title = String(report.title || "").trim();
  const description = String(report.description || "").trim();

  if (!title || !description) {
    return {
      valid: false,
      message: "Judul dan kronologi wajib diisi."
    };
  }

  return {
    valid: true,
    report: {
      ...report,
      title: title.slice(0, 100),
      description: description.slice(0, 10000),
      status: "Belum diverifikasi oleh pihak berwenang"
    }
  };
}

module.exports = { validateReport };
