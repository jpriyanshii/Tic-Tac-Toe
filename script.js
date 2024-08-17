let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msgContainer");
let newPlayers = document.querySelector(".newPlayers");

let player0 = prompt("Enter the name of Player 1:");
let playerX = prompt("Enter the name of Player 2:");

msgContainer.classList.add("hidden");
let turn0 = true;  //Player X, Player O
const winningPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText="0";
            turn0 = false;
        }
        else{
            box.innerText="X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations ${winner}, You've won it!`;
    msgContainer.classList.remove("hidden");
    disableBoxes(); 
}

const checkWinner = () =>{
    for(let pattern of winningPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1===pos2 && pos2===pos3){
                if(pos1=="0"){
                    console.log("winner", player0);
                    showWinner(player0);
                }else{
                    console.log("winner", playerX);
                    showWinner(playerX);
                }
            }
        }
    }
}
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hidden");
}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);

//newPlayers.addEventListener("click", resetGame);
