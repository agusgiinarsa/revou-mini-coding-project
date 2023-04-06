// Tabulasi
const tabLinks = document.querySelectorAll(".tab-link");
const cards = document.querySelectorAll(".card");

tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    tabLinks.forEach((link) => {
      link.classList.remove("active");
    });
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    link.classList.add("active");
    const tabId = link.dataset.tab;
    const card = document.querySelector(`.card[data-tab="${tabId}"]`);
    card.classList.add("active");
  });
});

function segitiga_hitung_luas() {
    var segitiga_alas = parseFloat(document.getElementById("segitiga_alas").value);
    var segitiga_tinggi = parseFloat(document.getElementById("segitiga_tinggi").value);
    var segitiga_luas_error = document.getElementById("segitiga_luas_error");
    if (isNaN(segitiga_alas) || isNaN(segitiga_tinggi)) {
        segitiga_luas_error.innerHTML = "Alas dan tinggi harus diisi dengan angka";
        document.getElementById("segitiga_luas_hasil").innerHTML = "";
    } 
    else if (segitiga_alas <= 0 || segitiga_tinggi <= 0) {
        segitiga_luas_error.innerHTML = "Alas atau tinggi harus lebih besar dari 0";
        document.getElementById("segitiga_luas_hasil").innerHTML = "";
    } 
    else {
        segitiga_luas_error.innerHTML = "";
        var segitiga_luas_hasil = 0.5 * (segitiga_alas * segitiga_tinggi);
        document.getElementById("segitiga_luas_hasil").innerHTML = "L = 1/2 x a x t<br>L = 1/2 x " + segitiga_alas + " x " + segitiga_tinggi + "<br>L = " + segitiga_luas_hasil.toFixed(2);
    }
}

function segitiga_reset_luas() {
    document.getElementById("segitiga_alas").value = '';
    document.getElementById("segitiga_tinggi").value = '';
    segitiga_luas_hasil.innerHTML = "";
}

function segitiga_hitung_keliling() {
    var segitiga_sisi_a = parseFloat(document.getElementById("segitiga_sisi_a").value);
    var segitiga_sisi_b = parseFloat(document.getElementById("segitiga_sisi_b").value);
    var segitiga_sisi_c = parseFloat(document.getElementById("segitiga_sisi_c").value);
    var segitiga_keliling_error = document.getElementById("segitiga_keliling_error");
    if (isNaN(segitiga_sisi_a) || isNaN(segitiga_sisi_b) || isNaN(segitiga_sisi_c)) {
        segitiga_keliling_error.innerHTML = "Semua sisi harus diisi dengan angka";
        document.getElementById("segitiga_keliling_hasil").innerHTML = "";
    } 
    else if (segitiga_sisi_a <= 0 || segitiga_sisi_b <= 0 || segitiga_sisi_c <= 0) {
        segitiga_keliling_error.innerHTML = "Semua sisi harus lebih besar dari 0";
        document.getElementById("segitiga_keliling_hasil").innerHTML = "";
    } 
    else if (segitiga_sisi_a + segitiga_sisi_b <= segitiga_sisi_c || segitiga_sisi_a + segitiga_sisi_c <= segitiga_sisi_b || segitiga_sisi_b + segitiga_sisi_c <= segitiga_sisi_a) {
        segitiga_keliling_error.innerHTML = "Sisi-sisi tersebut tidak membentuk segitiga";
        document.getElementById("segitiga_keliling_hasil").innerHTML = "";
    } 
    else {
        segitiga_keliling_error.innerHTML = "";
        var segitiga_keliling_hasil = segitiga_sisi_a + segitiga_sisi_b + segitiga_sisi_c;
        document.getElementById("segitiga_keliling_hasil").innerHTML = "K = a + b + c<br>K = " + segitiga_sisi_a + " + " + segitiga_sisi_b + " + " + segitiga_sisi_c + "<br>K = " + segitiga_keliling_hasil.toFixed(2);
    }
}

function segitiga_reset_keliling() {
    document.getElementById("segitiga_sisi_a").value = '';
    document.getElementById("segitiga_sisi_b").value = '';
    document.getElementById("segitiga_sisi_c").value = '';
    segitiga_keliling_hasil.innerHTML = "";
}

function jajar_genjang_hitung() {
    var jajar_genjang_alas = parseFloat(document.getElementById("jajar_genjang_alas").value);
    var jajar_genjang_tinggi = parseFloat(document.getElementById("jajar_genjang_tinggi").value);
    var jajar_genjang_sisi = parseFloat(document.getElementById("jajar_genjang_sisi").value);
    var jajar_genjang_error = document.getElementById("jajar_genjang_error");
    if (isNaN(jajar_genjang_alas) || isNaN(jajar_genjang_tinggi) || isNaN(jajar_genjang_sisi)) {
        jajar_genjang_error.innerHTML = "Semua input harus diisi dengan angka";
        document.getElementById("jajar_genjang_hasil").innerHTML = "";
    }
    else if (jajar_genjang_alas <= 0 || jajar_genjang_tinggi <= 0 || jajar_genjang_sisi <= 0) {
        jajar_genjang_error.innerHTML = "Semua input harus lebih besar dari 0";
        document.getElementById("jajar_genjang_hasil").innerHTML = "";
    }
    else {
        jajar_genjang_error.innerHTML = "";
        var jajar_genjang_luas_hasil = jajar_genjang_alas * jajar_genjang_tinggi;
        var jajar_genjang_keliling_hasil = 2 * (jajar_genjang_alas + jajar_genjang_sisi);
        document.getElementById("jajar_genjang_hasil").innerHTML = "L = a x t<br>L = " + jajar_genjang_alas + " x " + jajar_genjang_tinggi + "<br>L = " + jajar_genjang_luas_hasil.toFixed(2) + "<br><br>K = 2 x (a + b)<br>K = 2 x (" + jajar_genjang_alas + " + " + jajar_genjang_sisi + ")<br>K = " + jajar_genjang_keliling_hasil.toFixed(2);
    }
}

function jajar_genjang_reset() {
    document.getElementById("jajar_genjang_alas").value = '';
    document.getElementById("jajar_genjang_tinggi").value = '';
    document.getElementById("jajar_genjang_sisi").value = '';
    jajar_genjang_hasil.innerHTML = "";
}