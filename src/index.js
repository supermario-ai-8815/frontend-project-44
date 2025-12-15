

import readlineSync from 'readline-sync'
import {name} from '../src/cli.js'
//import { isEven } from './games/brain-even.js'

export const indexDriver = (game) => {

    for (let i = 0; i < 3; i += 1) {
        const {question, correctResult} = game()
        let questionNum = Number(question)


        //console.log('DEBUG: question =', question) // что здесь?
        //console.log('DEBUG: correctResult =', correctResult)
        //console.log('DEBUG: typeof questionNum =', typeof questionNum)

        console.log('Question: ' + questionNum)
        const answer = readlineSync.question(`Your answer: `)
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
