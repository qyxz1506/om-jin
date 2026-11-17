
(() => {
  const $ = id => document.getElementById(id);
  const button = $("analyzeFile");

  button.addEventListener("click", async () => {
    const file = $("forensicFile").files[0];
    const output = $("forensicResult");

    if (!file) return alert("Pilih file terlebih dahulu.");

    output.textContent = "Sedang menghitung hash file...";

    try {
      const buffer = await file.arrayBuffer();
      const digest = await crypto.subtle.digest("SHA-256", buffer);
      const hash = Array.from(new Uint8Array(digest))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

      const record = {
        name: file.name,
        type: file.type || "Tidak diketahui",
        size: file.size,
        lastModified: new Date(file.lastModified).toISOString(),
        sha256: hash,
        checkedAt: new Date().toISOString()
      };

      output.replaceChildren();

      Object.entries(record).forEach(([key, value]) => {
        const p = document.createElement("p");
        p.textContent = `${key}: ${value}`;
        output.append(p);
      });

      const files = window.OMJIN.get("files", []);
      files.push(record);
      window.OMJIN.set("files", files);
    } catch {
      output.textContent = "Gagal memeriksa file. Browser mungkin tidak mendukung Web Crypto pada konteks ini.";
    }
  });
})();
