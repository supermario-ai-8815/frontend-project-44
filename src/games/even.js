export const isEven = () => {
  const min = 1
  const max = 75
  let question = Math.floor(Math.random() * (max - min)) + min
  let result
  if (question % 2 === 0) {
    result = 'yes'
    // запоминаем что сгенерированное число четное
  }
  else {
    result = 'no'
    // запоминаем что сгенерированное число нечетное
  }
  return {
    question: `${question}`,
    correctResult: `${result}`,
  }
}
