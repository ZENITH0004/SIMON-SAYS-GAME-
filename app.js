let gameseq=[];
let userseq=[];

let btns = ["yellow","red","purple","green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
if(started==false) {
    console.log("GAME IS STARTED");
    started = true;

    levelup();
}
});

function gameflash(btn)  {
 btn.classList.add("flash");
 setTimeout(function()  {
    btn.classList.remove("flash");
    
 }, 250);

}

function userflash(btn)  {
 btn.classList.add("userflash");
 setTimeout(function()  {
    btn.classList.remove("userflash");
    
 }, 250);

}

function levelup () {
    userseq = [];
    level++;
 h2.innerText = `level ${level}`;
  
 let randIdx = Math.floor(Math.random() * 4);
 let randcolor = btns[randIdx];
 let randbtn = document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);
 gameflash(randbtn);
}

function checkans(idx) {
    if (userseq[idx] === gameseq[idx]) {
        console.log("CORRECT");
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over!  Your score was <b> ${level} </b> <br>Press Any Key to Restart`;
    document.querySelector("body").style.backgroundColor = "red";
     setTimeout (function() {
      document.querySelector("body").style.backgroundColor = "white";   
     },150);
     reset();
        gameseq = [];
        level = 0;
    }
}
 

function btnPress() {
    let btn = this;
    userflash(btn);

    usercolor =btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener ("click", btnPress);
}

function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}