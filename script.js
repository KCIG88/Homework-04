//Questions variable
var questions = [
  {
    //Questions options and  correct answers    
    question: "Who created the TV series \"Firefly\"",
    option1: "George Lucas",
    option2: "J.J Abrams",
    option3: "J.R.R. Tolkien",
    option4: "Joss Whedon",
    correct: "D"
  },

  {
    question: "What planet is Han Solo from?",
    option1: "Corruscant",
    option2: "Kashyyyk",
    option3: "Corellia",
    option4: "Alderaan",
    correct: "C"
  },

  {
    question: "What is the Time Lord home planet?",
    option1: "Gallifrey",
    option2: "Midnight",
    option3: "Trenzalore",
    option4: "Raxacoricofallapatorius",
    correct: "A"
  },
  {
    question: "What is the name of Boba Fett's ship",
    option1: "Corellian Corvette",
    option2: "Millenium Falcon",
    option3: "Slave 1",
    option4: "T-16 Skyhopper",
    correct: "C"
  },

  {
    question: "In the show Firefly Who is the captain of the space ship Serenity ",
    option1: "Zoe Washburne",
    option2: "Malcolm Reynolds",
    option3: "Jane Cobb",
    option4: "Hoban \"Wash\" Washburne",
    correct: "B"
  },
  {
    question: "In Doctor Who what is the name of the species that loves to say \"EXTERMINATE\"",
    option1: "The Slitheen",
    option2: "The Ood",
    option3: "The Daleks",
    option4: "Cybermen",
    correct: "C"
  }
]



//Declare variables

var start = document.querySelector("#start");
var sec = 60;
var quiz = document.querySelector("#quiz");
var nextButton = document.querySelector("#nxt");
var option1 = document.querySelector("#A");
var option2 = document.querySelector("#B");
var option3 = document.querySelector("#C");
var option4 = document.querySelector("#D");
var currentQuestionIndex = 0;
var lastQuestionIndex = questions.length - 1;
var next = document.querySelector("#nxt");


//Quiz Start
start.addEventListener("click", startQuiz);
function startQuiz() {
  start.style.display = "none";
  myTimer();
  time = setInterval(myTimer, 1000);
  showQuestion();
  questionWindow.style.display = "block";


}

//Timer

function myTimer() {
  document.getElementById("cntDwn").innerHTML = sec;
  sec--;
  if (sec === -1) {
      clearInterval(time);
  
      alert("GAME OVER")

  }
};


//Display questions
function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionText.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
  option1.innerHTML = currentQuestion.option1;
  option2.innerHTML = currentQuestion.option2;
  option3.innerHTML = currentQuestion.option3;
  option4.innerHTML = currentQuestion.option4;
}


//Next button 
$("#nxt").on('click', function (n) {
  currentQuestionIndex++;
  showQuestion();
});


 


//Correct answer

function confirmAnswer(answer){
  if( answer === questions[currentQuestionIndex].correct){
    
  alert("Correct");
 

}
  
  else {
    alert("Wrong")
  }
}

//Wrong answer
