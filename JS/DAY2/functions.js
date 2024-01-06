// Q1: pritn vowels

// function countVowels(str)
// {
//     let count=0;
//     for(const char of str)
//     {
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
//         {
//             count++;
//         }
//     }
//     console.log("vowels are",count);
// }

// const count=(str) =>{
//     let count=0;
//     for(const char of str)
//     {
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
//         {
//             count++;
//         }
//     }
//     console.log("vowels are",count);
// };

// Q2: print sq of each value

// let num=[1,2,3,4,5];
// num.forEach(element => {
//     console.log(element*element) ;
// });

// Q3: filter out marks geater  than 90

// let num=[12,44,98,92,34];
// let ans=num.filter((nums)=>{
//     return nums>90;
// });
// console.log(ans);

// Q4: make array of n number

// let num=prompt("Enter the number: ");
// let arr=[];
// for(let i=0;i<num;i++)
// {
//     arr[i]=i+1;
// }
// console.log(arr);

// Q5:use reduce method and do sum and product

let num=prompt("Enter the number: ");
let arr=[];
for(let i=0;i<num;i++)
{
    arr[i]=i+1;
}

console.log(arr);
let sum= arr.reduce((prev,num)=>{
    return prev+num;
});

console.log("Sum is",sum);


let product= arr.reduce((prev,num)=>{
    return prev*num;
});

console.log("Product is",product);

