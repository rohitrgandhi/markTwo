var readlineSync = require("readline-sync");

var score = 0;

// question and answers
var questions = 
[
    {
      question:"Are you an Investor or a Trader? ",
      answer:"Investor"
    }
  ,
    {
    question:"How many stock exchanges are there (in number)? ",
    answer:"2"
    }
  ,
    {
    question:"Which is the oldest exchange in Asia? ",
    answer:"BSE"
    },
    {
    question:"How many stocks are there in Nifty Index?(in number) ",
    answer:"50"
    } ,
    {
    question:"Which is the index for the banks? ",
    answer:"Bank Nifty"
    }    ,
    {
    question:"The Indian Stock Market is regulated by ? ",
    answer:"SEBI"
    }     ,
    {
    question:"Share of profit, if distributed by management in cash is called as: ? ",
    answer:"Dividends"
    }  

    
];

//This takes user name
function welcomeMsg() {
 var userName = readlineSync.question("Enter your name? ");

  console.log("Welcome "+ userName)
  console.log("Instructions-This is a simple quiz about Stock Markets.")
}


//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

// quiz function
function quiz()
{
  for (var i=0; i<questions.length; i++)
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

//This will display scores at the end of program
function showScores()
{
  console.log("Your Final Score is", score);
}

//function call
welcomeMsg();
quiz();
showScores();