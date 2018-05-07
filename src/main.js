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




function lanzaPregunta(){
    var i = 0;
    setInterval(function(){ 
        if(i < questions.length){
            console.log(questions[i].question);
            for(let x = 0; x < questions[i].answer.length; x++){
              console.log(questions[i].answer[x].value);
            }
            i++;
        }
    }, 1000);
}
lanzaPregunta();



// function isCorrect(questions, answerUser){
//     if(questions.id !== answerUser.answerId){
//         return false;
//     }
//     if(questions.correctAnswer.id !== answerUser.id){
//         return false;
//     }
//     return true;
// }










//Como funciona JASMINE??

// function describe (nombreDelTest, funcion){ 
//     try {
//         funcion();
//     } catch (error) {
//         console.log(error);
//     }
// }


// function it (nombre, funcionIt){
//     try {
//         funcionIt();
//     } catch (error) {
//         throw nombre + error;
//     }

// }


// function expect (actual){
//     return {
//         toEqual: function(expect){
//             if(actual != expect){
//                  throw actual + 'is not equal to'  + expect
//                 }
           
//     }}}

//     describe ('test describe', function(){
//         it('it test', function(){
//             expect(3).toEqual(3);
//         })
//     })