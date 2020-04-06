// contoh NaN

// const nialiNaN = 5 * 'a';
// console.log(`nilai nan adalah ${nilaiNaN}`);

// const apakah = isNaN(nialiNaN) ? "nilaiNaN":"bukan nilai NaN";
// console.log(apakah);
// //NaN adalah Not a number

//contoh undefined
let nilaiUndefined;
console.log(`nilai dari undefined ${nilaiUndefined}`);
//undefined adalah nilai yang belum diberikan nilai

const siswa = {}

// contoh niali null
let nilai = null;
console.log (`nilai dari variable null adalah ${nilai}`);
const guru  = {
    nama: null,
}

// string object
const nama = "river huang";
console.log(nama)
console.log (`panjang nama variable adalah ${nama.length}`);
console.log (`panjang karakter 2 adalah ${nama.charAt(1)}`);
// console.log(`fungsi chartAT dengan -1 menghasilkan ${nama.charAt(-1)}`);
// console.log (`fungsi chartAT dengan parameter 10 menghasilkan ${nama.chartAt(10)}`);

//contoh parseInt
let nilaiKecepatan = "200 km";
let nilainyaAja = parseInt(nilaiKecepatan);
console.log(nilainyaAja);

//contoh parseFloat
let celcius = "34.5 derajat celcius";
let angkaCelcius = parseFloat(celcius);
console.log(angkaCelcius);


//decode uri
const alamatWebsite = "https://www.google.com?query=belajar html";
console.log(`encode ${encodeURI(alamatWebsite)}`);


let namaPanajang = nama + "Huang"
let namaPanjang2 = `${nama} Huang`;
console.log(`namaPanjang2`);
console.log(namaPanjang2.toUpperCase);
console.log(namaPanjang2.toLowerCase);



//serching for a substring
const kalimat= "saya ingin jago koding supaya bisa diterima di perusahaan google";
const kataPencarian = "google"
const kataDidapat = kalimat.indexOf(kataPencarian);
// if(kataDidapat > 0){
//     console.log(`ditemukan ${kataPencarian} ditemukan di index ${kataDidapat}`);
// }else (
//     console.log(`tidak ditemukan ${kataPencarian}`)
// )

//contoh includes 

if (kalimat.includes(kataPencarian)){
    console.log(`ditemukan ${kataPencarian} ditemukan di index ${kataDidapat}`);
}else{
    console.log(`kata ${kataPencarian} tidak ditemukan`)
}

//contoh special character usually prefix with "\"
console.log(`new line \n \n second newline`)

console.log(`dia berkata "ya itu benar"`)

//learn number 
const num = 3.14;
console.log(num.toFixed(2));

//learn array 


const namaSiswaImpactByte = ['sony','freedrick','indra','ozy','julia'];
namaSiswaImpactByte.push('evan');
console.log(namaSiswaImpactByte);
namaSiswaImpactByte.pop();
console.log(namaSiswaImpactByte)

//for in array
for(let index in namaSiswaImpactByte){
    console.log(namaSiswaImpactByte[index]);
}

//learn array method 
const namaSiswaUIB = ['agnes','bill','river','oriq','vincent']
const namaSiswaGlints = namaSiswaImpactByte.concat(namaSiswaUIB);
console.log(namaSiswaUIB);
console.log(namaSiswaImpactByte);

//learn array shorthing 
// namaSiswaGlints.sort((a,b) => a - b )

namaSiswaGlints.sort (function (a,b) {
    return a - b;
}) 

console.log(namaSiswaGlints.sort());

const number = [3,4,5,6,7,8,9]
console.log(number.sort());

// learn array join 
console.log(namaSiswaGlints.join(','))

namaSiswaGlints.forEach((siswa,num) =>{
    console.log(`nama siswa : ${siswa} absensi : ${num}`);
});


const namaSiswaDenganAsal = namaSiswaGlints.map((item,index,array) =>{
    return {
        noId : index + 1,
        name : item,
        asal : 'batam'
    }
});
console.log(namaSiswaDenganAsal);

// contoh array find 
const ditemukan = namaSiswaDenganAsal.find((item,index,array) => {
    if(item.name == 'bill')
        return true ;
    return false ;
});
console.log(ditemukan);


const ditemukan2 = namaSiswaDenganAsal.filter((item,index,array) => {
    if(item.asal == 'batam')
        return true ;
    return false ;
});
console.log(ditemukan);

// property value shorthand

const name = "Babe"
const lastName = "gokil"

const person = {
    name : name,
    lastName : lastName
}

console.log(person.name);
console.log(lastName);


// object assign 
 
const bodyMeasure = {
    height : '170 cm',
    weight : '80 kg',
    kelas : 'pekerja',
}

const PersonWithMesure = Object.assign({},person,bodyMeasure);
console.log(PersonWithMesure);