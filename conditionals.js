//assign variable//
let score = 97;

let passingGrade = 60; 

//first condition (did the student pass)// 
//checks the second condition//
if (score >= passingGrade) {
  if (score == 100) {
    console.log("Perfect Score!");
  } else {
    console.log("Passed");
  }
} else {
  console.log("Failed");
}
//This program checks a student’s score against the passing grade. First, it asks: did the student pass? If yes, it then checks if the score is a perfect 100. If it is, it prints "Perfect Score". Otherwise, it prints "Passed". If the student didn’t meet the passing grade, it prints "Failed".//