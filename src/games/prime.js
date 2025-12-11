
export function isPrime () {
  let num = Math.floor(Math.random() * 100) + 1
  if (num <= 1) return {
    correctResult: 'no',
    question: `${num}`
  } // 0, 1 и отрицательные не простые

  if (num <= 3) {
    return {
    correctResult: 'yes',
    question: `${num}`  // 2 и 3 простые
  }}
  // Исключаем четные числа и кратные 3
  if (num % 2 === 0 || num % 3 === 0) {
    return {
    correctResult: 'no',
    question: `${num}`
  }}
  
  // Проверяем делители от 5 до √num
  // Используем шаг 6 (оптимизация)
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return {
        correctResult: 'no',
        question: `${num}`
  }};
  
  return true;
}
}

//isPrime()

