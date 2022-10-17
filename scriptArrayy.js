
//---METHOD ARRAY---
//let fruits = ["pisang", "pepaya", "kiwi", "apel", "jeruk", "semangka"]; //fruits adalah array dan buah adlah values/isi dalam array
let fruit = ["lemon", "durian", "buah Pir", "sirsak", "melon"];

console.log(fruits); //method array
//console.log (fruits.toString()); //method string
//console.log(fruits.join(", "));


//POP ARRAY 
//fruits.pop();  // pop berfungsi meghilangkan value dalam array di terakhir
//console.log (fruits);

//PUSH ARRAY
//fruits.push("Durian"); // push berfungsi menambahkan isi array dari terakhir
//console.log(fruits);

// SHIFT ARRAY 
//fruits.shift();     // shift berfungsi untuk menghilangkan value dalam array dari depan juga bisa menggantikan isinya
//console.log(fruits);

// UNSHIFT ARRAY
//fruits.unshift();   // unsift berfungsi untuk menambahkan isi array dari depn
//console.log(fruits);
//Fruits.lenght berfungsi untuk mengetahui berapa banyak isi array

//...MENGGABUNGKAN 2 ARRAY...
//const newArray = []     //mengatur posisi array
//const joinArray = newArray.concat(fruit, fruits); 
//const joinArray = [...fruits,...fruit]; //ES6 method
//console.log(joinArray);

//---SPLICE & FILTER--- untuk remove element menghilangkan element tanpa mennggalkan jejak
const addItem = fruit.splice(2,0, "buah naga", "kiwi"); //0 diawal adalah index, 2 dalah posisi value yang mau diambil
console.log(addItem);

const filterFruit = fruit.filter((val) !== 'kiwi' && val !== "Kiwi"); 
console.log(filterFruit);   //console.log untuk menampilkan console di crhome

//SLICES --- meremove posisi array tapi dia mereturn array baru (recomend pakai), tidak meremove array aslinya
const slicesFruit = fruit.slice(1);
console.log(slicesFruit);

 //---ARRAY FIND & FINDINDEX---
//berfungsi mereturn apa yang kita cari, findindex memberi tau posisi value
 let users = [
    { fname: "Cahya", lname: "Wahyuni"},
    { fname: "Bill", lname: "Delvin"},
    { fname: "Arum", lname: "Lestiroyini"},
 ];

 const arum = users.find((val) => val.fname === "Arum");
 console.log(arum);

 const posisiArum = users.findIndex((val) => val.fname === "Arum");
 console.log(posisiArum);








//VALUE DATABASE
//const user = [
  //  {
    //    fullname :''
    //}
//]

//VALUES COSTUME
//const listUser = [
  //  {
    //    fullname :''
    //}
//]

//listUser.push();