// Data dummy tiket kereta
const tiketKereta = [
    {
        nama: "Argo Parahyangan",
        asal: "Jakarta",
        tujuan: "Bandung",
        durasi: "2 jam 46 menit",
        tanggal: "2024-05-12",
        harga: 435000,
        jam: "07:25"
    },
    {
        nama: "Serayu",
        asal: "Jakarta",
        tujuan: "Bandung",
        durasi: "3 jam 53 menit",
        tanggal: "2024-05-12",
        harga: 63000,
        jam: "09:25"
    },
    {
        nama: "Lodaya 92",
        asal: "Bandung",
        tujuan: "Yogyakarta",
        durasi: "7 jam",
        tanggal: "2024-05-12",
        harga: 270000,
        jam: "06:55"
    },
    {
        nama: "Turangga",
        asal: "Bandung",
        tujuan: "Yogyakarta",
        durasi: "4 jam",
        tanggal: "2024-05-12",
        harga: 250000,
        jam: "10:00"
    },
    {
        nama: "Gajayana",
        asal: "Jakarta",
        tujuan: "Surabaya",
        durasi: "5 jam",
        tanggal: "2024-05-12",
        harga: 200000,
        jam: "12:00"
    },
    {
        nama: "Argo Luxury",
        asal: "Jakarta",
        tujuan: "Surabaya",
        durasi: "3 jam",
        tanggal: "2024-05-12",
        harga: 500000,
        jam: "21:00"
    }
];

// Fungsi untuk mencari tiket berdasarkan asal, tujuan, dan tanggal
function cariTiket() {
    event.preventDefault();
    const asal = document.getElementById("asal").value.toLowerCase();
    const tujuan = document.getElementById("tujuan").value.toLowerCase();
    const tanggal = document.getElementById("tanggal").value;

    const hasilPencarian = document.getElementById("hasilPencarian");
    hasilPencarian.innerHTML = "";

    const tiketDitemukan = tiketKereta.filter(tiket => tiket.asal.toLowerCase() === asal && tiket.tujuan.toLowerCase() === tujuan && tiket.tanggal === tanggal);

    if (tiketDitemukan.length === 0) {
        hasilPencarian.innerHTML = "<tr><td colspan='8'>Maaf, tiket tidak tersedia untuk rute dan tanggal tersebut.</td></tr>";
    } else {
        tiketDitemukan.forEach(tiket => {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${tiket.nama}</td>
                <td>${tiket.asal}</td>
                <td>${tiket.tujuan}</td>
                <td>${tiket.durasi}</td>
                <td>${tiket.tanggal}</td>
                <td>${tiket.harga}</td>
                <td>${tiket.jam}</td>
                <td><button onclick="tampilkanDetailPesanan('${tiket.nama}', ${tiket.harga}, '${tiket.asal}', '${tiket.tujuan}')">Pesan</button></td>
            `;
            hasilPencarian.appendChild(newRow);
        });
    }
}

// Fungsi untuk menampilkan detail pesanan dan mengkonfirmasi pesanan
function tampilkanDetailPesanan(namaKereta, hargaTiket, dari, ke) {
    const jumlahTiket = parseInt(prompt("Masukkan jumlah tiket yang ingin dipesan:", "1"));

    if (isNaN(jumlahTiket) || jumlahTiket <= 0) {
        alert("Jumlah tiket tidak valid.");
        return;
    }

    const totalHarga = jumlahTiket * hargaTiket;

    const detailPesanan = document.getElementById("detailPesanan");
    detailPesanan.innerHTML = `
        <h2>Detail Pesanan</h2>
        <p>Nama Kereta: ${namaKereta}</p>
        <p>Asal: ${dari}</p>
        <p>Tujuan: ${ke}</p>
        <p>Jumlah Tiket: ${jumlahTiket}</p>
        <p>Total Harga: Rp.${totalHarga.toLocaleString()}</p>
    `;

    // Konfirmasi pesanan
    const confirmation = confirm(`Konfirmasi pesanan:\nNama Kereta: ${namaKereta}\nAsal: ${dari}\nTujuan: ${ke}\nJumlah Tiket: ${jumlahTiket}\nTotal Harga: Rp.${totalHarga.toLocaleString()}\n\nApakah Anda yakin ingin melanjutkan pesanan?`);

    if (confirmation) {
        alert("Pesanan berhasil dikonfirmasi!");
    } else {
        alert("Pesanan dibatalkan.");
    }
}
