
(() => {
  const button = document.getElementById("getLocation");
  const output = document.getElementById("locationResult");

  button.addEventListener("click", () => {
    if (!navigator.geolocation) {
      output.textContent = "Browser tidak mendukung fitur lokasi.";
      return;
    }

    output.textContent = "Menunggu izin lokasi dari pengguna...";

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude, accuracy } = position.coords;
        output.replaceChildren();

        const p = document.createElement("p");
        p.textContent = `Latitude: ${latitude}`;

        const p2 = document.createElement("p");
        p2.textContent = `Longitude: ${longitude}`;

        const p3 = document.createElement("p");
        p3.textContent = `Perkiraan akurasi: ${Math.round(accuracy)} meter`;

        const link = document.createElement("a");
        link.href = `https://www.google.com/maps?q=${latitude},${longitude}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Buka titik lokasi di peta";

        output.append(p, p2, p3, link);
      },
      error => {
        const messages = {
          1: "Izin lokasi ditolak.",
          2: "Lokasi perangkat tidak tersedia.",
          3: "Permintaan lokasi melewati batas waktu."
        };
        output.textContent = messages[error.code] || "Lokasi gagal diperiksa.";
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  });
})();
