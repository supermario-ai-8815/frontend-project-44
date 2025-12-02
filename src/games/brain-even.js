import readlineSync from 'readline-sync';
import {name} from '../cli.js'

console.log('Answer "yes" if the number is even, otherwise answer "no".')
export const isEven = () => {
    const min = 1
    const max = 75
    const err = 'no'
    const corr = 'yes'
    for (let i = 0; i < 3; i += 1) {
        let num = Math.floor(Math.random() * (max - min)) + min
        console.log('Question: ' + num)

        const answer = readlineSync.question('Your answer: ', {
        limit: ['yes', 'no'],
        });
        if (num % 2 === 0) {
           if (answer === corr) {
            console.log('Correct!')
           } else if (answer === err) {
            console.log(`'${err}' is wrong answer ;(. Correct answer was '${corr}'.\nLet's try again,${name}!`)
            break
           }
        }
        else {
            if (answer === err) {
            console.log('Correct!')
            } else {
            console.log(`'${corr}' is wrong answer ;(. Correct answer was '${err}'.\nLet's try again,${name}!`)
            break
            }
        }
        if (i === 2) {
        console.log(`Congratulations, ${name}!`)
        break
    }
    }
    
}

//isEven()