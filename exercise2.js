function tambah() {
    event.preventDefault();
    var a = parseInt(document.getElementById("angka1").value);
    var b = parseInt(document.getElementById("angka2").value);

    var hasil = a + b;
    document.getElementById("hasil").value = hasil;
}

function kurang() {
    event.preventDefault();
    var a = parseInt(document.getElementById("angka1").value);
    var b = parseInt(document.getElementById("angka2").value);

    var hasil = a - b;
    document.getElementById("hasil").value = hasil;
}

function kali() {
    event.preventDefault();
    var a = parseInt(document.getElementById("angka1").value);
    var b = parseInt(document.getElementById("angka2").value);

    var hasil = a * b;
    document.getElementById("hasil").value = hasil;
}

function bagi() {
    event.preventDefault();
    var a = parseInt(document.getElementById("angka1").value);
    var b = parseInt(document.getElementById("angka2").value);

    var hasil = a / b;
    document.getElementById("hasil").value = hasil;
}