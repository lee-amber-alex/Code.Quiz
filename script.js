
let startEl = document.getElementById("start");
let timerEl = document.getElementById("timer");
let optionsEl = document.querySelectorAll("option");
let contEl = document.querySelectorAll(".container2");
let questionsAll = document.getElementById("questions");
let optionElA = document.getElementById("optionA")
let optionElB = document.getElementById("optionB")
let optionElC = document.getElementById("optionC")
let optionElD = document.getElementById("optionD")
let quesEl = [
    q1 ="1) On the periodic table, what element is represented by the letters Na?",
    q2 = "2) What constellation contains the Big Dipper?",
    q3 = "3) What country is the third largest trade partner of the U.S.?",
    q4 = "4) Who invented bifocals?",
    quesAns = "optionA", "optionB", "optionC", "optionD", 
];
let quesAns2 = ["optionA", "optionB", "optionC", "optionD"];

// Set the state

let timeLeft = 20 

// 1. Click start to begin quiz and start timer .
            startEl.addEventListener("click", function(){
              let initialTimer = setInterval(function(){
                timerEl.textContent = "00:" + timeLeft;
                timeLeft--;
                if(timeLeft === -1){
                    clearInterval(initialTimer);
                    timerEl.textContent = "00:00";
                }
              }, 1000);
              console.log(startEl);
            });


// Handlers:

// let initialTimer = setInterval(function(){
//   timerEl.textContent = timeLeft;
//   timeLeft--;
//   if(timerLeft === 0){
//       clearInterval(initialTimer);
//   }
// }, 1000);

