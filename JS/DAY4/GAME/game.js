let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompChoice= ()=>{
    const options=["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame =()=>{
    //console.log("game was draw");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="aqua";
}

const showWinner= (userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        //console.log("You win!!");
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        //console.log("You lose");
        msg.innerText=`You Lost..  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame= (userChoice)=>{
    //console.log("User choice = ",userChoice);
    const compChoice = gencompChoice();
    //console.log("Comp choice = ",compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="stone"){
            userWin= compChoice==="paper" ? false :true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissor"? false: true;
        }else{
            userWin= compChoice==="stone"?false:true;
        }  
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
//console.log(choice);
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    //console.log("choices was clicked",userChoice);
    playGame(userChoice);
});

});