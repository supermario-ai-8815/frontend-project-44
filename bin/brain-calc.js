
import {name} from '../src/cli.js'
import { generateMathExp } from '../src/games/calc.js'
import { indexDriver } from '../src/index.js'

console.log(`Hello, ${name}!`)
console.log('What is the result of the expression?')
indexDriver(generateMathExp)
