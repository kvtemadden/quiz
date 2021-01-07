var secondsLeft = 60;

var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
      startTimer();
      startBtn.className = "hide";
      debugger;
      firstQuestion();
}

function startTimer () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft;
    
    
        if(secondsLeft <= 0) {
          clearInterval(timerInterval);
          speedRead();
        }
    
      }, 1000);
}

function firstQuestion() {
    var questionJSON = JSON.stringify(quizQuestions);
    var questionString = JSON.parse(questionJSON);
     title.textContent = questionString[0].question1;
}

var title = document.getElementById("main-title");
var info = document.getElementsByTagName("p");
var countdown = document.getElementById("time-left");
var quizContent = document.getElementById("content");
var quizQuestions = [
    {
      question1: "Who invented JavaScript?",
      answers1: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
    },
    {
      question2: "Which one of these is a JavaScript package manager?",
      answers2: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
    },
    {
      question3: "Which tool can you use to ensure code quality?",
      answers3: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
      },
    }
  ];