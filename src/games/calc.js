
export function generateMathExp() {
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
    question: `${min} ${operation} ${max}`,
    correctResult: `${result}`
  };
}
