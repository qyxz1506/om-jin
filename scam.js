
(() => {
  const $ = id => document.getElementById(id);

  $("scamAnalyze").addEventListener("click", () => {
    const text = $("scamText").value.trim();
    if (!text) return alert("Masukkan teks yang ingin diperiksa.");

    const checks = [
      ["Permintaan OTP, PIN, atau kata sandi", /otp|pin|kata sandi|password|kode verifikasi/i],
      ["Desakan untuk segera bertindak", /segera|sekarang juga|dalam 5 menit|akun diblokir/i],
      ["Janji hadiah atau keuntungan tidak wajar", /hadiah|menang|gratis|keuntungan dijamin|bonus besar/i],
      ["Permintaan transfer atau pembayaran", /transfer|kirim uang|biaya admin|deposit|rekening/i],
      ["Tautan yang perlu diperiksa", /https?:\/\/|www\./i],
      ["Mengaku sebagai petugas atau lembaga", /polisi|bank|bea cukai|pajak|kurir/i]
    ];

    const found = checks.filter(([, regex]) => regex.test(text)).map(([name]) => name);
    const result = $("scamResult");
    result.replaceChildren();

    const heading = document.createElement("strong");
    heading.textContent = found.length
      ? "Ditemukan " + found.length + " indikator yang perlu diperiksa."
      : "Tidak ditemukan indikator umum dari daftar pemeriksaan.";

    const note = document.createElement("p");
    note.textContent = "Ini pemeriksaan awal berbasis kata kunci, bukan keputusan bahwa pesan pasti penipuan.";

    result.append(heading, note);

    found.forEach(item => {
      const p = document.createElement("p");
      p.textContent = "• " + item;
      result.append(p);
    });

    const analyses = window.OMJIN.get("analyses", []);
    analyses.push({ date: new Date().toISOString(), indicators: found.length });
    window.OMJIN.set("analyses", analyses);
  });
})();
