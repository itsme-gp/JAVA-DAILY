//setTimeout::

// function getData(dataId){
//     //2sec
//     setTimeout( ()=>{
//         console.log("data", dataId);
//     },2000);
// }

//callback hell::

// function getData(dataId,getNextData){
//     //2sec
//     setTimeout( ()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1, () => {
//     console.log("getting data2");
//     getData(2, () => {
//         console.log("getting data3");
//         getData(3, () => {
//             console.log("getting data4");
//             getData(4);
//         });
//     });
// });

//promises:: 

// function asyncFunct1(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");    
//         }, 4000)
//     });
// }

// function asyncFunct2(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");    
//         }, 4000)
//     });
// }

// //promise chain
// console.log("fetching data1");
// let p1= asyncFunct1();
// p1.then((res)=>{
//     console.log("fetching data2");
//     let p2=asyncFunct2();
//     p2.then((res)=>{});
// })

//Async-Await

function getData(dataId) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    }); 
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}