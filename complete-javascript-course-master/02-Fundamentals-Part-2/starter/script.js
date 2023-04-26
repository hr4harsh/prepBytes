// function logger() {
// 	console.log("My Name is Harsh");
// }

// //calling running  or invoking
// logger();

// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// 	return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(0, 4);
// console.log(orangeJuice);

// const mixJuice = fruitProcessor(3, 2);
// console.log(mixJuice);

// // function declaratoin vs functoin expression

// function calAge1(birthYear) {
// 	return 2037 - birthYear;
// }

// const age1 = calAge1(1991);

// // function expression

// const calAge2 = function (birthYear) {
// 	return 2031 - birthYear;
// };

// const age2 = calAge2(1991);
// console.log(age1, age2);

// function declarations can have property of hoisting

// array functoin

// const calAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearUNtilRetirement = (birthyear, firstName) => {
// 	const age = 2023 - birthyear;
// 	const retirement = 65 - age;
// 	return `${firstName} will retire in ${retirement}  years.`;
// };

// console.log(yearUNtilRetirement(2000, "Harsh"));

// function calling other functions

// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
// 	return juice;
// }

// console.log(fruitProcessor(4, 0));

// codding challange 1

// const calcAverage = (x, y, z) => {
// 	// console.log(`Average of three numbers is ${(x + y + z) / 3}`);
// 	return (x + y + z) / 3;
// };
// // calcAverage(3, 3, 6);

// const checkWinner = (averageDolphins, averageKoalas) => {
// 	if (averageDolphins >= 2 * averageKoalas) return "Dolphin team wins!";
// 	else if (2 * averageDolphins <= averageKoalas) return "Kaolas team Wins";
// 	else return "Match Draw";
// };

// console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));
// console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));

// Arrays

// const friends = ["Harsh", "Nitin", "Rahul"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(years.length);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jacob";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = ["Jonas", "Schmedtman", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// to add element in array
//     push - to add at the end
//     unshift - to add element tat the start

// to remove elements in the array
//     pop - to remove element from the end
//     shift - to remove element from the start

// Coding challange-2

// const calcTip = (bill) => {
// 	const tip = new Array();
// 	const total = new Array();
// 	for (let i = 0; i < bill.length; i++) {
// 		if ((bill[i] <= 300) & (bill[i] >= 50)) {
// 			tip.push(bill[i] * 0.15);
// 		} else {
// 			tip.push(bill[i] * 0.2);
// 		}

// 		total.push(bill[i] + tip[i]);
// 	}
// 	return { tip, total };
// };

// const bill = [125, 555, 44];
// const ans = calcTip(bill);
// console.log("Tips for the given array are ", ans.tip);
// console.log("Total spending for the given bill are ", ans.total);

// Introduction to Objects

// dot and bracket notation
// dot is used in objects or curly braces data

// loops

// syntax for loop

// for(let i=0; i<navigator; i++)

// {

// }

// while loop syntax

// let i=0;
// while(i<10)
// {
//     // statements and expressions
//     i++;
// }
