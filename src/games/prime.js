
export function isPrime () {
  //let result = ((num % 1 === 0) && (num % num === 0)) ? true : false
  let num = Math.floor(Math.random() * 100) + 1
  if ((num % 2 === 0) || (num < 2)) {

    return {
    correctResult: 'no',
    question: `${num}`
   //console.log(`${num} - no`)
    }
  } else if ((num === 2) || ((num % 2 !== 0) && (num < Math.sqrt(num)))) {
    //console.log(`${num} - yes`)
    return {
        correctResult: 'yes',
        question: `${num}`
    }
  } else {
    //console.log(`${num} - yes`)
    return {
        correctResult: 'yes',
        question: `${num}`
    }
  }
}

//isPrime()