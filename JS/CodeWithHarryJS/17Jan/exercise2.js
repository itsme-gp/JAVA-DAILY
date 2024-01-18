//enter snake water gun game win loose alert, use confirm and prompt if needed

let randNum = Math.round(Math.random() * 2);
const choices = ["snake", "water", "gun"];

let randChoice = choices[randNum];

let userChoice = prompt("Enter your choice(S,W,G): ");


if (randChoice == userChoice) {
    alert("Match Drawn");
}
else if (userChoice == "snake") {
    randChoice == "water" ? alert("Congo. You win! Comp choice was: " + randChoice) : alert("Sorry, you lost. Comp choice was: " + randChoice);
}
else if (userChoice == "water") {
    randChoice == "gun" ? alert("Congo. You win! Comp choice was: " + randChoice) : alert("Sorry, you lost. Comp choice was: " + randChoice);
}
else {
    randChoice == "snake" ? alert("Congo. You win! Comp choice was: " + randChoice) : alert("Sorry, you lost. Comp choice was: " + randChoice);
}
