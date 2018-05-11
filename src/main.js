function app() {

  var questions = [
    {
      id: 0,
      question: "Cual es la capital de Venezuela?",
      answer: [
        {
          id: 0,
          value: "Barcelona"
        },
        {
          id: 1,
          value: "Barquisimeto"
        },
        {
          id: 2,
          value: "Caracas"
        }
      ],
      correctAnswer: { id: 2 }
    },
    {
      id: 1,
      question: "Cual es la capital de Brasil?",
      answer: [
        {
          id: 0,
          value: "Rio de Janeiro"
        },
        {
          id: 1,
          value: "Brasilia"
        },
        {
          id: 2,
          value: "Sao Paulo"
        }
      ],
      correctAnswer: { id: 1 }
    },
    {
      id: 2,
      question: "Cual es la capital de Venezuela?2",
      answer: [
        {
          id: 0,
          value: "Barcelona"
        },
        {
          id: 1,
          value: "Barquisimeto"
        },
        {
          id: 2,
          value: "Caracas"
        }
      ],
      correctAnswer: { id: 2 }
    },
    {
      id: 3,
      question: "Cual es la capital de Brasil?3",
      answer: [
        {
          id: 0,
          value: "Rio de Janeiro"
        },
        {
          id: 1,
          value: "Brasilia"
        },
        {
          id: 2,
          value: "Sao Paulo"
        }
      ],
      correctAnswer: { id: 1 }
    },
    {
      id: 4,
      question: "Cual es la capital de Venezuela?4",
      answer: [
        {
          id: 0,
          value: "Barcelona"
        },
        {
          id: 1,
          value: "Barquisimeto"
        },
        {
          id: 2,
          value: "Caracas"
        }
      ],
      correctAnswer: { id: 2 }
    }
  ];

  const startGameButton         = document.getElementById('startGameButton');
  const sendResponseButton      = document.getElementById('sendResponse');
  var indexQuestion             = 0;
  var userPoints                = 0;
  var totalFailedAnswers        = 0;
  var totalCorrectAnswers       = 0;
  var sumTimePerQuestion        = 0;
  var indexCountDown            = 0;
  var idSetInterval, answer;

  function startGame() {
    printDomElements ();
    printNewQuestion();
    countDown();
  }

  startGameButton.addEventListener("click", startGame);

  function printDomElements (){
    const radioButtons = document.getElementsByName('resp1');
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].classList.remove("hidden");
    }
    startGameButton.classList.add("hidden");
    sendResponseButton.classList.remove("hidden");
  }

  function printNewQuestion() {
    const quizQuestion  = document.querySelector(".quizQuestion");
    const quizResponses = document.querySelectorAll(".questionsAndAnswers p");
    if (indexQuestion < questions.length) {
      quizQuestion.innerHTML = (questions[indexQuestion].question);
      for (let i = 0; i < questions[indexQuestion].answer.length; i++) {
        quizResponses[i].innerHTML = (questions[indexQuestion].answer[i].value);
      }
    }
  }

  function countDown() {
    const timer = document.querySelector(".timer");
    idSetInterval = setInterval(function () {
      if (indexCountDown <= 12) {
        timer.innerHTML = indexCountDown;
        indexCountDown++;
      } else {
        onTimeExpired();
      }
    }, 1000);
  }

  function onTimeExpired(){
    startNewQuestion();
  }
  
  function saveUserResponse(){
    const radioButtons = document.getElementsByName('resp1');
    answer             = { id: indexQuestion };
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        radioButtons[i].checked = false;
        answer = {
          id: indexQuestion,
          answerId: i
        };
      }
    }
  }

  function compareAndPrintResult(answer){
    const scoreMessage = document.querySelector(".result");
    scoreMessage.classList.remove("hidden");
    if (questions[indexQuestion].id !== answer.id) {
      return false;
    }
    if (questions[indexQuestion].correctAnswer.id !== answer.answerId) {
      scoreMessage.innerHTML = "Respuesta Incorrecta!";
      decreasePoints(indexCountDown);
      totalFailedAnswers++;
    }else {
      scoreMessage.innerHTML = "Respuesta Correcta!";
      sumPoints(indexCountDown);
      totalCorrectAnswers++;      
    }
  }

  function sumPoints(timeSpent) {
    const playerPoints = document.querySelector('.score p');
    if (timeSpent <= 2) {
      playerPoints.innerHTML = userPoints += 2;
    }
    if (timeSpent > 2 && timeSpent <= 10) {
      playerPoints.innerHTML = userPoints += 1;
    }
  }

  function decreasePoints(timeSpent) {
    const playerPoints = document.querySelector('.score p');
    if (timeSpent <= 10) {
      playerPoints.innerHTML = userPoints -= 1;
    }
    else if (timeSpent >= 12) {
      playerPoints.innerHTML = userPoints -= 3;
    }
    else if (timeSpent > 10) {
      playerPoints.innerHTML = userPoints -= 2;
    }
  }

  function showStats() {
    const sumCorrectAnswers     = document.getElementById('totalCorrectAnswers');
    const averageSpeed          = document.getElementById('averageSpeed');
    const sumFailedAnswers      = document.getElementById('totalFailedAnswers');
    sumCorrectAnswers.innerHTML = totalCorrectAnswers;
    sumFailedAnswers.innerHTML  = totalFailedAnswers;
    averageSpeed.innerHTML      = calculateTimeAverage();
  }

  function calculateTimeAverage() {
    sumTimePerQuestion += indexCountDown;
    let timeAverage     = sumTimePerQuestion / (indexQuestion + 1);
    return timeAverage;
  }

  function onFinish() {
    const containerQuestions = document.querySelector(".questionsAndAnswers");
    const endGameMessage     = document.querySelector(".endGame");
    const container          = document.querySelector(".container");
    containerQuestions.classList.add('hidden');
    endGameMessage.classList.remove('hidden');
    container.style.flexDirection = "column";
  }

  function saveCompareShowResult(){
    saveUserResponse();
    compareAndPrintResult(answer);
    showStats();
  }

  function startNewQuestion() {
    if(indexQuestion == questions.length - 1){
      onFinish();
      saveCompareShowResult();
      clearInterval(idSetInterval);
    }else{
      saveCompareShowResult();
      indexQuestion++;
      indexCountDown = 0;
      printNewQuestion();
    }
  }

  sendResponseButton.addEventListener("click", startNewQuestion);
}