//Q1: create h2 heading with hello and append from pratik using js

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText= h2.innerText + " from pratik";

// Q2: create 3divs with ommon class name-box. access them and add some unique text to each of them

// let divs=document.querySelectorAll(".box");
// console.log(divs); 
// divs[0].innerText ="div1";
// divs[1].innerText="div2";
// divs[2].innerText="div3";

let divs=document.querySelectorAll(".box");
console.log(divs); 
let i=0;
for(let div of divs)
{
    div.innerText=`Im in div ${i}`;
    i++;
}