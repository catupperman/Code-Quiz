//GOAL: I am taking a quiz that will regenerate after each question in answered, and will reduce the timer by one second each time the user incorrectly answers a question.

var timer = document.querySelector(".timer");
var secondsLeft = 90;
var score = 0;
var questionIndex = 0;
var questionEl = document.querySelector(".question1");
var timerInterval;

function clockTick(){
    
    timer.textContent = secondsLeft + " time left";
    secondsLeft--;
    if (secondsLeft<0){
        secondsLeft=0;
    }
    
}


function setTime() {
    timerInterval = setInterval(clockTick, 1000);
}

var initials = document.querySelector(".initials");


//TODO: create a click to start button that will start the timer, and take the user to the next screen.
//TODO: When a timer starts, presented with a question
var quizBox = document.querySelector(".quizbox");
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
    setTime(),
    quizBox.removeAttribute("class", "hide");
    var rulesEl = document.querySelector(".rules");
    rulesEl.setAttribute("class", "hide");
    questionCard();
}
)


//TODO: Figure out how to refresh the page to a new page each time the user clicks a response.
var questions = [
    {
        question: "Question 1 What is the correct HTML element for the largest heading:",
        choices: ["heading", "head", "<h1>", "<h6>"],
        anwser: "<h1>",

    },
    {
        question: "Question 2 What does CCS Stand for?",
        choices: ["Cascading Style Sheet", "Cascading Standing Sheet", "Crazy Silly Sheet", "Cascading Style Shore"],
        anwser: "Cascading Style Sheet",

    },
    {
        question: "Question 3 Which Javascript statement is used to declare a function-scoped variable?",
        choices: ["var", "function", "return", "option"],
        anwser: "var",

    },
    {
        question: "Arrays can be used to store",
        choices: ["numbers and strings", "Other Arrays", "Booleans", "All of the Above"],
        anwser: "All of the Above",

    }
];

//TODO: Figure out the mathmatics of when user clicks this then this etc. 
//TODO: answer a question presented with another question
function questionCard() {
    //render the question
    var currentquestion = questions[questionIndex].question
    questionEl.innerHTML = "<h2 id='question-number'>" + currentquestion + " </h2>";
    var answerBox = document.querySelector(".option-list");
    answerBox.innerHTML = "";
    //console.log(answerBox)

    //render the choices

    questions[questionIndex].choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice);
        button.onclick = changeContent;
        answerBox.appendChild(button);
    });
};
function changeContent() {
    if (this.value === questions[questionIndex].anwser) {
        score++;
        //console.log(score);
    } else {
        //TODO: answer a question incorrectly time is subtracted from the clock
        secondsLeft -= 1;
        if (secondsLeft<=0){
            endGame ();
        }
    }
    //questionEl.setAttribute("h2", "hide");
    //button.setAttribute("button", "hide");
    questionIndex++;
    if (questionIndex===questions.length){
        endGame ();
    } else{
        questionCard();
    }
}
var questionNumber = document.querySelector("#question-number");

//TO DO: all questions are answered or the timer reaches 0, the game is over 
function endGame (){
    clearInterval(timerInterval);
    var initials= document.createElement("textarea");
    var finalScore = score * secondsLeft;
    var scoreObject = {initials, finalScore};   
    quizBox.innerHTML="Final Score " + finalScore;
Highscores.push(scoreObject);

localStorage.setItem("highscores", JSON.stringify(Highscores))
}
//console.log(localStorage);
var Highscores = JSON.parse(localStorage.getItem("highscores",)) || [];
//console.log (Highscores);
Highscores.sort(function(a,b){
    return b.finalScore-a.finalScore;
})
// TODO: the user enters initials to save score and can see the tally.
//initials box, saved to local storage on Highscores.html









