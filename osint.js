
(() => {
  document.getElementById("osintSearch").addEventListener("click", () => {
    const query = document.getElementById("osintQuery").value.trim();
    if (!query) return alert("Masukkan kata kunci.");

    const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(url, "_blank", "noopener,noreferrer");
  });
})();
