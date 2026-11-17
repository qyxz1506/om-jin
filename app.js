
(() => {
  const $ = (id) => document.getElementById(id);

  window.OMJIN = {
    get(key, fallback = []) {
      try {
        return JSON.parse(localStorage.getItem("omjin_" + key)) ?? fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      localStorage.setItem("omjin_" + key, JSON.stringify(value));
      this.updateStats();
    },
    download(filename, content, type = "text/plain") {
      const blob = new Blob([content], { type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    },
    updateStats() {
      $("totalReports").textContent = this.get("reports").length;
      $("totalAnalyses").textContent = this.get("analyses", []).length;
      $("totalFiles").textContent = this.get("files", []).length;
    }
  };

  function showPage(name) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));

    const page = $("page-" + name);
    if (!page) return;

    page.classList.add("active");
    document.querySelectorAll(`[data-page="${name}"]`).forEach(b => {
      if (b.classList.contains("nav-item")) b.classList.add("active");
    });

    const titles = {
      dashboard: ["Dashboard", "Pusat kendali OM JIN Intelligence"],
      reports: ["Manajemen Laporan", "Dokumentasi kejadian dan bukti"],
      osint: ["OSINT Publik", "Pencarian sumber terbuka"],
      scam: ["Analisis Penipuan", "Pemeriksaan indikator risiko"],
      location: ["Lokasi Perangkat", "Lokasi perangkat dengan izin"],
      identity: ["Data Identitas", "Catatan informasi yang diperoleh secara sah"],
      forensics: ["Forensik File", "Pemeriksaan metadata dan hash"],
      about: ["Tentang Sistem", "Informasi dan batasan sistem"]
    };

    $("pageTitle").textContent = titles[name][0];
    $("pageSubtitle").textContent = titles[name][1];
    $("sidebar").classList.remove("open");
  }

  document.querySelectorAll("[data-page]").forEach(button => {
    button.addEventListener("click", () => showPage(button.dataset.page));
  });

  $("menuToggle").addEventListener("click", () => {
    $("sidebar").classList.toggle("open");
  });

  window.OMJIN.showPage = showPage;
  window.OMJIN.updateStats();
})();
