
//mute the audio and change the src img
var mute = document.querySelector(".mute");
mute.addEventListener('click', function () {
    if (document.getElementById('player').muted == true) {
        document.getElementById('player').muted = false;
        mute.src = "images/ic-unmute.png"
    } else {
        document.getElementById('player').muted = true;
        mute.src = "images/ic-mute.png"
    }
})

//store the nickname when user click play and move to game.html
var play = document.querySelector("#play");
if (play != null) {
    play.addEventListener('click', function () {
        window.location.replace("game.html");
        nickname = document.querySelector("#play").value;
    })
}

var compChoice = document.querySelector(".compChoice");
var displayResult = document.querySelector(".result");

// Function to enter choice from user and to create a random choice by computer.
function myfunction() {

    var user = prompt('Choose rock, paper or scissors')
    var computer, ran
    var ran = Math.floor(Math.random() * 3)
    if (ran == 1) {
        computer = 'rock'
    } else if (ran == 2) {
        computer = 'paper'
    } else {
        computer = 'scissors'
    }
    check(computer, user)
}
// Function to find out wheather you win/lose/draw.
function check(computer, user) {
    var result
    if (computer == 'rock' & user == 'paper') {
        result = 'win'
    } else if (computer == 'rock' & user == 'scissors') {
        result = 'lose'
    } else if (computer == 'paper' & user == 'rock') {
        result = 'lose'
    } else if (computer == 'paper' & user == 'scissors') {
        result = 'win'
    } else if (computer == 'scissors' & user == 'rock') {
        result = 'win'
    } else if (computer == 'scissors' & user == 'paper') {
        result = 'lose'
    } else if (computer == 'scissors' & user == 'paper') {
        result = 'lose'
    } else if (computer == user) {
        result = 'draw'
    }

    if (result != null) {
        // to print the result and computer choice
        compChoice.innerHTML = 'Computer choose ' + computer;

        if (result == 'draw') {
            displayResult.innerHTML = result;

        } else {
            displayResult.innerHTML = 'You ' + result;
        }
    } else {
        compChoice.innerHTML = 'please choose Rock, Paper and Scissors only!';
        displayResult.innerHTML = "";
    }
}