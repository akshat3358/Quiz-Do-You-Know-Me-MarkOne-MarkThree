var readlineSync = require('readline-sync');
var chalk = require('chalk');

var highscore = [
  {
    name : "dummy",
    userScore : 0,
    scoress : 0,
    defaultscore : 4
  }
]

var userName = readlineSync.question(chalk.green("What's Your Name ?  "));

console.log(chalk.bold.rgb(10, 100, 200)("\nWelcome  "+userName +" to this Quiz \n"));

console.log(chalk.bold.rgb(10, 100, 200)('Hello!\n'));

//Question 1
var questionOne = {
  question: "How many Girlfriend do Akshat have ? \n\n A. 1 \n B. 3 \n C. 4 \n D. 0 \n\n",
  answer: '0',
  answer_1: 'D'
}

//Question 2
var questionTwo = {
  question: "What is Akshat's Hobby ? \n\n A. CRICKET \n B. BADMINTON \n C. PLAYING GUITAR \n D. LISTENING MUSIC \n\n",
  answer: 'CRICKET',
  answer_1: 'A'
}

//Question 3
var questionThree = {
  question: "Where do Akshat live ? \n\n A. LUCKNOW \n B. KANPUR \n C. MORADABAD \n D. MEERUT \n\n",
  answer: 'MORADABAD',
  answer_1: 'C'
}

//Question 4
var questionFour = {
  question: "What is the Akshat's Age ? \n\n A. 19 \n B. 21 \n C. 27 \n D. 24 \n\n",
  answer: '21',
  answer_1: 'B'
}

//Question 5
var questionFive = {
  question: "Which one is Akshat's Favourite Color ? \n\n A. RED \n B. LIGHT GREEN \n C. MAROON \n D. WHITE \n\n",
  answer: 'MAROON',
  answer_1: 'C'
}

var questionList = [questionOne,questionTwo,questionThree,questionFour,questionFive];


function quizPlay(question,answer_1,answer_2){
  var userAnswer = readlineSync.question(chalk.green(question));
  if((userAnswer.toUpperCase() === answer_1)||(userAnswer.toUpperCase() === answer_2)){
    console.log(chalk.bold.bgCyan("\nGreat!! Right Answer \n"));
    highscore[0].userScore+=1;
  }
  else{
    console.log(chalk.bold.bgMagenta("\nWrong Answer !! \n"));
    highscore[0].userScore-=1;
  }
  if( highscore[0].userScore > highscore[0].scoress){
    highscore[0].scoress = highscore[0].userScore ;
  }
  console.log(chalk.bold.yellow("\nCurrent Score : "+highscore[0].userScore));
  console.log();
}

for(var i=0;i<questionList.length;i++){
  highscore[0].name = userName;
  var questionForUser = questionList[i];
  quizPlay(questionForUser.question,questionForUser.answer,questionForUser.answer_1);
}

console.log(chalk.italic.bgCyan("Your Final score is : "+highscore[0].userScore+"\n"));
console.log(chalk.italic.bgBlueBright("\nYour Highest score is : "+ highscore[0].scoress + "\n"));
if(highscore[0].scoress >= highscore[0].defaultscore){
  highscore[0].defaultscore = highscore[0].scoress ;
  console.log(chalk.bold.green("\ncongrats !!  You have beaten the Highest scorer of this quiz"));
}
else{
  console.log(chalk.bold.bgRedBright("Oops!! You loose the Opportunity to be Highest Score of this quiz...."));
}

console.log(chalk.bold.bgCyan("\nSend the screenshot of Your score if You have beaten the Highest scorer of this game."));