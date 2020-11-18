//variabel

//let & const

// let umur = 25;
// umur = 26;

// let nilai = 95.5;
// let sudahMenikah = true;
// let nama = "John Doe";
// console.log(umur);
// console.log(nama);
// const tahunLahir = 1999;
// console.log(tahunLahir);

// // Operator

// //Aritmatic operator

// let angka1 = 12;
// let angka2 = 13;
// console.log(angka1 + angka2);

// let namaDepan = "John";
// let namaBelakang = "Doe";
// console.log("Nama Saya adalah " + namaDepan + " " + namaBelakang);

// let angka = prompt("Masukan angka :");
// console.log("Angka yang anda masukan adalah :" + angka);

/*
EXERCISE #7 :
    Buatlah program javaScirpt untuk menghitung BMI (Body mass index)
    Rumus = berat (kg) / tinggi + tinggi)

    Gunakan prompt untuk meminta input pada user
*/

let beratBMI = prompt("Masukan Berat Badan Anda :");
console.log("Berat Badan anda adalah " + beratBMI + " " + "kg")

let tinggiBMI = prompt("Masukan Tinggi anda :");
console.log("Tinggi anda adalah " + tinggiBMI + "" + "cm")


let totalBMi;

totalBMi = beratBMI / tinggiBMI + tinggiBMI;
console.log("Body mass index(BMI) Anda adalah = " + totalBMi);
