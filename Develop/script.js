var secondsLeft = 60;
var string = '';
var ansList = document.createElement("ul");
var title = document.getElementById("main-title");
var info = document.getElementById("main-text");
var countdown = document.getElementById("time-left");
var quizContent = document.getElementById("content");
var quizQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];

var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startTimer();
  startBtn.className = "hide";
  debugger;
  firstQuestion();
}

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    countdown.textContent = secondsLeft;


    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

function firstQuestion() {
  var questionJSON = JSON.stringify(quizQuestions);
  var questionString = JSON.parse(questionJSON);
  title.textContent = questionString[0].question;
  var answerJSON = JSON.stringify(questionString[0].answers);
  var answerString = JSON.parse(answerJSON);
  info.textContent = printObj(answerString);
  info.appendChild(ansList);
}



var printObj = function (ans) {
  for (var letter in ans) {
    if (typeof ans[letter] == 'string') {
      string += letter + ': ' + ans[letter];
      indvAns = document.createElement("li");
  indvAns.innerHTML = string;
  ansList.appendChild(indvAns);
  string = '';
    }
    else {
      string += letter + print(ans[letter]);
      indvAns = document.createElement("li");
  indvAns.innerHTML = string;
  ansList.appendChild(indvAns);
  string = '';
    }
  }

}