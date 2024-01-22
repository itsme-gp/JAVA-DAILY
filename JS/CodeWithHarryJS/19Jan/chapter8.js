//C8: innerHTML, outerHTML, HTML insertion methods, changing html classes using js, setInterval, setTimeout, browser events

// Q1: show diff alert when diff btns aree clicked
//in chapter8.html

// Q2:website capable of storing bookmarks of your fav website using href
//in chapter8.html

// Q3: Q2 using event listner

// document.getElementById("yt").addEventListener("click", function () {
//     window.location = "https://youtube.com";
// })


// Q4: keep fetching content of website every 5sec

// const fetchContent = async (url) => {
//     con = await fetch(url);
//     let a = await con.json();
//     return a;
// }


// setInterval(async function () {
//     let url = "https://jsonplaceholder.typicode.com/todos/1";
//     console.log(await fetchContent(url));
// },3000)


// Q5: glowing bulb effect using classlist toggle method

setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb");
},300)