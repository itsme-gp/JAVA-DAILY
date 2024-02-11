// fetch API, cookies, storage 

// Q1: fetch any fre api and poplate data
const city = document.querySelector(".city input")
//console.log(city.value);
let cityName = "";

city.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        console.log(city.value);
        cityName = city.value;
        console.log(cityName);
        Main();
    }

})


const Main = () => {

    console.log(cityName);
    uurl = `https://goweather.herokuapp.com/weather/${cityName}`;;
    console.log(uurl);

    let response = fetch(uurl);
    response.then((v) => {
        return v.json();
    }).then((v) => {
        console.log(v);
        console.log(v.forecast);
        ihtml = "";
        for (items in v.forecast) {
            console.log(v.forecast[items]);
            ihtml += `
        <div class="card" style="width: 18rem;">
            <p class="card-head">City Name: ${cityName} </p>
            <div class="card-body">
              <h2 class="card-title">Day ${v.forecast[items].day}</h5>
              <p class="card-text">Temp: ${v.forecast[items].temperature}</p>
              <p class="card-text">Wind: ${v.forecast[items].wind}</p>
            </div>
          </div>
        `
        }
        cardContainer.innerHTML = ihtml;
    })


}


// Q2: note saving app in localstorage

let noteUser=prompt("Enter a note: ");
localStorage.setItem("note",noteUser);


// Q3: Fetch note which was saved

let n=localStorage.getItem("note");
alert("Your note is "+n);


// Q4: delete the note from the previous que

let c=confirm("Do you want to delete note? ");
if(c)
{
    localStorage.removeItem("note");
}



