//C6 script tag, console obj, alert, prompt, confirm, DOM, BOM, Window obj

// Q1: using prompt funct take age value and alert if he can drive or not

// let age = prompt("Enter age: ");
// age = Number.parseInt(age);

// const canDrive = (age) => {
//     return age >= 18 ? true : false;
// }

// if (canDrive(age)) {
//     alert("Yes you can drive");
// }
// else {
//     alert("You cannot drive");
// }


// Q2: use confirm to ask if he want to see prompt again in q1

// const canDrive = (age) => {
//     return age >= 18 ? true : false;
// }

// let runAgain = true;

// while (runAgain) {
//     let age = prompt("Enter age: ");
//     age = Number.parseInt(age);

//     if (canDrive(age)) {
//         alert("Yes you can drive");
//     }
//     else {
//         alert("You cannot drive");
//     }

//     runAgain = confirm("Do you want to play again?");
// }


// Q3: use console error to log error if user enters negative

// const canDrive = (age) => {
//     return age >= 18 ? true : false;
// }

// let runAgain = true;

// while (runAgain) {
//     let age = prompt("Enter age: ");
//     age = Number.parseInt(age);

//     if (age < 0) {
//         console.error("Age is negative");
//         break;
//     }
//     if (canDrive(age)) {
//         alert("Yes you can drive");
//     }
//     else {
//         alert("You cannot drive");
//     }

//     runAgain = confirm("Do you want to play again?");
// }


// Q4: change url to google.com if user enters num>4

// let number = prompt("Enter any number: ");
// number = Number.parseInt(number);

// if (number > 4) {
//     location.href = "https://google.com";
// }


// Q5: 

let color = prompt("Enter any color: ");
//number = Number.parseInt(number);

document.body.style.background=color;
