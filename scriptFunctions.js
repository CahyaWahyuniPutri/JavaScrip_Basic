//Mendefinisikan sebuah fungtions dan menggunakannya
// let name = '';
// const p1 = 5;
// const p2 = 10;

// function myFunction(p1, p2) {
//     return p1*p2;
// }

// //void memproses tapi tidak mereturn
// function onlyProccess(p1, p2){
//     console.log(p1 * p2);
// }

// function multiplyFunc(p1, p2) {
//     return p1* p2;
// }
// console.log(myFunction());

// console.log(multiplyFunction(4, 12));

// //function myFunction({fname, lname, email }){
//  //   const fullname = `${fname} ${lname}`;

//    // console.log(fullname);
//    // console.log(email);
// //}
// //myFunction({ fname: "bill", lname: "delvin, email: billdelvin@gmail.com"});

// function myFunction({tinggiBadan, minimumTinggi, callback }){
//     const minimumBeratBadan = callback(tinggiBadan, minimumTinggi);
//     console.log(minimumBeratBadan);
// }

// myFunction({ tinggiBadan: 180, minimumTinggi: 110, callback: minFunc});

// const list = document.getElementById("list");

// function getInputValue() {
//     const name = document.getElementById("nama").value;
//     list.innerHTML += `<li>${name}</li>`;
// }

// addEventListener("submit", (event) => {
//     event.preventDefault(); //agar tidak merefresh
//     const { nama } = event.target;
//     console.log(nama.value);
// });

const onSubmit = (event) => {
    event.preventDefault();
    const { nama, email } = event.target;

    list.innerHTML += `
    <li>
    <p>${nama.value}<p>
    <p>${email.value}<p>
    </li>`;
};

addEventListener("submit", onSubmit);
