console.log('\n\nNo 1\n')
// No. 1

var nilai = 76;
var index;

if (nilai >= 85) {
    index = "A"
} else if (nilai >= 75 && nilai < 85) {
    index = "B"
} else if (nilai >= 65 && nilai < 75) {
    index = "C"
} else if (nilai >= 55 && nilai < 65) {
    index = "D"
} else {
    index = "E"
}

console.log(index)


console.log('\n\nNo 2\n')
// Soal no 2

var hari = 13;
var bulan = 11;
var tahun = 1998;

if (hari >= 1 && hari <= 31) {
    switch (bulan) {
        case 1:
            console.log(hari + ' Januari ' + tahun)
            break
        case 2:
            console.log(hari + ' Februari ' + tahun)
            break
        case 3:
            console.log(hari + ' Maret ' + tahun)
            break
        case 4:
            console.log(hari + ' April ' + tahun)
            break
        case 5:
            console.log(hari + ' Mei ' + tahun)
            break
        case 6:
            console.log(hari + ' Juni ' + tahun)
            break
        case 7:
            console.log(hari + ' Juli ' + tahun)
            break
        case 8:
            console.log(hari + ' Agustus ' + tahun)
            break
        case 9:
            console.log(hari + ' September ' + tahun)
            break
        case 10:
            console.log(hari + ' Oktober ' + tahun)
            break
        case 11:
            console.log(hari + ' November ' + tahun)
            break
        case 12:
            console.log(hari + ' Desember ' + tahun)
            break
        default:
            console.log('Inputan bulan salah!Nilai variabel bulan harus antara 1 - 12')
    }
} else {
    console.log('Inputan hari salah! Nilai variabel hari harus antara 1 - 31')
}


console.log('\n\nNo 3\n')
// Soal no 4

var n = 7

for (var i = 1; i <= n; i++) {
    tanggaI = ''
    for (var j = 0; j < i; j++) {
        tanggaI += '#'
    }
    console.log(tanggaI)
}


console.log('\n\nNo 4\n')
// No 4

var m = 10;
var n = 0;
var o = '';
var p = ' - I Love '

for (var i = 1; i <= m; i++) {
    if ((i - n * 3) == 1) {
        console.log(i + p + 'programming')
    } else if ((i - n * 3) == 2) {
        console.log(i + p + 'Javascript')
    } else {
        console.log(i + p + 'VueJS')
        o += '==='
        console.log(o)
        n++
    }
}