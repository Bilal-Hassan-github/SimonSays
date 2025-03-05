let gameseq = [];
let userseq = [];

let started = false;
let level = 0;


let h3 = document.querySelector('h3');


document.addEventListener('keypress', function(event) {

    if(started == false) {
        started = true;
        levelUp();
    }

    else {
        restart();
    }

});


function flash(btn) {

    btn.classList.add("flash1");

    setTimeout(function() {
        btn.classList.remove('flash1');
    }, 350);
    
}

let btns = ['btn1', 'btn2', 'btn3', 'btn4'];

function levelUp() {
    level++;
    h3.innerText = `Level - ${level}`;

    let random = Math.floor(Math.random() * 4);
    let randId = btns[random];
    let btn = document.querySelector(`#${randId}`);

    flash(btn);

    gameseq.push(randId);

    userseq = [];

}





function check(currentIndex) {
    if(userseq[currentIndex] === gameseq[currentIndex]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    }

    else {
        restart();
    }
}


function buttonPressed() {
    //here this is button element

    userseq.push(this.id);

    let currentIndex = userseq.length - 1
    check(currentIndex);  
}


let allbtns = document.querySelectorAll('.a');
for(bt of allbtns) {
    bt.addEventListener('click', buttonPressed);
}




function restart() {
    h3.innerText = `Game is Over! Press Enter to Restart the Game"\n" your score = ${level} `;
    started = false;
    level = 0;
    userseq = [];
    gameseq = [];
}