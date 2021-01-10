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

  // if startQuiz button clicked
  start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
  }

  

})