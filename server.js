
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));

app.use("/public", express.static(path.join(ROOT, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(ROOT, "index.html"));
});

app.get("/api/status", (req, res) => {
  res.json({
    name: "OM JIN INTELLIGENCE AI PRO",
    status: "server-online",
    database: "not-configured",
    policeIntegration: false,
    aiModel: false,
    note: "Backend dasar. Belum untuk penyimpanan laporan sensitif."
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Rute tidak ditemukan." });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`OM JIN berjalan pada port ${PORT}`);
});
