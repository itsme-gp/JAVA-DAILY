const URL= "https://cat-fact.herokuapp.com/facts";

// let promise= fetch(URL);
// console.log(promise);

// const getFacts= async() =>{
//     console.log("getting data....");
//     let response= await fetch(URL);
//     console.log(response);
// };

//gettign actual data

const factPara=document.querySelector("#fact");
const btn= document.querySelector("#btn");

const getFacts= async() =>{
    console.log("getting data....");
    let response= await fetch(URL);
    console.log(response);
    let data= await response.json();
    factPara.innerText =data[0].text;
};

btn.addEventListener("click",getFacts);