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
      correctAnswer: {id: 2}
    },
    {
      id: 2,
      question: "Cual es la capital de Brasil?",
      answer:[
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
      correctAnswer: {id: 1}
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
        correctAnswer: {id: 2}
    },
    {
        id: 4,
        question: "Cual es la capital de Brasil?3",
        answer:[
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
        correctAnswer: {id: 1}
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
        correctAnswer: {id: 2}
    }
];
var answerUser =[];

var quizQuestion = document.querySelector(".quizQuestion");
var quizResponses = document.querySelectorAll (".questionsAndAnswers p");
var radioButtons = document.getElementsByName('resp1');
var sendResponse = document.getElementById('sendResponse'); 
var result = document.querySelector(".result");
var startGameButton = document.getElementById('startGameButton'); 


// function lanzaPregunta(){
//     var i = 0;
//     setInterval(function(){ 
//         if(i < questions.length){
//             quizQuestion.innerHTML = (questions[i].question);
//             for(let x = 0; x < questions[i].answer.length; x++){
//               quizResponses[x].innerHTML = (questions[i].answer[x].value);
              
//             }
//             i++;
//         }
//     }, 1000);
// }
// lanzaPregunta();



function timeOut() {setInterval(function(){ 
  lanzaPregunta();
  }, 5000);
};



var i = 0;

function lanzaPregunta(){
  if(i < questions.length){
    quizQuestion.innerHTML = (questions[i].question);
    for(let x = 0; x < questions[i].answer.length; x++){
      quizResponses[x].innerHTML = (questions[i].answer[x].value);
    } 
  } else{
    sendResponse.disabled = true;
  }
  timeOut();
}


function isCorrect(questionsList, answerUserList){
  result.classList.remove("hidden");
  
  if(questionsList.id !== answerUserList.id){
    result.innerHTML = "Mal!";
  }
  if(questionsList.correctAnswer.id !== answerUserList.answerId){
    result.innerHTML = "Mal!";
  }else{
    result.innerHTML = "Bien!";
    
  }
 
}

function getResponseValue(){
  for(let x = 0; x < radioButtons.length; x++){
    if (radioButtons[x].checked){
      answerUser.push({
        id : i,
        answerId: x 
      });
      radioButtons[x].checked = false;
      
      isCorrect(questions[i], answerUser[i]);
     // timeOut();
    }
  }
  i++;
  lanzaPregunta();
}

function startGame() {
  for(let x = 0; x < radioButtons.length; x++){
      radioButtons[x].classList.remove("hidden");
  }
  sendResponse.classList.remove("hidden");
  startGameButton.classList.add("hidden");
  lanzaPregunta();
}



startGameButton.addEventListener("click", startGame);
sendResponse.addEventListener("click", getResponseValue);


