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
    return n
}

var kalimat_1 = " Halo nama saya  Muhammad Iqbal Mubarok  "
var kalimat_2 = " Saya Iqbal "
var kalimat_3 = " Saya Muhammad Iqbal Mubarok "

console.log(jumlah_kata(kalimat_1))
console.log(jumlah_kata(kalimat_2))
console.log(jumlah_kata(kalimat_3))

