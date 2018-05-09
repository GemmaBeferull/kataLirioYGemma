function app() {

  var questions = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
 
  var i = 0;
  var id, indexCountDown;
  var userPoints = 0;

  function lanzaPregunta() {
    const quizQuestion = document.querySelector(".quizQuestion");
    const quizResponses = document.querySelectorAll(".questionsAndAnswers p");
    if (i < questions.length) {
      quizQuestion.innerHTML = (questions[i].question);
      for (let x = 0; x < questions[i].answer.length; x++) {
        quizResponses[x].innerHTML = (questions[i].answer[x].value);
      }
    }
  }

  function paintResult(){
    const radioButtons = document.getElementsByName('resp1');
    const result = document.querySelector(".result");
    for (let x = 0; x < radioButtons.length; x++) {
      if (radioButtons[x].checked) {
        radioButtons[x].checked = false;
        var answer = {
          id: i,
          answerId: x
        };
        result.classList.remove("hidden");
        if (questions[i].id !== answer.id) {
          result.innerHTML = "Mal!";
        }
        if (questions[i].correctAnswer.id !== answer.answerId) {
          result.innerHTML = "Mal!";
          decreasePoints(userPoints, indexCountDown);
        } else {
          result.innerHTML = "Bien!";
          sumPoints(userPoints, indexCountDown);
        }
      }
    }
  }

  function answerQuestion() {
    paintResult();
    i++;
    if(i == questions.length){
      sendResponse.disabled = true;
      clearInterval(id);
    }else{
      lanzaPregunta();
      clearInterval(id);
      countDown();
    }
  }

  function startGame() {
    const radioButtons = document.getElementsByName('resp1');
    for (let x = 0; x < radioButtons.length; x++) {
      radioButtons[x].classList.remove("hidden");
    }
    sendResponse.classList.remove("hidden");
    startGameButton.classList.add("hidden");
    lanzaPregunta();
    countDown();
  }

  function countDown() {
    const timer = document.querySelector(".timer");
    indexCountDown = 1;
    id = setInterval(function () {
      if (indexCountDown <= 20) {
        timer.innerHTML = indexCountDown;
        indexCountDown++;
      } else {
        clearInterval(id);
        answerQuestion();
        indexCountDown = 0;
      }
    }, 1000);
  }

  function sumPoints(userPoints, timeSpent) {
    if (timeSpent <= 2) {
      return userPoints += 2;
      console.log(userPoints);
    }
    if (timeSpent > 2 && timeSpent <= 10) {
      console.log(userPoints);
      return userPoints += 1;
    }
  }

  function decreasePoints(userPoints, timeSpent) {
    if (timeSpent <= 10) {
      console.log(userPoints -= 1);
    }
    if (timeSpent > 10) {
      console.log(userPoints -= 2);
    }
  }

  startGameButton.addEventListener("click", startGame);
  sendResponse.addEventListener("click", answerQuestion);
}