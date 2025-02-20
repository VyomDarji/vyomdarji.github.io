let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
// const choices=Array.from(c);
const msg=document.querySelector("#msg");
const userS=document.querySelector("#user-score");
const compS=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissors
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        console.log("you win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userS.innerText=userScore;

    }
    else{
        msg.innerText=`You lost! Comp ${compChoice} beats your ${userChoice}`;
        console.log("comp win!");
        msg.style.backgroundColor="red";
        compScore++;
        compS.innerText=compScore;
    }
};

const playGame=(userChoice)=>{
    console.log("User choice=",userChoice);
    //generate computer choice -> modular
    const compChoice=genCompChoice();
    console.log("Comp choice=",compChoice);

    if(userChoice===compChoice)
    {
        //draw game
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }
        if(userChoice==="paper")
        {
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        if(userChoice==="scissors")
        {
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});