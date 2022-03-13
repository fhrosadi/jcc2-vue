// No 1
console.log('No 1\n')

function jumlah_kata(string){
    // hapus spasi didepan
    while(true){
        if(string[0]==' '){
           string = string.substring(1)
        }else{
            break
        }
    }
    // hapus spasi dibelakang
    while(true){
        if(string[-1]==' '){
            string = string.substring(0, string.length - 1)
        }else{
            break
        }
    }
    // cek jumlah kata
    n = 0
    for(var i=0;i<string.length;i++){
        if(string[i]==' '){
            n++
            if(string[i+1]==' '){
                n = n-1
            }
        }
    }
    console.log(n)
}

var kalimat_1 = " Halo nama saya  Muhammad Iqbal Mubarok  "
var kalimat_2 = " Saya Iqbal "
var kalimat_3 = " Saya Muhammad Iqbal Mubarok "

jumlah_kata(kalimat_1)
jumlah_kata(kalimat_2)
jumlah_kata(kalimat_3)


// No2

console.log('\n\nNo 2\n')

function next_date(d,m,y){
    var nDayPerMonth = {
        Januari : 31,
        Februari : 28,
        Maret : 31,
        April : 30,
        Mei : 31,
        Juni : 30,
        Juli : 31,
        Agustus : 31,
        September : 30,
        Oktober : 31,
        November : 30,
        Desember : 31
    }
    // Cek Kabisat
    if((y%4==0) && (y%100!=0) || (y%400==0)){
        nDayPerMonth.Februari = 29
    }

    namaBulan = Object.keys(nDayPerMonth)
    nHari = Object.values(nDayPerMonth)

    if(d == nHari[m-1]){
        d =1
        if(m==12){
            m = 1
            y = y+1
        }else{
            m = m+1
        }
    }else{
        d=d+1
    }
    console.log('output: '+d+' '+namaBulan[m-1]+' '+y)

}

var tanggal = 28
var bulan = 2
var tahun = 2020

next_date(tanggal , bulan , tahun )
