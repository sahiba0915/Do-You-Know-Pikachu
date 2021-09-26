var readlineSync = require('readline-sync');

console.log("Welcome to the game, Do you know Pikachu? \n")

console.log("Rules: \n");

console.log("* If answer is in two words, give one space between them ");
console.log("* Press enter after typing your answer to go to the next question \n");
console.log("*All the best!!!! ");


console.log("----------------------\n");

var score = 0;

var highScores = {
  name : "Teddy",
  score : 5
};

var score = 0;

var highScores = {
  name : "Teddy",
  score : 5
};

var userName = readlineSync.question("What is your Name? ");
console.log('Welcome ' + userName + ' to Do you know Pikachu? ');

console.log("----------------------------\n");

var questions = [
  {
  question :`1. What are the particular parts of Pikachu’s cheeks called ?
  Scent sacs
  a.   Foraging sacs
  b.   Electric sacs
  c.   Soot sacks  
`,
   answer : "b"
},
{
  question :`2. What do you need to evolve a Pikachu into a Raichu??

  a.   Level it up
  b.   Use a Light Ball
  c.   Use a Thunder Stone 
`,
  answer : "c"
},
{
  question :`3. How is a Shiny Pikachu different from more common Pikachu specimens?

  a.   Its coloring is darker
  b.   Its coloring is see-through
  c.   Its coloring is lighter 
`,
  answer : "a"
},
{
  question :`4. By what part of a Pikachu’s body can you tell whether it’s a male or a female ?

  a.   Ears
  b.   Eyes
  c.   Tail  
`,
  answer : "c"
},
{
  question :`5. Who was the first person to discover the existence of Pikachu?

  a.   Professor Oak
  b.   Professor Elm
  c.   Professor Kukui  
`,
  answer : "b"
}
];

function play(question, answer) {
var userAnswer = readlineSync.question(question); 

  if(userAnswer == answer){
      console.log("You are right");
      score++;
  }else {
    console.log("You are wrong");
    console.log("Correct Answer: ", answer);
    score--;
  }
  console.log("Current Score: ", score);
  console.log("----------------------");
}

for(var i=0; i<questions.length; i++){
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer);
}

console.log("Your name :", userName);
console.log("Your final score is : ", score);
console.log("\n");

if(score == highScores.score){
  highScores.score = score;
  highScores.name = userName;
  console.log("Well Done !!!, You have beaten the High Score, Please send me a screenshot \n");
  console.log("High scorer: ", highScores.name);
  console.log("High score: ", highScores.score);
  console.log("\n");
}else {
  console.log("High score: ", highScores.name);
  console.log("High score: ", highScores.score);
  console.log("\n");
}
