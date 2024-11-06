let userScore = 0 ; 
let computerScore = 0 ; 


const choices = document.querySelectorAll('.choice');
const mes = document.querySelector('#msg');
const userScoreP = document.querySelector('#user-score');
const CompScoreP = document.querySelector('#computer-score');

const genComputerchoice = ()=>{
    const option = ["rock","paper","scissors"];
    const num = Math.floor(Math.random()*3);
    return option[num];
}
const drawGame = ()=>{
    console.log("Game was Draw !");
    mes.innerText = "Game Was Draw";
    mes.style.backgroundColor = "#081b31"
}

const ShowWinner=(Userwin)=>{
    if(Userwin){
        userScore++;
        userScoreP.innerText = userScore;
        mes.innerText = "You Win";
        mes.style.backgroundColor = "green";
    }else{
        computerScore++;
        CompScoreP.innerText = computerScore;
        mes.innerText = "Oops, You Loss Play Again!";
        mes.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=>{
    console.log("user Choice is = ",userChoice);
    //Generate computer choice -> Modular 
    const compChoice = genComputerchoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        let Userwin = true;
        if(userChoice==="rock"){
            Userwin = compChoice==="paper" ? false :true;
        }else if (userChoice ==="paper"){
            Userwin = compChoice==="scissors" ? false :true;
        }else{
            Userwin = compChoice==="rock" ? false :true;
        }
        ShowWinner(Userwin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);

    })
})

