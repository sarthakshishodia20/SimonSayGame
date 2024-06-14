let gameSequence=[];
let userSequence=[];

let started=false;
let level=0;

let btns=["yellow","red","blue","green"];

let h2=document.querySelector('h2');


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
    }
    started=true;
    levelUp();

});

function levelUp(){
    userSequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    // random flash
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomColor);
    // console.log(randomIndex);
    // console.log(randomBtn);
    gameSequence.push(randomColor);
    console.log(gameSequence);
    gameFlash(randomBtn);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function checkAns(idx){
    // console.log("current level",level);
    // let index=level-1;
    if(userSequence[idx]==gameSequence[idx]){
        // console.log("Same value");
        if(userSequence.length==gameSequence.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over!Your Score was <b>${level}</b><br>Press any Key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSequence.push(userColor);
    checkAns(userSequence.length-1);


}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset()
{
    started=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}