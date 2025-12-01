import readlineSync from 'readline-sync';
import {name} from '../src/cli.js'


export const isEven = () => {
    const min = 1
    const max = 150
    for (let i = 0; i < 3; i += 1) {
        let num = Math.floor(Math.random() * (max - min)) + min
        console.log('Question: ' + num)

        const answer = readlineSync.question('Your answer: ', {
        limit: ['yes', 'no'],
        });
        if (num % 2 === 0) {
           if (answer === 'yes') {
            console.log('Correct!')
           } else if (answer === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again,${name}!`)
            break
           }
        }
        else {
            if (answer === 'no') {
            console.log('Correct!')
            } else {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again,${name}!`)
            break
            }
        }
        if (i === 2) {
        console.log(`Congratulations, ${name}!`)
        break
    }
    }
    
}