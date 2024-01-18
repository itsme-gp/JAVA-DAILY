//C2:: operatior, expression,conditions

//Q1: use logical operator to find if age of person is between 10 and 20

let age = 12;
if (age > 10 && age < 20) {
    console.log("Between range");
} //Between range


// Q2: use of swtich


//Q3: find if num is div by 2 and 3

let num = 100;
if (num % 2 == 0 && num % 3 == 0) {
    console.log(num, " is divisible by 2 and 3");
}
else {
    console.log(num, " is not divisible by 2 and 3");
}  //100 ' is not divisible by 2 and 3'


//Q4: find if num is div by 2 or 3

let num2 = 100;
if (num2 % 2 == 0 || num2 % 3 == 0) {
    console.log(num2, " is divisible by 2 or 3");
} //100 ' is divisible by 2 or 3'


//Q5: using ternery operater pritn if you can drive or not

let agee = 35;
console.log(agee > 18 ? "You can drive" : " You cant drive"); //You can drive