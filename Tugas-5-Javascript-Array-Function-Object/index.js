// Soal 1
console.log('No 1\n')

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

for(var i=1;i<daftarHewan.length+1;i++){
    for (var j = 0; j < daftarHewan.length; j++) {
        var stringJ = daftarHewan[j]
        if(i==stringJ[0]){
            console.log(stringJ)
        }
    }
}

// Soal 2
console.log('\n\nNo 2\n')

function introduce (data){
    return ('Nama Saya '+data.name+', umur saya '+data.age+' tahun, alamat saya di '+data.address+', dan saya punya hobby yaitu '+data.hobby)
}

var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }

var perkenalan = introduce(data)
console.log(perkenalan)

// Soal 3
console.log('\n\nNo 3\n')

var vokal = 'aiueoAIUEO'

function hitung_huruf_vokal(string){
    nVokal=0
    for (var i = 0; i < string.length; i++) {
        for(var j=0;j<vokal.length;j++){
            if (string[i]==vokal[j]) {
                nVokal++                
            }
        }
    }
    return nVokal
}

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2)


// Soal 4
console.log('\n\nNo 4\n')


function hitung(number) {
    var init = -2;
    return (number*2+init)
}

console.log( hitung(0) )
console.log( hitung(1) )
console.log( hitung(2) )
console.log( hitung(3) ) 
console.log( hitung(5) ) 