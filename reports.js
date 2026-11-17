
(() => {
  const $ = id => document.getElementById(id);
  const db = window.OMJIN;

  function render() {
    const reports = db.get("reports");
    const list = $("reportList");

    if (!reports.length) {
      list.textContent = "Belum ada laporan.";
      list.className = "empty-state";
      return;
    }

    list.className = "";
    list.replaceChildren();

    reports.slice().reverse().forEach(report => {
      const item = document.createElement("article");
      item.className = "record-item";

      const title = document.createElement("strong");
      title.textContent = report.title;

      const detail = document.createElement("p");
      detail.textContent = `${report.category} • ${report.createdAt}`;

      const summary = document.createElement("p");
      summary.textContent = report.description;

      const exportButton = document.createElement("button");
      exportButton.className = "primary-button";
      exportButton.textContent = "Ekspor laporan ini";
      exportButton.addEventListener("click", () => {
        db.download(
          "OMJIN-laporan-" + report.id + ".json",
          JSON.stringify(report, null, 2),
          "application/json"
        );
      });

      item.append(title, detail, summary, exportButton);
      list.append(item);
    });
  }

  $("reportForm").addEventListener("submit", event => {
    event.preventDefault();

    const report = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      createdAt: new Date().toISOString(),
      title: $("reportTitle").value.trim(),
      category: $("reportCategory").value,
      incidentDate: $("incidentDate").value,
      incidentPlace: $("incidentPlace").value.trim(),
      reporterName: $("reporterName").value.trim(),
      reporterContact: $("reporterContact").value.trim(),
      description: $("reportDescription").value.trim(),
      witnessInfo: $("witnessInfo").value.trim(),
      evidence: $("reportEvidence").value.trim(),
      unverifiedInfo: $("unverifiedInfo").value.trim(),
      status: "Belum diverifikasi oleh pihak berwenang"
    };

    if (!report.title || !report.description) {
      alert("Judul dan kronologi wajib diisi.");
      return;
    }

    const reports = db.get("reports");
    reports.push(report);
    db.set("reports", reports);

    $("reportForm").reset();
    render();
    alert("Laporan tersimpan di browser perangkat ini.");
  });

  $("exportAllReports").addEventListener("click", () => {
    const reports = db.get("reports");
    if (!reports.length) return alert("Belum ada laporan untuk diekspor.");

    db.download(
      "OMJIN-semua-laporan.json",
      JSON.stringify({
        application: "OM JIN INTELLIGENCE AI PRO",
        exportedAt: new Date().toISOString(),
        note: "Dokumen ini merupakan catatan pengguna, bukan laporan resmi yang telah diverifikasi polisi.",
        reports
      }, null, 2),
      "application/json"
    );
  });

  render();
})();
