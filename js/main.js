const main = document.querySelector("#main"),
user = main.querySelector("#user"),
opponent = main.querySelector("#opponent"),
userImg = user.querySelector(".user_img"),
opponentImg = opponent.querySelector(".opponet_img"),
btns = main.querySelector(".board_btns"),
rack = btns.querySelector(".rack"),
scissors = btns.querySelector(".scissors"),
paper = btns.querySelector(".paper");

let userCount = 0, 
opponentCount = 0;

function check(){
    console.log("check");
}

function handCheck(num){
    switch(num){
        case -1:
            console.log("paper");   
            break;
        case 0:
            console.log("scissors");   
            break;
        case 1:
            console.log("rack");   
            break;
        case 2:
            console.log("paper");    
            break;
        default: 
            console.log("error");
            break;
    }
}

function opponentHandCheck(num){
    // const opponentHand = Math.floor(Math.random()*3);
    handCheck(num);
}

function userHandCheck(num){
    // const userHand = Math.floor(Math.random()*3);
    handCheck(num); 
}

function resultMatch(num1,num2){
    if(num1==0&&num2==2){
        num2-=3;
        console.log(num1, num2);
    }else if(num1==2&&num2==0){
        num1-=3;
        console.log(num1, num2);
    }else{
        console.log(num1,num2);
    }
    return userCount=num1, opponentCount=num2;
}

function resultWord(num1,num2){
    if(userCount<opponentCount){
        console.log("lose");
    }else if(userCount>opponentCount){
        console.log("win");
    }else if(userCount==opponentCount){
        console.log("dorw");
    }else{
        console.log("error!");
    }
}

function resultGame(num){
    opponentCount = Math.floor(Math.random()*3);
    resultMatch(num,opponentCount);
    userHandCheck(num);
    opponentHandCheck(opponentCount);
    resultWord(num, opponentCount);
}
const scissorsHand = () => resultGame(0);
const rackHand = () => resultGame(1);
const paperHand = () => resultGame(2);

scissors.addEventListener("click",scissorsHand);
rack.addEventListener("click",rackHand);
paper.addEventListener("click",paperHand);

// function init(){
    
// }

// init();
