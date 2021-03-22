// Global Variables
var i = 0;
var score = 0;
var count = 75;

var timer = document.getElementById("quiz-timer");
var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("quiz-container")
var quizQuestions = document.getElementById("quiz-questions");
var quizAnswers = document.getElementById("quiz-answers")
var nextQuestion
var highScore = document.getElementById("quiz-scores");



// Quiz Questions and Answers
var questions = [
    { quetion: "Dummy Question",
    options: ["A", "B", "C", "D"],
    answer: "A"
},
{ quetion: "Dummy Question",
    options: ["A", "B", "C", "D"],
    answer: "A"
},
{ quetion: "Dummy Question",
    options: ["A", "B", "C", "D"],
    answer: "A"
},
{ quetion: "Dummy Question",
    options: ["A", "B", "C", "D"],
    answer: "A"
},
{ quetion: "Dummy Question",
    options: ["A", "B", "C", "D"],
    answer: "A"
},
]

// Create start button to start quiz
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    quizQuestions.classList.remove('hide')
    setNextQuestion()
}

// Start timer after page loads

//function startTimer() {}

// Display questions to DOM (div/element/section - HTML5)
//function setQuizQuestion() {}

// Display multiple choice options (attach to DOM - div/element/section - HTML5)

// Attach time to DOM (see how much time remains  div/element/section - HTML5)

// IF answered correctly --> next question
//function selectAnswer() {}


// IF answered incorrectly --> subtract time clock

// Create function to move to next question

// Create function to deduct time from overall time

// Game over function --> the last of the questions and/or time runs outs (track it by time?)

// If question are answered --> game over --> stats ( if else/ if)

// if timer reaches zer0 --> game over --> score

// View score