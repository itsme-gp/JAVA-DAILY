//C4: string, string methods

//Q1: cehck output

console.log("har\"".length);
//4

//Q2: explore startWith endWith and incldes function

let fname = "Salman";
console.log(fname.includes('s')); //false
console.log(fname.endsWith('n'));   //true
console.log(fname.startsWith('d'));  //false

//Q3: convert given string to lowercase

console.log(fname.toLowerCase()); //salman

//Q4: extract the amount of the string

let sent = "Please give me Rs 1000";
let amount = sent.slice("Please give me Rs ".length);
console.log(amount); //1000

//Q5: change 4th char of string. can we do?

let str = "Mobile"; //cant change string is immutable
