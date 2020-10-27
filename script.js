let startEl = document.getElementById("start");
let timerEl = document.getElementById("timer");
let questionsEl = document.getElementById("questionsArea");
let initialsEl = document.getElementById("initials");
let scoresEl = document.getElementById("scores");
let initialsButton = document.getElementById("initialButton");

let questions = [
  {
    ques: "1)	What is the correct tag to bold an element?",
    answer: ["a. Test ", "b. Test", "c. Test ", "d. Test "],
    correct: 3,
  },

  {
    ques: "2) What is the correct tag to create a paragraph?",
    answer: ["a. Test ", "b. Test ", "c. Test ", "d. Test "],
    correct: "a",
  },

  {
    ques: "3) What language is used to style a webpage?",
    answer: ["a. HTML", "b. CSS", "c. Java", "d. Javascript"],
    correct: "b",
  },

  {
    ques: "4) Select a semantic element below.",
    answer: ["a. Test ", " b. Test ", "c. Test "],
    correct: "b",
  },
];

// Set the state
let timeLeft = 20;
let score = 0;
let initialTimer;
let i = 0;
// questionsEl.style.display = "none"; 
// 1. Click button to start timer:
startEl.addEventListener("click", function () {
  displayQuestions();
  // initialsHere();
  clearInterval(initialTimer);
  timeLeft = 20;
  timerEl.textContent = "00:" + timeLeft;
  initialTimer = setInterval(function () {
    timerEl.textContent = "00:" + timeLeft;
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(initialTimer);
      timerEl.textContent = "00:00";
    }
  }, 1000);
});


function displayQuestions() {
  // for (let i = 0; i < questions.length; i++) {
  let current = questions[i];
  display1(current);
  console.log(current);
  // }
  
};


function display1(question) {
  questionsEl.innerHTML = "";

  let questionH4 = document.createElement("h4");
  questionH4.innerHTML = question.ques;
  questionsEl.appendChild(questionH4);

  for (let j = 0; j < question.answer.length; j++) {
    let answerButton = document.createElement("button");
    answerButton.classList.add("answer");
    answerButton.innerHTML = question.answer[j];
    answerButton.addEventListener("click", function (event) {
      console.log(event.target);
      console.log(question.answer[3]);
      if(event.target.innerHTML === question.answer.correct){
        questionH4.innerHTML = "WELL DONE!";
        i+= 1;
        console.log(i);

      } else{
        timeLeft -= 5
      }
     
     
     
    });

    questionsEl.appendChild(answerButton);
  };
};

// 1a. Start timer also displays first question:

// TO BE USED______________________________
// initialsButton.addEventListener("click", function(event){
//   event.preventDefault();
//   var initials = document.querySelector("#initials").value;
//   if(initialsEl === ""){
//   displayMessage("Please enter your initials.");
//  localStorage.setItem("Initials", initialsEl);
//  renderInitials();
// }
// })

// // FUNCTIONS
// function renderInitials(){}

// localStorage.setItem("Scores", score);
// var initialsFinal = localStorage.getItem("Initials");
// var scoresFinal = localStorage.getItem("Scores");

/*  AskBSC suggestions:
create an array of objects with question, options array and correct answer
create a variable counter initialized with 0
function called display question in which,
create an element "p" and add textContent = question[counter].question
write for loop to loop over option from questions array for current question we're displaying on screem
create new lement button and text content will be each option value and also add data-answer attribute and specific class to all options


// STEPS:
/*1) Click Start Button to start quiz.
  a ) Start button reveals first question.
    b) Start Button starts timer.
      c) Start again resets timer.
2) If option is correct, "well done".
  a) If incorrect, time decrement
3) Next question.
  a) If timer runs out, move to next question
4) All question answered, score recorded.*/
