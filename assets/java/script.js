//GOAL: I am taking a quiz that will regenerate after each question in answered, and will reduce the timer by one second each time the user incorrectly answers a question.

var timer = document.querySelector(".timer");


console.log(timer);

//TODO: create a click to start button that will start the timer, and take the user to the next screen.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",function(){
    var quizBox= document.querySelector(".quizbox");
    quizBox.removeAttribute("class", "hide");
    var rulesEl= document.querySelector(".rules");
    rulesEl.setAttribute("class", "hide");
    questionCard();
})

var questions = [
    {
        question: "Question 1 What is the correct HTML element for the largest heading:",
        choices: ["1", "2", "3", "4"],
        anwser: "1",

    },
    {
        question: "Question 2",
        choices: ["1", "2", "3", "4"],
        anwser: "1",

    },
    {
        question: "Question 3",
        choices: ["1", "2", "3", "4"],
        anwser: "1",

    },
    {
        question: "Question 4",
        choices: ["1", "2", "3", "4"],
        anwser: "1",

    }
];

function questionCard(){
    var currentquestion = questions[0].question
   var questionEl = document.querySelector(".question1");
   questionEl.innerHTML="<h2 id='question-number'>" + currentquestion +" </h2>" 
    questions[0].choices.forEach(function(choice){
        var button= document.createElement("button");
    })
}

var questionNumber = document.querySelector("#question-number");


//TODO: Figure out how to refresh the page to a new page each time the user clicks a response.


//TODO: Figure out the mathmatics of when user clicks this then this etc. 


//TODO: When a timer starts, presented with a question


//TODO: answer a question presented with another question


//TODO: answer a question incorrectly time is subtracted from the clock


//TO DO: all questions are answered or the timer reaches 0, the game is over, then the user enters initials to save score and can see the tally.
