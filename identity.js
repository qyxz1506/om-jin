
(() => {
  const $ = id => document.getElementById(id);
  const db = window.OMJIN;

  function render() {
    const list = $("identityList");
    const entries = db.get("identities");

    list.replaceChildren();

    if (!entries.length) {
      list.textContent = "Belum ada catatan.";
      list.className = "empty-state";
      return;
    }

    list.className = "";
    entries.forEach(entry => {
      const div = document.createElement("div");
      div.className = "record-item";
      div.textContent = `${entry.name || "Tanpa nama"} • ${entry.phone || "Tanpa kontak"} • ${entry.reference || "Tanpa referensi"} • ${entry.notes || "Tanpa catatan"}`;
      list.append(div);
    });
  }

  $("identityForm").addEventListener("submit", event => {
    event.preventDefault();

    const entry = {
      name: $("identityName").value.trim(),
      phone: $("identityPhone").value.trim(),
      reference: $("identityReference").value.trim(),
      notes: $("identityNotes").value.trim(),
      createdAt: new Date().toISOString()
    };

    if (!entry.name && !entry.phone && !entry.reference) {
      return alert("Isi setidaknya satu informasi.");
    }

    const entries = db.get("identities");
    entries.push(entry);
    db.set("identities", entries);
    $("identityForm").reset();
    render();
    alert("Catatan identitas tersimpan secara lokal.");
  });

  render();
})();
