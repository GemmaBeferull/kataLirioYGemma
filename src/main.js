var questions = [
    {
      id: 1,
      question: "Cual es la capital de Venezuela?",
      answer: [
        {
          id: 1,
          value: "Barcelona"
        },
        {
          id: 2,
          value: "Barquisimeto"
        },
        {
          id: 3,
          value: "Caracas"
        }
      ],
      correctAnswer: {id: 3}
    },
    {
      id: 2,
      question: "Cual es la capital de Brasil?",
      answer:[
        {
          id: 1,
          value: "Rio de Janeiro"
        },
        {
          id: 2,
          value: "Brasilia"
        },
        {
          id: 3,
          value: "Sao Paulo"
        }
      ],
      correctAnswer: {id: 2}
    },
    {
        id: 3,
        question: "Cual es la capital de Venezuela?2",
        answer: [
            {
            id: 1,
            value: "Barcelona"
            },
            {
            id: 2,
            value: "Barquisimeto"
            },
            {
            id: 3,
            value: "Caracas"
            }
        ],
        correctAnswer: {id: 3}
    },
    {
        id: 4,
        question: "Cual es la capital de Brasil?3",
        answer:[
          {
            id: 1,
            value: "Rio de Janeiro"
          },
          {
            id: 2,
            value: "Brasilia"
          },
          {
            id: 3,
            value: "Sao Paulo"
          }
        ],
        correctAnswer: {id: 2}
    },
    {
        id: 5,
        question: "Cual es la capital de Venezuela?4",
        answer: [
          {
            id: 1,
            value: "Barcelona"
          },
          {
            id: 2,
            value: "Barquisimeto"
          },
          {
            id: 3,
            value: "Caracas"
          }
        ],
        correctAnswer: {id: 3}
    }
];
var answerUser =[];

var quizQuestion = document.querySelector(".quizQuestion");
var quizResponses = document.querySelectorAll (".questionsAndAnswers p");
var radioButtons = document.getElementsByName('resp1');
var sendResponse = document.getElementById('sendResponse');


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

var i = 0;

function lanzaPregunta(){
  if(i < questions.length){
    quizQuestion.innerHTML = (questions[i].question);
    for(let x = 0; x < questions[i].answer.length; x++){
      quizResponses[x].innerHTML = (questions[i].answer[x].value);
    }
    i++;
  }    
}

function isCorrect(questionsList, answerUserList){
  console.log(questionsList);
  console.log(answerUserList);
  if(questionsList.id !== answerUserList.id){
    return false;
  }
  if(questionsList.correctAnswer.id !== answerUserList.answerId){
    return false;
  }
  lanzaPregunta();
}

function getResponseValue(){
  for(let x = 0; x < radioButtons.length; x++){
    if(i == 0){
      radioButtons[x].classList.remove("hidden");
      sendResponse.innerHTML = "Enviar respuesta";
    }
    if (radioButtons[x].checked){
      answerUser.push({
        id : i,
        answerId: quizResponses[x].innerHTML
      });
      radioButtons[x].checked = false;
      isCorrect(questions[i], answerUser[i]);
    }
  }
  lanzaPregunta();
}



sendResponse.addEventListener("click", getResponseValue);
