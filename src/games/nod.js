export function nod () {
    const min = 1
    const max = 150
    let a = Math.abs(Math.floor(Math.random() * (max - min)) + min);
    //console.log(a)
    let b = Math.abs(Math.floor(Math.random() * (max - min)) + min);
    const first = a
    const second = b
    //console.log(b)
  
    // Пока b не равно 0
    while (b !== 0) {
    // Сохраняем текущее значение b
    const temp = b;
    // Обновляем b как остаток от деления a на b
    b = a % b;
    // Обновляем a как предыдущее b
    a = temp;
  }
  
  return {
    question: `${first} ${second}`,
    correctResult: `${a}`
  }
  
}

//nod()