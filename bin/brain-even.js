import {name} from '../src/cli.js'
import { isEven } from '../src/games/even.js'
import { indexDriver } from '../src/index.js'

console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
indexDriver(isEven)