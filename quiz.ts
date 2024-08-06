#! /usr/bin/env node
import inquirer from "inquirer";

const quiz : {
    question_1: string; 
    question_2: string; 
    question_3: string; 
    question_4: string; 
    question_5: string; 
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        Message: "Q1.What is TypeScript?",
        choices: ["a)A superset of JavaScript that compiles to plain JavaScript","b)A type of database", "c)A CSS framework","d)A version of Java"]
    },
    {
        name: "question_2",
        type: "list",
        Message: "Q2.What command is used to compile a TypeScript file",
        choices: ["a)tsc filename.ts","b)compile filename.ts","c)build filename.ts","d)run filename.ts"]
    },
    {
        name: "question_3",
        type: "list",
        Message: "Q3.Which of the following is a primitive type in TypeScript?",
        choices: ["a)Array","b)Object","c)string","d)Function"]
    },
    {
        name: "question_4",
        type: "list",
        Message: "Q4.Which keyword is used to define a constant in TypeScript?",
        choices: ["a)let","b)var","c)const","d)fixed"]
    },
    {
        name: "question_5",
        type: "list",
        Message: "Q4.Which of the following is true about TypeScript?",
        choices: ["a) TypeScript can only be run in the browser","b)TypeScript can only be used for backend development","c)TypeScript adds static types to JavaScript","d)TypeScript is the same as JavaScript"]
    }
]);

let score : number = 0;

switch (quiz.question_1){
    case "A superset of JavaScript that compiles to plain JavaScript":
    console.log("1.Correct");
    ++score;
    break;
    default:
        console.log("1.Incorrect!!"); 
}

switch (quiz.question_2){
    case "tsc filename.ts":
    console.log("2.Correct");
    ++score;
    break;
    default:
        console.log("2.Incorrect!!");
        
    
}
switch (quiz.question_3){
    case "string":
    console.log("3.Correct");
    ++score;
    break;
    default:
        console.log("3.Incorrect!!");
        
    
}
switch (quiz.question_4){
    case "const":
    console.log("4.Correct");
    ++score;
    break;
    default:
        console.log("4.Incorrect!!");
        
    
}
switch (quiz.question_5){
    case "TypeScript adds static types to JavaScript":
    console.log("5.Correct");
    ++score;
    break;
    default:
        console.log("5.Incorrect!!"); 
}
console.log(`Total Score: ${score}`);
