//C3:: for loop, while loop, functions

//Q1: print mark of student in obj using for

const marks = {
    har: 98,
    roha: 99,
    akash: 45
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
//the marks of har are 98
//the marks of roha are 99
//the marks of akash are 45


//Q2: q1 using for in loop

for (let key in marks) {
    console.log("marks of " + key + " is " + marks[key]);
}
// marks of har is 98
// marks of roha is 99
// marks of akash is 45


//Q3: print try again until user enters correct number:

let cnumber = 1;
let i = prompt("Enter the number");
while (i != cnumber) {
    console.log("Try Again");
    i = prompt("Enter the number");
}
console.log("number matched");


//Q4: funct to find mean of 5 numbers

const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5
}