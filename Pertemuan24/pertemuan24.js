let nilai = [90,80,85,75,95];

for(let i = 0; i < nilai.length; i++) {
    console.log("Nilai = ", nilai[i] + 5);
}

console.log(nilai);

let john = ["John", "Doe", 33, true];

console.log(john[john.length - 1]);
console.log(john);

//toString()
console.log(john.toString());

//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push()
john.push(true);
john.push("Hello");
console.log(john);

//shift()
john.shift();
console.log(john.join(" - "));

//unshift()
john.unshift("John");
john.unshift("Prof");
console.log(john.join(" - "));

//splice()
let buah2 = ["Pisang", "Jeruk", "Apel", "Mangga"];

buah2.splice(2, 0, "Lemon", "Kiwi");

console.log(buah2);

//concat array
let buah = ["Mangga", "Apel", "Jeruk"];
let sayur = ["Kangkung", "Sawi", "Corn"];

let makanan = buah.concat(sayur)
console.log(makanan);

//slice()
let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih);
console.log(cemilanManis);

//sort()
let buahs = ["Jeruk", "Apel", "Mangga", "Jambu"];

buahs.sort();

console.log(buahs); // Output: ["Apel", "Jambu", "Jeruk", "Mangga"]

//reverse()
let buahr = ["Jeruk", "Apel", "Mangga", "Jambu"];

buahr.reverse();

console.log(buahr);