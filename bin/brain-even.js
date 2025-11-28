import readlineSync from 'readline-sync';
import name from '../src/cli.js'


const isEven = () => {
    const min = 1
    const max = 150
    let num = Math.floor(Math.random() * (max - min)) + min
    for (let i = 0; i < 3; i += 1) {
        console.log('Question: ' + num)
        const answer = readlineSync.question('Your answer: ', {
        limit: ['yes', 'no'],
        });
        if (num % 2 === 0 && answer === 'yes') {
            console.log('Correct!')
        }
        else {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again,${name}!`)
        }
    }
}

export default isEven