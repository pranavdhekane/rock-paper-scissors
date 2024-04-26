let myScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let myScorePara = document.querySelector("#my-score");
let compScorePara = document.querySelector("#comp-score");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        gamePlay(userChoice);
    });
});

const draw = () => {
    msg.innerText = `It's a Draw 😐, Play Again`;
    msg.style.backgroundColor = "azure";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        myScore++;
        myScorePara.innerText = myScore;
        msg.innerText = `You Win 😎, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose 😭, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const gamePlay = (userChoice) => {
    console.log("users choice ", userChoice);
    const compChoice = compGenerate();
    console.log("Comp choice", compChoice);

    if(userChoice === compChoice){
        draw();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , userChoice, compChoice);
    }

};

const compGenerate = () => {
    const options = ["rock" , "paper", "scissors"];

    let i = Math.floor(Math.random() * 3);

    return options[i];
}