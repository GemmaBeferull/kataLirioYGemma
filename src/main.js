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
var answerUser =[
    {
        answerId: 1,
        id: 3
    },
    {
        answerId: 2,
        id: 2
    },
    {
        answerId: 3,
        id: 3
    },
    {
        answerId: 4,
        id: 2
    },
    {
        answerId: 5,
        id: 3
    }
];

var quizQuestion = document.querySelector(".quizQuestion");
var quizResponses = document.querySelectorAll (".questionsAndAnswers p");
var radioButtons = document.getElementsByName('resp1');

function lanzaPregunta(){
    var i = 0;
    setInterval(function(){ 
        if(i < questions.length){
            quizQuestion.innerHTML = (questions[i].question);
            for(let x = 0; x < questions[i].answer.length; x++){
              quizResponses[x].innerHTML = (questions[i].answer[x].value);
              
            }
            i++;
        }
    }, 1000);
}
lanzaPregunta();

