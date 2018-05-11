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

  const startGameButton   = document.getElementById('startGameButton');
  const sendResponse      = document.getElementById('sendResponse');
  var id, indexCountDown, answer;
  var indexQuestion       = 0;
  var userPoints          = 0;
  var totalFailedAnswers  = 0;
  var totalCorrectAnswers = 0;
  var sumTimePerQuestion  = 0;

  function startGame() {
    printDomElements ();
    printNewQuestion();
    countDown();
  }

  function printDomElements (){
    const radioButtons = document.getElementsByName('resp1');
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].classList.remove("hidden");
    }
    startGameButton.classList.add("hidden");
    sendResponse.classList.remove("hidden");
  }

  startGameButton.addEventListener("click", startGame);

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
  
  function saveUserResponse(){
    const radioButtons = document.getElementsByName('resp1');
    answer             = { id: indexQuestion };
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        radioButtons[i].checked = false;
        answer = {
          id: indexQuestion,
          answerId: i
        }
      }
    }
  }

  function compareAndPrintResult(answer){
    const result = document.querySelector(".result");
    result.classList.remove("hidden");
    if (questions[indexQuestion].id !== answer.id) {
      return false;
    }
    if (questions[indexQuestion].correctAnswer.id !== answer.answerId) {
      result.innerHTML = "Mal!";
      decreasePoints(indexCountDown);
      totalFailedAnswers++;
    }else {
      result.innerHTML = "Bien!";
      sumPoints(indexCountDown);
      totalCorrectAnswers++;      
    }
  }

  function countDown() {
    const timer = document.querySelector(".timer");
    indexCountDown = 1;
    id = setInterval(function () {
      if (indexCountDown <= 6) {
        timer.innerHTML = indexCountDown;
        indexCountDown++;
      } else {
        onTimeExpired()
      }
    }, 1000);
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

  function calculateTimeAverage() {
    sumTimePerQuestion += indexCountDown;
    let timeAverage = sumTimePerQuestion / (indexQuestion + 1);
    return timeAverage;
  }

  function showStats() {
    const sumCorrectAnswers = document.getElementById('totalCorrectAnswers');
    const averageSpeed      = document.getElementById('averageSpeed');
    const sumFailedAnswers  = document.getElementById('totalFailedAnswers');
    sumCorrectAnswers.innerHTML = totalCorrectAnswers;
    sumFailedAnswers.innerHTML = totalFailedAnswers;
    averageSpeed.innerHTML = calculateTimeAverage();
  }

  function onFinish() {
    const containerQuestions = document.querySelector(".questionsAndAnswers");
    const endGame = document.querySelector(".endGame");
    const container = document.querySelector(".container");
    containerQuestions.classList.add('hidden');
    endGame.classList.remove('hidden');
    container.style.flexDirection = "column";
  }

  function onTimeExpired(){
    clearInterval(id);
    startNewQuestion();
}

  function startNewQuestion() {
    if(indexQuestion == questions.length - 1){
      onFinish();
      saveUserResponse();
      compareAndPrintResult(answer);
      showStats();
      clearInterval(id);
    }else{
      saveUserResponse();
      compareAndPrintResult(answer);
      showStats();
      indexQuestion++;
      clearInterval(id);
      printNewQuestion();
      countDown();
    }
  }

  sendResponse.addEventListener("click", startNewQuestion);

}