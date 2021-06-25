//GOAL: I am taking a quiz that will regenerate after each question in answered, and will reduce the timer by one second each time the user incorrectly answers a question.

var timer = document.querySelector(".timer");
var secondsLeft = 90;
var score = 0;

//console.log(timer);

//TODO: create a click to start button that will start the timer, and take the user to the next screen.
//TODO: When a timer starts, presented with a question
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
    var quizBox = document.querySelector(".quizbox");
    quizBox.removeAttribute("class", "hide");
    var rulesEl = document.querySelector(".rules");
    rulesEl.setAttribute("class", "hide");
    questionCard();
})
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + "time left";

        if (secondsLeft === 0) {
            //TODO: goes to the next page second HTML
        }
    }
    )
}

//TODO: Figure out how to refresh the page to a new page each time the user clicks a response.
var questions = [
    {
        question: "Question 1 What is the correct HTML element for the largest heading:",
        choices: ["heading", "head", "<h1>", "<h6>"],
        anwser: "<h1>",

    },
    {
        question: "Question 2 What does CCS Stand for?",
        //TODO:open ended response, text box for choice.
        choices: [""],
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
function questionCard() {
    var currentquestion = questions[0].question
    var currentChoices = questions[0].choices
    var questionEl = document.querySelector(".question1");
    var choicesEl = document.querySelector(".option-list");
    questionEl.innerHTML = "<h2 id='question-number'>" + currentquestion + " </h2>";
    choicesEl.innerHTML = "<li id 'choices-number'>" + currentChoices + "</li>";
    
    questions[0].choices.forEach(function (choice) {
        var button = document.createElement("button");
    });
};

var questionNumber = document.querySelector("#question-number");








//TODO: answer a question presented with another question


//TODO: answer a question incorrectly time is subtracted from the clock


//TO DO: all questions are answered or the timer reaches 0, the game is over, then the user enters initials to save score and can see the tally.
