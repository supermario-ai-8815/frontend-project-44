function getAnswerOfPrime(num) {
  if (num <= 1) {
    return false
  }

  else if (num === 2) {
    return true
  }
  // Исключаем четные числа и кратные 3
  else if (num % 2 === 0) {
    return false
  }

  // Проверяем делители от 5 до √num
  // Используем шаг 6 (оптимизация)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false
    };
  }
  return true
}

export function isPrime() {
  const num = Math.floor(Math.random() * 100) + 1
  const isPrimeNum = getAnswerOfPrime(num)

  let result
  if (isPrimeNum) {
    result = 'yes'
  }
  else {
    result = 'no'
  }
  return {
    question: `${num}`,
    correctResult: `${result}`,
  }
}
