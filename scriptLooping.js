//looping even
//-----LOOPING FOR-----

//const fruit = ['pisang', 'melon', 'pepaya', 'jeruk', 'apel'];
//const word = "Lorem Ipsum";

//const loopingId = document.getElementById("looping");
//let text = "";

//console.log(fruit.length); //menghasilkan angka 5 karena berdasarkan banyak buah
//for (let i = 0; i < fruit.length; i++) {
  //  console.log(fruit[i]);
    //text += `the fruit is ${fruit[i]} <br>`;
    //text += ` <h1 class = "fruit" > the fruit is ${fruit[i]} <h1>`; //penggunaan menggunakan petik atas miring dan luruss
   // text += 'the fruit is' + fruit [i] + '<br>'
   
//}
//console.log(text);
//loopingId.innerHTML = text;

//console.log (word.length);
//for (let h = 0; h < word.length; h++) {
  //  console.log(word[h]);
//}

//----FOR IN & FOR OFF----
const user = {fname: "Lorem", lname: "Ipsum", email:"loremipsum@gmail.com"};
const users = [
  {
    fullname :  "Cahya Wahyuni Putri",
    role : "Mahasiswa" ,
  },
  {
    fullname : "Bill Dellvin" ,           //index dari 0
    role : "Mentor" ,
  },
  {
    fullname : "Alif Fatwa " ,
    role : "Mahasiswa" ,
  },
  {
    fullname : "Syrif hidayatullah " ,
    role : "Mentor" ,
  },
];
 
// CARA AKSES OBJECT
//const fullname = user.fname + user.lname;
//console.log(fullname);

//const {fname, lname} = user;
//console.log(`${fname} ${lname}`)

//CARA AKSES ARRAY
const cahya = users[1].fullname;
console.log(cahya);

const bill = users[2].fullname;
console.log(bill);

const [alif, syarif] = users;
console.log(alif);
console.log(syarif);

//for (const key in user) {
 // console.log(key);
    
 // }
  //for (const {fullname, role } of users) {
    //console.log(fullname, "+", role);
  //}

users.map((val, index) => {
  console.log(val);
  console.log(index); //recomen dipake di reach
})

//----WHILE LOOPING----

//let i = 0;

//while(i < users.length) {
  //execute code block in here
  //console.log(i);
 // users[i].fullname = "pending";

  //execute code block in here
 // i++;
//}

//----DO WHILE----
do {
  i++;
}while (i< users.length);

console.log(users);