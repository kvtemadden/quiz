var secondsLeft = 60;

var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    countdown.innerHTML;

    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft;
    
    
        if(secondsLeft <= 0) {
          clearInterval(timerInterval);
          speedRead();
        }
    
      }, 1000);
}

const countdown = document.getElementById("time-left");
const quizContent = document.getElementById("content");
const questions = [
    {
        question: "Question 1",
        answers: {
            a: option1,
            b: option2,
            c: option3,
        }
        },
        {
        question: "Question 2",
        answers: {
            a: option1,
            b: option2,
            c: option3,
        }
        },
        {
        question: "Question 3",
        answers: {
            a: option1,
            b: option2,
            c: option3,
        }
        },
        {
        question: "Question 4",
        answers: {
            a: option1,
            b: option2,
            c: option3,
        }
        },
        {
        question: "Question 5",
        answers: {
            a: option1,
            b: option2,
            c: option3,
        }
    }
    ];