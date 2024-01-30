let gameSeq = [];
let userSeq = [];
let level = 0;
let start = false;
let h3 = document.querySelector("h3")
let colorArr = ["yellow", "red", "green", "blue"]

document.addEventListener("keypress", function () {
    if (start == false) {
        start = true;
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 250);
}

function levelUp() {
    level++;
    userSeq = [];
    h3.innerText = (`Score: ${level}`);
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colorArr[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameFlash(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}

function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(() => {
        btn.classList.remove("userflash")
    }, 250);
}


let btns = document.querySelectorAll(".btn");

for (let btn of btns) {
    btn.addEventListener("click", function () {
        let btn = this;
        userFlash(btn);
        let userColor = btn.getAttribute("id");
        userSeq.push(userColor)
        console.log(userSeq)
        match(userSeq.length - 1);
    })
}


function match(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) { // Use == for checking equality and type
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerText = "GAME OVER! Press any key to start";
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = 'white';
        }, 250);
        reset();
    }
}
function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}