document.addEventListener("DOMContentLoaded", function(event) {
  var quizQuestions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does CSS do?",
    answer: "Adds styling to HTML pages",
    options: [
      "Adds styling to HTML pages",
      "Adds elements to HTML pages",
      "Adds videos to HTML pages",
      "Adds commands to HTML pages"
    ]
  },
    {
    numb: 4,
    question: "What does JavaScript do?",
    answer: "Adds functionality to a webpage",
    options: [
      "Nothing",
      "Sets the document type",
      "Adds functionality to a webpage",
      "JavaScript is not a coding language"
    ]
  },
    {
    numb: 5,
    question: "Where do you link to a CSS file?",
    answer: "In the head tag",
    options: [
      "In the head tag",
      "In the footer tag",
      "In the header tag",
      "In the body tag"
    ]
  },
];

  var secondsLeft = 60;
var string = '';
var ansList = document.createElement("ul");
var title = document.getElementById("main-title");
var info = document.getElementById("main-text");
var countdown = document.getElementById("time-left");
var next_btn = document.querySelector(".correct");
var qContent = document.getElementById("qs");
var qCount = 0;
var displayMessage = "";
var quizContent = document.getElementById("content");


var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startTimer();
  info.className = "hide";
  qContent.className = "show";
  startBtn.className = "hide";
  firstQuestion();
}

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    countdown.textContent = secondsLeft;


    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
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
    debugger;
    if (typeof ans[letter] == 'string') {
      string += letter + ': ' + ans[letter];
      indvAns = document.createElement("li");
      indvAnsBtn = document.createElement("button");
      indvAnsBtn.setAttribute("class", "answer");
      indvAns.appendChild(indvAnsBtn);
      indvAnsBtn.textContent = string;
      ansList.appendChild(indvAns);
      string = '';
    }
    else {
      string += letter + print(ans[letter]);
      indvAns = document.createElement("li");
      indvAnsBtn = document.createElement("button");
      indvAnsBtn.setAttribute("class", "answer");
      indvAns.appendChild(indvAnsBtn);
      indvAnsBtn.textContent = string;
      ansList.appendChild(indvAns);
      string = '';
    }
  }

}

function gameOver() {
  title.textContent = "All done! Your final score is: " + secondsLeft;
  info.textContent = "";
  var highscore = document.createElement("div");
  highscore.textContent = "Enter your initials: ";
  var formInput = document.createElement("input");
  var submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  highscore.appendChild(formInput);
  highscore.appendChild(submitBtn);
  info.appendChild(highscore);

  function displayMessage(type, message) {
    var msgDiv = document.getElementById("msg");
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    var user = {
      initials: formInput.value.trim(),
      score: secondsLeft,
    };  
   
    // validate the fields
    if (formInput.value === "") {
      displayMessage("error", "Initials cannot be blank");
    }
    else if (formInput.value.length > 3) {
      displayMessage("error", "Initials cannot be longer than 3 characters")
    }
    else {
      displayMessage("success", "Registered successfully");
    
      // set new submission
      console.log(user);
      var userString = JSON.stringify(user);
      JSON.parse(userString);
      localStorage.setItem("user", userString);
      showHighscores();
    }
  });
}

next_btn.onclick = ()=>{
  if(qCount < questions.length - 1){ 
      showQuetions(qCount);
  }
}


// getting questions and options from array
function showQuetions(index){
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for(i=0; i < option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
  }
}


})