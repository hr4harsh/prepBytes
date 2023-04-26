/* 
let js = "amazing";

if (js === "amazing") {
	// alert("JavaScript is Working");
	console.log("Javascript is working.");
}

console.log("This is the learnig of console.");

// variable

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javaScriptIsFun = "YES";
// console.log(typeof javaScriptIsFun);

// var let const
// let age = 10;
// age = 31;

// const birth = 1991;
// // birth = 1990;

// // const job ; //it is not correct

// const job = "programer";

// var salary = 1000000;

// lastName = "Rao";

// console.log(lastName);

// mathemetical operators

// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;

// console.log(ageJonas, ageSarah);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";

// console.log(firstName + "   " + lastName);

// //asignment operators

// let x = 10 + 5;
// x += 10;
// x *= 4;
// console.log(x);

// // Comparison Operator

// console.log(ageJonas >= ageSarah);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// task 1

// const massMark = 78;
// const heighMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heighMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// Strings and Template Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
// 	"I'm" + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}! `;

// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(
// 	"String with \n\
// multiple \n\
// lines"
// );

// console.log(`String with
// multiples
// lines`);

// if else

// const age = 14;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
// 	console.log("Sarah can start driving license ");
// } else {
// 	const yearsLeft = 18 - age;
// 	console.log("Sarah is small in age so she cannot star driving lincense.");
// 	console.log(`Sarah have to wait another ${yearsLeft} years`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
// 	century = 20;
// } else {
// 	century = 21;
// }

// console.log(century);

// const inputYear = "1991";
// console.log(Number(inputYear) + 18, inputYear);
// console.log(18 + inputYear);

// //5flasy values: 0, "", undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// Equality Operators

const age = 18;

if (age === 18) console.log("You became an adult!");
console.log(18 == "18");

// boolean logic

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : bill / 5;

console.log(
	`The bill was ${bill}, the tip was ${tip}, and the total value ${
		tip + bill
	}`
);
