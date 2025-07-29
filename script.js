function beliProduk(namaProduk, harga) {
  localStorage.setItem("produk", namaProduk);
  localStorage.setItem("harga", harga);
  window.location.href = "transaksi.html";
}

function prosesTransaksi() {
  const nama = document.getElementById("nama").value;
  const produk = document.getElementById("produk").value;
  const harga = document.getElementById("harga").value;
  const jumlah = document.getElementById("jumlah").value;
  const total = harga * jumlah;

  localStorage.setItem("nama", nama);
  localStorage.setItem("jumlah", jumlah);
  localStorage.setItem("total", total);

  window.location.href = "invoice.html";
  return false;
}

window.onload = function() {
  const halaman = window.location.pathname;

  if (halaman.includes("transaksi.html")) {
    document.getElementById("produk").value = localStorage.getItem("produk");
    document.getElementById("harga").value = localStorage.getItem("harga");
  }

  if (halaman.includes("invoice.html")) {
    const output = document.getElementById("invoiceOutput");
    const nama = localStorage.getItem("nama");
    const produk = localStorage.getItem("produk");
    const harga = localStorage.getItem("harga");
    const jumlah = localStorage.getItem("jumlah");
    const total = localStorage.getItem("total");

    output.innerHTML = `
      <h2>Struk Pembelian</h2>
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Produk:</strong> ${produk}</p>
      <p><strong>Harga:</strong> Rp${parseInt(harga).toLocaleString()}</p>
      <p><strong>Jumlah:</strong> ${jumlah}</p>
      <p><strong>Total:</strong> Rp${parseInt(total).toLocaleString()}</p>
    `;
  }
};
function prosesTransaksi() {
  const nama = document.getElementById("nama").value;
  const produk = document.getElementById("produk").value;
  const harga = document.getElementById("harga").value;
  const jumlah = document.getElementById("jumlah").value;
  const total = harga * jumlah;

  localStorage.setItem("nama", nama);
  localStorage.setItem("produk", produk);
  localStorage.setItem("harga", harga);
  localStorage.setItem("jumlah", jumlah);
  localStorage.setItem("total", total);

  window.location.href = "invoice.html";
  return false;
}

window.onload = function () {
  if (window.location.pathname.includes("transaksi.html")) {
    document.getElementById("produk").value = localStorage.getItem("produk");
    document.getElementById("harga").value = localStorage.getItem("harga");
  }
};
window.onload = function () {
  const path = window.location.pathname;

  if (path.includes("transaksi.html")) {
    document.getElementById("produk").value = localStorage.getItem("produk");
    document.getElementById("harga").value = localStorage.getItem("harga");
  }

  if (path.includes("invoice.html")) {
    const output = document.getElementById("invoiceOutput");
    const nama = localStorage.getItem("nama") || "-";
    const produk = localStorage.getItem("produk") || "-";
    const harga = parseInt(localStorage.getItem("harga")) || 0;
    const jumlah = parseInt(localStorage.getItem("jumlah")) || 0;
    const total = parseInt(localStorage.getItem("total")) || 0;

    output.innerHTML = `
      <p><strong>Nama Pembeli:</strong> ${nama}</p>
      <p><strong>Nama Produk:</strong> ${produk}</p>
      <p><strong>Harga Satuan:</strong> Rp${harga.toLocaleString()}</p>
      <p><strong>Jumlah:</strong> ${jumlah}</p>
      <p><strong>Total Bayar:</strong> <span style="color:#007B80; font-weight:bold;">Rp${total.toLocaleString()}</span></p>
    `;
  }
};
