console.log(1 + 3);
console.log(51 * 3);

let a = 5;
let A = 15;
const b = 6;
console.log(a);
console.log(b);

a = 7;
console.log(a);
console.log(typeof a);
//b = 15; // константе нельзя присвоить новое значение

let c;
c = a + b;

let userName = "Nadya";
let userAge = 18; 


// String
let userCity = 'Minsk';
console.log(userCity);
console.log(typeof userCity);
let userComment = `Text1 
                    text2`;

// Number
let userRoom = 15;

//Boolean
let userStatus = true;
let userIsAdmin = false;
console.log(typeof userStatus, typeof userIsAdmin);

// Undefined
let userCountry;
console.log(userCountry);
console.log(typeof userCountry)

// console.log(y); //будет ошибка, такой переменной нет

// Null

let userSalary = null;
console.log(userSalary);
console.log(typeof userSalary);

console.log(4 + 2); //6
console.log(4 / 2); //2
console.log(4 * 2); //8
console.log(4 - 2); //2
console.log(4 % 2); //0

console.log("4" / 2); //2
console.log("4" / "2"); //2

console.log("Hello4" / 2); // NaN - Not a Number
console.log( typeof ("Hello4" / 2));

console.log(1 / 0); //Infinity
console.log(-1 / 0); //-Infinity

console.log(1 + 3); //4
console.log("1" + 3); // "13"
console.log("1" + "3"); //"13"

console.log(String(3)); //"3"
console.log(typeof String(3));
console.log(String(false)); // "false"
console.log(String(15) + String(15)); // "1515"


console.log(Number("15") + Number("15")); //30
console.log(Number(true)); // 1
console.log(Number(false)); // 0