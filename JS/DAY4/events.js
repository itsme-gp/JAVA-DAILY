let btn1=document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("btn1 was clicked..");
//     let a=25;
//     a++;
//     console.log(a);
// }

// btn1.onclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.ClietnX, e.ClientY);
// }

// btn1.addEventListener("click",()=>{
//     console.log("btn1 was clickeddddd");
// })


// Q: make bg change on click .

// let mode= document.querySelector("#mode");
// let currMode="light";

// mode.addEventListener("click", ()=>{
//     if(currMode=="light")
//     {
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
    
//     console.log(currMode);
// });


let mode= document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");

mode.addEventListener("click", ()=>{
    if(currMode=="light")
    {
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    
    console.log(currMode);
});

