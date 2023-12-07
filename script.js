// Fungsi untuk menampilkan formulir perhitungan luas segitiga
function showLuas() {
    document.getElementById('luas-form').style.display = 'block';
    document.getElementById('keliling-form').style.display = 'none';
}

// Fungsi untuk menampilkan formulir perhitungan keliling segitiga
function showKeliling() {
    document.getElementById('luas-form').style.display = 'none';
    document.getElementById('keliling-form').style.display = 'block';
}

// Fungsi untuk menghitung luas segitiga
function hitungLuas() {
    // Mengambil nilai dari input alas dan tinggi
    var alasInput = document.getElementById('alas');
    var tinggiInput = document.getElementById('tinggi');

    // Mengkonversi nilai input menjadi tipe data float
    var alas = parseFloat(alasInput.value);
    var tinggi = parseFloat(tinggiInput.value);

    // Memeriksa apakah nilai yang dimasukkan adalah angka yang valid
    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Masukkan angka yang valid untuk alas dan tinggi.');
        return;
    }

    // Menampilkan proses perhitungan luas segitiga secara rinci
    const luasSteps = document.getElementById('luas-steps');
    luasSteps.innerHTML = `<p>L = 1/2 * alas * tinggi</p>  
                           <p>L = 1/2 * ${alas} * ${tinggi}</p>
                           <p>L = ${0.5 * alas * tinggi}</p>`;

    // Menampilkan hasil akhir perhitungan luas segitiga
    document.getElementById('luas-final-result').innerHTML = `Luas Segitiga: ${0.5 * alas * tinggi}`;
}

// Fungsi untuk menghitung keliling segitiga
function hitungKeliling() {
    // Mengambil nilai dari input sisi1, sisi2, dan sisi3
    var sisi1Input = document.getElementById('sisi1');
    var sisi2Input = document.getElementById('sisi2');
    var sisi3Input = document.getElementById('sisi3');

    // Mengkonversi nilai input menjadi tipe data float
    var sisi1 = parseFloat(sisi1Input.value);
    var sisi2 = parseFloat(sisi2Input.value);
    var sisi3 = parseFloat(sisi3Input.value);

    // Memeriksa apakah nilai yang dimasukkan adalah angka yang valid
    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
        alert('Masukkan angka yang valid untuk panjang sisi.');
        return;
    }

    // Menampilkan proses perhitungan keliling segitiga secara rinci
    const kelilingSteps = document.getElementById('keliling-steps');
    kelilingSteps.innerHTML = `<p>K = sisi1 + sisi2 + sisi3</p>
                               <p>K = ${sisi1} + ${sisi2} + ${sisi3}</p>
                               <p>K = ${sisi1 + sisi2 + sisi3}</p>`;

    // Menampilkan hasil akhir perhitungan keliling segitiga
    document.getElementById('keliling-final-result').innerHTML = `Keliling Segitiga: ${sisi1 + sisi2 + sisi3}`;
}

// Fungsi untuk mereset formulir perhitungan luas segitiga
function resetLuasForm() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('luas-steps').innerHTML = '';
    document.getElementById('luas-final-result').innerHTML = '';
}

// Fungsi untuk mereset formulir perhitungan keliling segitiga
function resetKelilingForm() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('keliling-steps').innerHTML = '';
    document.getElementById('keliling-final-result').innerHTML = '';
}