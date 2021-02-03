const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestion, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')
const answerButton1 = document.getElementById('btn1')
const answerButton2 = document.getElementById('btn2')
const answerButton3 = document.getElementById('btn3')
const answerButton4 = document.getElementById('btn4')
const answerButtonGrid = document.getElementById('answer-btn')
let correctAnswers = 0;
let countDownDate = 75;
var setCountdown;

// Declaring Object that will store our questions and answers
const questions = [
  {
    title: 'What means === in JavaScript ? ',
    answers: ['Equall', 'Attribute', 'Not', 'NaN'],
    correct: 'Equall'
  },
  {
    title: 'What from follows are  types of Pop up boxes available in JavaScript?',
    answers: ['Documnet', 'Console', 'Alert', 'Window'],
    correct: 'Alert'
  },
  {
    title: 'In how many ways a JavaScript code can be involved in an HTML file?',
    answers: ['1', '2', '3', '4'],
    correct: '3'
  },
  {
    title: 'What are the ways to define a variable in JavaScript?',
    answers: ['def', 'var', 'variable', 'none'],
    correct: 'var'
  },
  {
    title: 'What from follows are JavaScript frameworks',
    answers: ['Nuclear', 'React', 'FrameAI', 'Node.js'],
    correct: 'React'
  },
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>"
},

 {
    title: "What is the correct place to insert a JavaScript",
    choices: ["The <head> section", "Both the <head> and the <body> section", "The <body> section"],
    answer: "Both the <head> and the <body> section"
 },

 {
    title: "What is the correct syntax for reffering to an external script call 'xxx.js'",
    choices: ["<script name='xxx.js'>", "<script href='xxx.js'>", "<script src='xxx.js'>"],
    answer: "<script src='xxx.js'>"
},

 {
    title: "What is the correct way to write a JavaScript array?",
    choices: ["var colors = (1:'red',2:'green', 3:'blue')", "var colors = 'red', 'green'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = ['red', 'green', 'blue']"],
    answer: "var colors = ['red', 'green', 'blue']"
 },

 {
    title: "JavaScript is case-sensitive?",
    choices: ["True", "False"],
    answer: "True"
 }
]


// Clicking on Start Game button will trigger the function startGame 
startButton.addEventListener('click', startGame)
answerButtonGrid.addEventListener('click', selectAnswer)


// Function shows app the buttons for answers, setting time, removes Start Game button
function startGame() {
  answerButton1.hidden = false;
  answerButton2.hidden = false;
  answerButton3.hidden = false;
  answerButton4.hidden = false;
  questionElement.hidden = false;
  startButton.remove('hide')
  setCountdown = setInterval(countDown, 1000)
  document.getElementById('timer2').innerHTML = countDownDate + 's';
  showQuestion();

}
let i = 0;
// Iterating through Object with Questions and Answers
function showQuestion() {
  answerButton1.innerHTML = questions[i].answers[0];
  answerButton2.innerHTML = questions[i].answers[1];
  answerButton3.innerHTML = questions[i].answers[2];
  answerButton4.innerHTML = questions[i].answers[3];
  questionElement.innerHTML = questions[i].title

}

function selectAnswer(e) {
  if (e.target.innerText === questions[i].correct) {

    correctAnswers++;
  }
  else {
    if (i < questions.length) {
      countDownDate = countDownDate - 15;
    }
  }
  if (i < questions.length - 1) {
    i += 1
    showQuestion();
  }
  if (i === (questions.length - 1)) {
    clearInterval(setCountdown);
    // add save   user's initials  form  
    saveToLocalStorage();
  };


}
// Count down function
function countDown(e) {


  countDownDate--;
  document.getElementById('timer2').innerHTML = countDownDate + 's';
  if (countDownDate <= 0) {
    clearInterval(setCountdown);
    document.getElementById("timer2").innerHTML = "EXPIRED";
    saveToLocalStorage();
  }





}


// Function that stores data to Local Storage
function saveToLocalStorage() {
 
  var dataSaved = {
    userIn: "",
    score: ""
  }
  
  dataSaved.score = countDownDate;
  dataSaved.userIn = prompt('Your initials :');
  
  localStorage.setItem('dataSaved', JSON.stringify(dataSaved));}


  