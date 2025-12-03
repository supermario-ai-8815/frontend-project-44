

//import {isEven} from '../src/games/brain-even.js'
import {generateMathExp} from '../src/games/calc.js'
import readlineSync from 'readline-sync'
import {name} from '../src/cli.js'

export const indexDriver = () => {

    for (let i = 0; i < 3; i += 1) {
        const {question, correctResult} = generateMathExp()
        //const {questionEven, correctResultEven} = isEven()
        console.log('Question: ' + question)
        const answer = readlineSync.questionInt(`Your answer: `)
        if (answer === correctResult) {
            console.log('Correct!')
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'\nLet's try again, ${name}!`)
            break
        }
        if (i === 2) {
        console.log(`Congratulations, ${name}!`)
        break
    }
    }
}
