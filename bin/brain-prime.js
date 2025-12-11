import {name} from '../src/cli.js'
import { isPrime } from '../src/games/prime.js'
import { indexDriver } from '../src/index.js'

console.log(`Hello, ${name}!`)
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
indexDriver(isPrime)
