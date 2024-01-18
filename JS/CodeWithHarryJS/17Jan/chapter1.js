//c1- const,let,vr,primitives,obj

//Q1: create var and add number to it-- add both 

let name = "pratik";
let b = 9;
console.log(name + b); //pratik9


//Q2: find type of above:

console.log(typeof (name + b)) //string


//Q3 create const obj can we change it to hold number?

const obj1 = {
    name: "prat",
    age: 18
}
console.log(obj1); //{name: 'prat', age: 18}
//obj1=5;  // const cant be changed


//Q4: add new key to const obj in q3. can we do it?

obj1.weight = 20; //possible

console.log(obj1); //{name: 'prat', age: 18, weight: 20}


//Q5: word dict

const dict = {
    a: "AAAAAAA",
    b: "BBBBBBB",
    c: "CCCCCCCC"
}

console.log(dict['a']); //AAAAAAA