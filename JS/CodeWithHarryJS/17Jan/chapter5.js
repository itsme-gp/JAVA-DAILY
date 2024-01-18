//C5: Array, ArrayMethods, loops with array, map filter, reduce

//Q1: crate array. tak input from user to add numbers to array

// let arr = [1, 2, 3, 4, 5, 85];
// let a = prompt("Enter the number");
// arr.push(a);
// console.log(arr);


//Q2: keep adding numbers until 0is enter

// let arr = [1, 2, 3, 4, 5, 85];
// let a;
// do {
//     a = prompt("Enter the number");
//     a = Number.parseInt(a);
//     arr.push(a);
// } while (a != 0);

// console.log(arr);

//Q3: filter for num div by 10 from a given array

let arr1 = [10, 20, 30, 4, 2, 45];
let sol = arr1.filter((x) => {
    return x % 10 == 0;
});
console.log(sol);


//Q4: create array of sq of given array

let sol2 = arr1.map((x) => {
    return x * x;
});
console.log(sol2);


//Q5: use reduce to cal factorial

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sol3 = arr2.reduce((x1, x2) => {
    return x1 * x2;
});
console.log(sol3);