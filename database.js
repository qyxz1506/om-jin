
/*
  Mode browser menyimpan data menggunakan localStorage.
  File ini disiapkan sebagai titik awal jika nanti backend
  dan database server benar-benar diaktifkan.

  Jangan menganggap localStorage sebagai database server.
  Jangan menyimpan data sensitif tanpa enkripsi dan kontrol akses.
*/

function databaseStatus() {
  return {
    configured: false,
    mode: "browser-local",
    message: "Database server belum dikonfigurasi."
  };
}

module.exports = { databaseStatus };
