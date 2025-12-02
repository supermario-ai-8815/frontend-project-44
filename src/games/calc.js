
import readlineSync from 'readline-sync'
import { name } from '../cli.js';

export const calculator = () => {
    console.log('What is the result of the expression?')
    for (let i = 0; i < 3; i += 1) {
        const {expression, correctResult} = generateMathExp()
        console.log('Question: ' + expression)
        const answer = readlineSync.questionInt(`Your answer: `)
        if (answer === correctResult) {
            console.log('Correct!')
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'\nLet's try again, ${name}!`)
            break
        }
    }
}


function generateMathExp() {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  
  let min, max, result;
  switch(operation) {
    case '+':
      min = Math.floor(Math.random() * 100) + 1; 
      max = Math.floor(Math.random() * 100) + 1;
      result = min + max;
      break;
      
    case '-':
      min = Math.floor(Math.random() * 100) + 1; 
      max = Math.floor(Math.random() * min) + 1;  
      result = min - max;
      break;
      
    case '*':
      min = Math.floor(Math.random() * 20) + 1;
      max = Math.floor(Math.random() * 10) + 1;
      result = min * max;
      break;
  }
  
  return {
    expression: `${min} ${operation} ${max}`,
    correctResult: result
  };
}
