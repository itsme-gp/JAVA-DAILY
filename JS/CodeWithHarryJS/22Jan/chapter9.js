// C9:callbacks, promises, try catch, async await

// Q1: load js file in browser using promises. .then -alert when load is complete.

// const loadJS = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(src + " Done");
//         }
//         document.head.append(script);
//     })
// }

// let a = loadJS("excercise4.js");
// a.then((value) => {
//     console.log(value);
// });


// Q2: Q1 using async await

// const main = async () => {
//     let a = await loadJS("excercise4.js");
//     console.log(a);
// }
// main();


// Q3: create promise which reject after 3sec. Use async await to get value. use try catch to handle

// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("This is not acceptable"));
//         }, 3000)
//     })
// }

// let a = async () => {
//     try {
//         let c = await p();
//         console.log(c);
//     }
//     catch (err) {
//         console.log("This error is handled")
//     }
// }
// a();


// Q4: using promise. all inside async await to await 3promises. compare where await is one by one

let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    })
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 2000);
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    })
}

const run = async () => {
    console.time("run");
    let a1 = await p1();
    let a2 = await p2();
    let a3 = await p3();
    console.log(a1, a2, a3);
    console.timeEnd("run");
}
run();

const run2 = async () => {
    console.time("run2");
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3= await Promise.all([a1,a2,a3]);
    console.log(a1a2a3);
    console.timeEnd("run2");
}
run2();