//Guess the Number and return the score

let correctNum = Math.round(Math.random() * 100);
//console.log(correctNum);
let score = 100;
let count = 0;

let userNum = prompt("Enter a Number: ");
userNum = Number.parseInt(userNum);
count++;



do {
    if (correctNum < userNum) {
        userNum = prompt(userNum + " is more. Enter a smaller number: ");
        userNum = Number.parseInt(userNum);
        count++;
    }
    else {
        userNum = prompt(userNum + " is less. Enter a greater number: ");
        userNum = Number.parseInt(userNum);
        count++;

    }
} while (correctNum != userNum);


console.log(`${correctNum} You got right Number. Congo`);
score = score - count;
console.log("Your score is: " + score);
