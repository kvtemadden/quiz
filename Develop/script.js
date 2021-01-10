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

//selecting all required elements
var start_btn = document.querySelector(".start_btn button");
var info_box = document.querySelector(".info_box");
var exit_btn = info_box.querySelector(".buttons .quit");
var continue_btn = info_box.querySelector(".buttons .restart");
var quiz_box = document.querySelector(".quiz_box");
var result_box = document.querySelector(".rb1");
var option_list = document.querySelector(".option_list");
var timeText = document.querySelector(".timer .time_left_txt");
var timeCount = document.querySelector(".timer .timer_sec");
var submitBtn = document.querySelector(".submit");
var highscore_box = document.querySelector(".highscore_box");
var secondsLeft = 0;
var timerInterval = "";
var highscoresList = [];
var newHS = 0;
var timeValue = 60;
var que_count = 0;
var que_numb = 1;
var userScore = 0;

// if startQuiz button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
}


// if exitQuiz button clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
  timeValue = 60;
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 to queCounter
  startTimer(); //calling startTimer function
}

// Creates variable outside of timer
var timerInterval = "";

// Countdown timer
function startTimer(){
            timerInterval = setInterval(function () {
            timeValue--;
            timeCount.textContent = timeValue;
        
        
            if (timeValue <= 0) {
              clearInterval(timerInterval);
              showResult();
            }
      }, 1000);
    }

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    var totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ quizQuestions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

// -5 seconds from timer
function incrAnsTimer(){
 clearInterval(timerInterval);
 timeValue -= 5;
 startTimer();
}

// getting questions and options from array
function showQuetions(index) {
  var que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  var que_tag = '<span>' + quizQuestions[index].numb + ". " + quizQuestions[index].question + '</span>';
  var option_tag = '<div class="option"><span>' + quizQuestions[index].options[0] + '</span></div>'
    + '<div class="option"><span>' + quizQuestions[index].options[1] + '</span></div>'
    + '<div class="option"><span>' + quizQuestions[index].options[2] + '</span></div>'
    + '<div class="option"><span>' + quizQuestions[index].options[3] + '</span></div>';
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  var option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

//if user clicked on option
function optionSelected(answer) {
  var userAns = answer.textContent; //getting user selected option
  var correcAns = quizQuestions[que_count].answer; //getting correct answer from array
  var allOptions = option_list.children.length; //getting all option items

  if (userAns == correcAns) { //if user selected option is equal to array's correct answer
    answer.classList.add("correct"); //adding green color to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option
    incrAnsTimer(); // -5s from timer
    console.log("Wrong Answer");


    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}


var next_btn = document.querySelector("footer .next_btn");
var bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
  if (que_count < quizQuestions.length - 1) { //if question count is less than total question number of questions being asked
    que_count++; //+1 to the que_count value
    que_numb++; //+1 to the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter to display which question they're on
    next_btn.classList.remove("show"); //hide the next button
  } else {
    showResult(); //calling showResult function
  }
}

var viewHS = document.querySelector(".vHS");
viewHS.addEventListener("click", function (event) {
  info_box.classList.remove("activeResult"); //hide result box
  restart_quiz2.textContent = "Close";
  highscore_box.classList.add("activeResult"); //show result box
})

// Shows the score of the user
function showResult() {
  clearInterval(timerInterval); // resets timer
  secondsLeft = document.querySelector(".timer_sec").textContent;
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  var scoreText = result_box.querySelector(".score_text");
  var scoreTag = '<span>All done! Your final score is ' + secondsLeft + '</span>'; //shows user their score
  scoreText.innerHTML = scoreTag; //pushes info to page

  var formInput = document.getElementById("formInput");

  // to display a message based on criteria below for setting initials
  function displayMessage(type, message) {
    var msgDiv = document.getElementById("msg");
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

  // On submit button clicked...

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();


// stores user info
    var user = {
      initials: formInput.value.trim(),
      score: secondsLeft,
    };

    // validate the fields
    if (formInput.value === "") { // tells user their input can't be blank to save a highscore
      displayMessage("error", "Initials cannot be blank");
    }
    else if (formInput.value.length > 3) { //if pw is longer than 3 characters show error & message
      displayMessage("error", "Initials cannot be longer than 3 characters")
    }
    else {
      displayMessage("success", "Registered successfully"); //displays registered successfully & shows highscore board
      result_box.classList.remove("activeResult"); //hide result box
      restart_quiz2.textContent = "Replay Quiz";

      highscore_box.classList.add("activeResult"); //show result box

      // set new submission
      console.log(user);
      var userString = JSON.stringify(user);
      JSON.parse(userString);
      localStorage.setItem("user", userString);
      highscoresList.push(user.initials + " " + user.score);
      formInput.value = "";
      displayMessage("", "");
      renderHighscores();
      timeValue = 60;
    }


  });

  var highscorersList = document.querySelector(".hscores");
// adds highscore to scoreoard
  function renderHighscores() {
    debugger;

    for (newHS; newHS < highscoresList.length; newHS++) {
      var highscore = highscoresList[newHS];
      var li = document.createElement("li");
      li.textContent = highscore;
      highscorersList.appendChild(li);
    }
  }
}

var restart_quiz = result_box.querySelector(".buttons .restart");
var restart_quiz2 = highscore_box.querySelector(".buttons .restart");

// restarts quiz
restart_quiz.onclick = () => {
  info_box.classList.add("activeInfo"); // show info box
  result_box.classList.remove("activeResult"); //hide result box
  highscore_box.classList.remove("activeResult"); // hide highscore box
  timeValue = 60;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  clearInterval(timerInterval); //clear timer
  next_btn.classList.remove("show"); //hide the next button
}

// restarts quiz btn 2
restart_quiz2.onclick = () => {
  info_box.classList.add("activeInfo"); // show info box
  result_box.classList.remove("activeResult"); //hide result box
  highscore_box.classList.remove("activeResult"); // hide highscore box
  timeValue = 60;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  clearInterval(timerInterval); //clear timer
  next_btn.classList.remove("show"); //hide the next button
}

