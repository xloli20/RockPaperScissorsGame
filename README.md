# Rock Paper Scissors Game

Rock Paper Scissors is a simple game played between you and the computer, in which each of you simultaneously forms one of three shapes. These shapes are "rock", "paper", and "scissors". The Objective Of Rock, Paper, Scissors Is To Defeat Your Opponent By Selecting A Weapon That Defeats Their Choice Under The Following Rules:

  - Rock Smashes (or Blunts) Scissors, So Rock Wins.
  - Scissors Cut Paper, So Scissors Win.
  - Paper Covers Rock, So Paper Wins.

Open and view the Project using the `.zip` file provided or at my [GitHub Repository](https://git.generalassemb.ly/xloli20/RockPaperScissorsGame)

The project is also hosted on [GitHub Pages](https://pages.git.generalassemb.ly/xloli20/RockPaperScissorsGame/)

### Tech

Rock Paper Scissors Game uses a few number of technologies:

* [HTML]() for structuring the web page.
* [CSS]() - for styling the web page.
* [JS]() - for adding interactivity to a website
* [vanilla JS]() - duh

### Users Stories

  - as a gamer, I want to assign my name, so that I can start the game.
  - as a gamer, I want to hear music playing while I am playing, so that I play with more excitment.
  - as a gamer, I want to have the ability to input my choice whether it's rock, paper or scissors, so that my choice get compare with the oponent choice.
  - as a gamer, I want to see the oponent choice, so that I can know what they choose compare to mine.
  - as a gamer, I want to see the result whether I won, lose or there was a draw, so I can know what the result is.

### Wireframes 

You can see the wireframes pages [here](wireframes.md)

### My development process
I started to structure the web page with Html and style it with CSS. Second, I started to add background music in the Html and then implement the mute/unmute button from the javascript. Then, I implemented the transition to the next page from the javascript by adding an event listener to the play button. The next page has a button to let the gamer choose one of the three choices(rock, paper, scissor) by writing it into the prompt. Then the app will randomize a choice for the computer using the Math.random function. Finally, the app will check who wins by using if statements, if user="rock" and computer="paper" then the result variable will be store the "lose" value and so on... finally, the app will select the elements from the DOM that responsible for displaying the result and apply the result to it using innerHTML.

### unsolved problems which would be fixed in future iterations.
There's no unsolved problem but there's some features that shall be added to inhance the game.
  - Using images of Rock, paper and Scissors instead of letting the user typing it directly.

### Describe how you solved for the winner
The app will find the winner by checking based on the rules mentioned above, so if we want to implement it. Let's take the first rule, which is "Rock Smashes (or Blunts) Scissors, So Rock Wins." so this will be implemented something like, ```ssh if (computer == 'scissors' & user == 'rock') {
        result = 'win'
    } else if (computer == 'rock' & user == 'scissors'){
        result = 'lose'
    } ``` 

### Describe how some of your favorite functions work
``` ssh
mute.addEventListener('click', function () {
    if (document.getElementById('player').muted == true) {
        document.getElementById('player').muted = false;
        mute.src = "images/ic-unmute.png"
    } else {
        document.getElementById('player').muted = true;
        mute.src = "images/ic-mute.png"
    }
})
```
What the function inside the event listener for the mute var will do is, to check from the player which is an audio tag in Html if it's muted or not. If it's muted then, it will unmute it by assigning the value of the muted property to false. Also, it will change the source image to 'ic-unmute.png' for better UI. And vice versa will be for the other condition.

## Authors

#### Alaa Alzahrani
* [GitHub](https://github.com/xloli20)

## Resources

* [W3Schools](https://www.w3schools.com/)
* [MDN](https://developer.mozilla.org/en-US/)

