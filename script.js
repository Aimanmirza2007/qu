
const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question:
      "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    ans1text: "alertBox(“Hello DataFlair!”);",
    ans2text: "alert(Hello DataFlair!);",
    ans3text: "msgAlert(“Hello DataFlair!”);",
    ans4text: " alert(“Hello DataFlair!”);",
    answer: " alert(“Hello DataFlair!”);",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question:
      "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    ans1text: "if(x 2)",
    ans2text: "if(x = 2)",
    ans3text: "if(x == 2)",
    ans4text: "if(x != 2 )",
    answer: "if(x == 2)",
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    ans1text: " min(x,y);",
    ans2text: "Math.min(x,y)",
    ans3text: " Math.min(xy)",
    ans4text: " min(xy);",
    answer: "Math.min(x,y)",
  },
];

const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const submit = document.getElementById("submit");
const timeLeftElem = document.getElementById("time-left");

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 20; // 30 seconds for each question

function loadQuestion() {
  // Update question and options
  question.textContent = quiz[currentQuestion].question;
  option_a.textContent = quiz[currentQuestion].ans1text;
  option_b.textContent = quiz[currentQuestion].ans2text;
  option_c.textContent = quiz[currentQuestion].ans3text;
  option_d.textContent = quiz[currentQuestion].ans4text;

  // Reset timer
  timeLeft = 20;
  timeLeftElem.textContent = timeLeft;

  // Start timer countdown
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Time's up! Moving to next question.");
    nextQuestion();
  } else {
    timeLeft--;
    timeLeftElem.textContent = timeLeft;
  }
}

function nextQuestion() {
  const checkedAns = document.querySelector('input[type="radio"]:checked');
  if (checkedAns !== null) {
    if (
      checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score++;
    }
  }

  currentQuestion++;
  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    alert("Your score is " + score + " out of " + quiz.length);
    location.reload();
  }
}

submit.addEventListener("click", nextQuestion);

// Initialize quiz
loadQuestion();

