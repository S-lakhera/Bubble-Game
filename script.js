let timer = 30;
let score = 0;
let hit;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hit;
}

function makeBubble(){
    let clutter = "";
    for(let i=1; i<=70; i++)
    {
        let num = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${num} </div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function gameOver(){
    document.querySelector("#pbtm").innerHTML = "";    
    let gameOverDiv = document.createElement("div");
    gameOverDiv.id = "gameOver";
    gameOverDiv.innerHTML = `<h1>Game Over</h1> <br> <h1> Your Score is ${score} </h1>`;
    document.querySelector("#pbtm").appendChild(gameOverDiv);
}

function runTimer(){
    let timerInt = setInterval(() => {
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else 
        {
            clearInterval(timerInt);
            gameOver();
        }
    }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click",(details)=>{
    let clickedNum = Number(details.target.textContent);
    if(clickedNum === hit)
    {
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

getNewHit();
runTimer();
makeBubble();