document.addEventListener("DOMContentLoaded", function (event) {
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
  
  // getting questions and options from array
function showQuetions(index){
  var que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  var que_tag = '<span>'+ quizQuestions[index].numb + ". " + quizQuestions[index].question +'</span>';
  var option_tag = '<div class="option"><span>'+ quizQuestions[index].options[0] +'</span></div>'
  + '<div class="option"><span>'+ quizQuestions[index].options[1] +'</span></div>'
  + '<div class="option"><span>'+ quizQuestions[index].options[2] +'</span></div>'
  + '<div class="option"><span>'+ quizQuestions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
  var option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for(i=0; i < option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

  var timerInterval = "";

  function startTimer() {
    timerInterval = setInterval(function () {
      timeValue--;
      timeCount.textContent = timeValue;


      if (timeValue <= 0) {
        clearInterval(timerInterval);
        showResult();
      }
    }, 1000);
  }

  function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    var totalQueCounTag = '<span><p>' + index + '</p> of <p>' + quizQuestions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
  }

  function incrAnsTimer() {
    clearInterval(timerInterval);
    timeValue -= 5;
    startTimer();
  }

})