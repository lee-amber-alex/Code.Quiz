let startEl = document.getElementById("start");
let timerEl = document.getElementById("timer");
let optionsEl = document.querySelectorAll("option");
let questionsAll = document.querySelectorAll("label");
let optionsABCD = document.getElementById("optionsAll");
let optionElA = document.getElementById("optionA");
let optionElB = document.getElementById("optionB");
let optionElC = document.getElementById("optionC");
let optionElD = document.getElementById("optionD");
let buttonNext = document.getElementById("button");

// Set the state
let timeLeft = 20;
let score = 0;
let initialTimer;

function initialsHere(){
  modalEl.style.display = "none";
}

// 1) Click Start Button to start quiz.
//
//     1b) Start Button starts timer.
//       1c) Start again resets timer.
startEl.addEventListener("click", function () {
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

  // 1a ) Start button reveals first question.
  // 2) If option is correct, "well done".
    // 2a) If incorrect, time decrement
  optionsEl.forEach(function (element) {
    label.textContent =
      "1) On the periodic table, what element is represented by the letters Na?";
    optionElA.textContent = "a. Magnesium";
    optionElB.textContent = "b. Nitrogen";
    optionElC.textContent = "c. Sodium ";
    optionElD.textContent = "d. Neon";
    element.addEventListener("click", function (event) {
      if (event.target.matches("#optionC")) {
        optionsAll.style.display = "none";
        label.textContent = "WELL DONE!";
        timerEl.textContent = "00:00";
        score += timeLeft;
        clearInterval(initialTimer);
        timeLeft = 20;
      } else {
        timeLeft -= 5;
      }
      // 3) Next question
        // 1-2-3a) If timer runs out, move to next question
      buttonNext.addEventListener("click", function () {
        label.textContent = "2) What constellation contains the Big Dipper";
        optionElA.textContent = "a. Ursa Major";
        optionElB.textContent = "b. Orion";
        optionElC.textContent = "c. Ursa Minor";
        optionElD.textContent = "d. Lyra";
        optionsAll.style.display = "block";
      });
    });
    // Repeat step 2 & 2a.
        // 1-2-3a) If timer runs out, move to next question
    optionsEl.forEach(function (element) {
      element.addEventListener("click", function (event) {
        if (event.target.matches("#optionA")) {
          optionsAll.style.display = "none";
          label.textContent = "WELL DONE!";
          timerEl.textContent = "00:00";
          score += timeLeft;
          clearInterval(initialTimer);
          timeLeft = 20;
        } else {
          timeLeft -= 5;
        }
      });
    });
    // 3) Next question 
    // 1-2-3a) If timer runs out, move to next question
    buttonNext.addEventListener("click", function () {
      label.textContent =
        "3) What country is the third largest trade partner of the U.S.?";
      optionElA.textContent = "a. Canada";
      optionElB.textContent = "b. China";
      optionElC.textContent = "c. Mexico";
      optionElD.textContent = "d. Brazil";
      optionsAll.style.display = "block";
    });
    // Repeat step 2 & 2a.
    optionsEl.forEach(function (element) {
      element.addEventListener("click", function (event) {
        if (event.target.matches("#optionC")) {
          optionsAll.style.display = "none";
          label.textContent = "WELL DONE!";
          timerEl.textContent = "00:00";
          score += timeLeft;
          clearInterval(initialTimer);
          timeLeft = 20;
        } else {
          timeLeft -= 5;
        }
      });
    });
    // 3) Next question 
    // 1-2-3a) If timer runs out, move to next question
    buttonNext.addEventListener("click", function () {
      label.textContent = "4) Who invented bifocals?";
      optionElA.textContent = "a. Benjamin Franklin";
      optionElB.textContent = "b. Thomas Edison";
      optionElC.textContent = "c. Leo Baekeland";
      optionElD.textContent = "d. Clarence Birdseye";
      optionsAll.style.display = "block";
    });
    // Repeat step 2 & 2a.
    optionsEl.forEach(function (element) {
      element.addEventListener("click", function (event) {
        if (event.target.matches("#optionC")) {
          optionsAll.style.display = "none";
          label.textContent = "WELL DONE!";
          timerEl.textContent = "00:00";
          score += timeLeft;
          clearInterval(initialTimer);
          timeLeft = 20;
        } else {
          timeLeft -= 5;
        }
      });
    });
  });
});
// 4) All question answered, score recorded.*/
// FUNCTIONS():
let question1 = function(){}
// ______________________________________________________________________

// QUESTIONS:
// 1) On the periodic table, what element is represented by the letters Na?
// a. Magnesium
// b. Nitrogen
// c. Sodium - correct
// d. Neon

// 2) What constellation contains the Big Dipper?
// 	a. Ursa Major - correct
// 	b. Orion
// 	c. Ursa Minor
// 	d. Lyra

// 3) What country is the third largest trade partner of the U.S.?
// 	a. Canada
// 	b. China
// 	c. Mexico - correct
// 	d. Brazil

// 4) Who invented bifocals?
// 	a. Benjamin Franklin - correct
// 	b. Thomas Edison
// 	c. Leo Baekeland
// 	d. Clarence Birdseye
//  -------------------------------------------
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
