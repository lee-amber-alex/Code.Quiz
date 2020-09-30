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
let modalEl = document.getElementById("modal");

// Set the state
let timeLeft = 20;
let score = 0;
let initialTimer;

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
  // *****QUESTION 1*****
  optionsEl.forEach(function (element) {
    label.textContent = "1)	What is the definition of “HTML”?";
    optionElA.textContent = "a. Used exactly like CSS.";
    optionElB.textContent = "b. Hypertext Markup Language.";
    optionElC.textContent = "c. Used to style a web page. ";
    optionElD.textContent = "d. Hyper Tracing Max Language.";
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
      // *****QUESTION 2*****
      buttonNext.addEventListener("click", function () {
        label.textContent = "2) What are semantic tags used for?";
        optionElA.textContent = "a. Used to bold content.";
        optionElB.textContent = "b. Used to create a new element.";
        optionElC.textContent = "c. Used to create more accessibility.";
        optionElD.textContent = "d. Does not exist.";
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
    // *****QUESTION 3*****
    buttonNext.addEventListener("click", function () {
      label.textContent = "3) Which tag is used to create a paragraph in HTML?";
      optionElB.textContent = "b. <h1>";
      optionElC.textContent = "c. <div>";
      optionElD.textContent = "d. <p>";
      optionsAll.style.display = "<br>";
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
    // *****QUESTION 4*****
    buttonNext.addEventListener("click", function () {
      label.textContent = "4) Which is the best tag for a Header?";
      optionElA.textContent = "a. <h1>";
      optionElB.textContent = "b. <h6>";
      optionElC.textContent = "c. <h3>";
      optionElD.textContent = "d. <h4>";
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
