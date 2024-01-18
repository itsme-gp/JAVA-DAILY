//C7: children element, parent and sibiling, element only navigation, table navigation,searching DOM, matches closet contains

// Q1: create nav bar, change color of first element to red
document.getElementsByTagName("nav")[0].firstElementChild.style.color="red";


// Q2: table without tbody. Use view page source button to check whether it has a tbody or not?

// Q3: elemnt with 3child. change color of first and last element to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color="green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green";


// Q4:  change bg of li 

//document.getElementById("nav1").style.background="white";
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background="white";
})

// Q5: 