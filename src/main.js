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

  const startGameButton = document.getElementById('startGameButton');
  const sendResponse = document.getElementById('sendResponse');
 
  var indexQuestion = 0;
  var id, indexCountDown;
  var userPoints = 0;
  var totalFailedAnswers = 0;
  var totalCorrectAnswers = 0;
  var sumTimePerQuestion = 0;

  function startGame() {
    const radioButtons = document.getElementsByName('resp1');
    for (let x = 0; x < radioButtons.length; x++) {
      radioButtons[x].classList.remove("hidden");
    }
    startGameButton.classList.add("hidden");
    sendResponse.classList.remove("hidden");
    printNewQuestion();
    countDown();
  }

  startGameButton.addEventListener("click", startGame);

  function printNewQuestion() {
    const quizQuestion = document.querySelector(".quizQuestion");
    const quizResponses = document.querySelectorAll(".questionsAndAnswers p");
    if (indexQuestion < questions.length) {
      quizQuestion.innerHTML = (questions[indexQuestion].question);
      for (let x = 0; x < questions[indexQuestion].answer.length; x++) {
        quizResponses[x].innerHTML = (questions[indexQuestion].answer[x].value);
      }
    }
  }

  function saveResponse(){
    var answer= {
      id: indexQuestion,
    };
    const radioButtons = document.getElementsByName('resp1');
    for (let x = 0; x < radioButtons.length; x++) {
      if (radioButtons[x].checked) {
        radioButtons[x].checked = false;
        answer = {
          id: indexQuestion,
          answerId: x
        };
      }
    }
    compareAndPrintResult(answer);
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
    } else {
      result.innerHTML = "Bien!";
      sumPoints(indexCountDown);
      totalCorrectAnswers++;      
    }
    showStats();
    indexQuestion++;
  }

  function countDown() {
    const timer = document.querySelector(".timer");
    indexCountDown = 1;
    id = setInterval(function () {
      if (indexCountDown <= 6) {
        timer.innerHTML = indexCountDown;
        indexCountDown++;
      } else {
        clearInterval(id);
        startNewQuestion();
        indexCountDown = 0;
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
    let timeAverage = sumTimePerQuestion / (indexQuestion + 1);
    return timeAverage;
  }

  function showStats() {
    sumTimePerQuestion += indexCountDown;
    const sumCorrectAnswers = document.getElementById('totalCorrectAnswers');
    const averageSpeed      = document.getElementById('averageSpeed');
    const sumFailedAnswers  = document.getElementById('totalFailedAnswers');
    sumCorrectAnswers.innerHTML = totalCorrectAnswers;
    sumFailedAnswers.innerHTML = totalFailedAnswers;
    averageSpeed.innerHTML = calculateTimeAverage();
  }

  function startNewQuestion() {
    if(indexQuestion == questions.length - 1){
      const containerQuestions = document.querySelector(".questionsAndAnswers");
      const endGame = document.querySelector(".endGame");
      const container = document.querySelector(".container");
      containerQuestions.classList.add('hidden');
      endGame.classList.remove('hidden');
      container.style.flexDirection = "column";
      saveResponse();
      clearInterval(id);
    }else{
      saveResponse();
      printNewQuestion();
      clearInterval(id);
      countDown();
    }
    
    
  }
  sendResponse.addEventListener("click", startNewQuestion);
}