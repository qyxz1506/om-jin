
# OM JIN INTELLIGENCE AI PRO

Workspace lokal untuk:
- Dokumentasi laporan kejadian
- Ekspor catatan laporan
- Pemeriksaan indikator pesan mencurigakan
- Pencarian informasi publik
- Lokasi perangkat dengan izin
- Catatan identitas minimal
- Pemeriksaan metadata dan hash SHA-256

## Mode browser

Buka index.html melalui browser.

Catatan:
- Penyimpanan laporan menggunakan localStorage.
- Data berada di browser dan perangkat yang digunakan.
- Menghapus data browser dapat menghapus catatan.
- Lokasi dan Web Crypto mungkin membutuhkan HTTPS.
- Ekspor JSON bukan formulir resmi kepolisian.

## Mode backend opsional

Backend memerlukan Node.js dan instalasi dependency.
Jalankan `npm install`, lalu `npm start`.

Backend saat ini hanya menyajikan website dan status server.
Belum ada database server, autentikasi, ataupun API penyimpanan laporan.

## Batasan

- Tidak terhubung ke database polisi, bank, operator, atau Dukcapil.
- Tidak melacak orang lain.
- Tidak membuka akun privat.
- Analisis pesan hanya pemeriksaan indikator awal.
- Hash file tidak membuktikan file aman.
- Hasil pemeriksaan harus diverifikasi manusia.

## Prinsip dokumentasi

Pisahkan fakta, keterangan pihak lain, dugaan, dan informasi
yang belum diverifikasi. Simpan sumber dan waktu perolehan bukti.
Jangan mengubah bukti asli.
