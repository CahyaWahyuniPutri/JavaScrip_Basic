let userInput = prompt("masukkan nilai anda?"); //get userInput value

const checkInteger = /\D/.test(userInput);

//check if value should be integer
if (checkInteger === true) {
    alert("Harap masukkan angka!");
} else {
    const convertValue = +userInput;

    if (convertValue <0 || convertValue > 100) alert("Nomor tidak berada disnatara 0-100");
    if (convertValue >= 1 && convertValue <= 30) alert ("D");
    if (convertValue >= 31 && convertValue <= 59) alert ("C");
    if (convertValue >= 60 && convertValue <= 79) alert ("B");
    if (convertValue >= 80 && convertValue <= 100) alert ("A");
}