import {name} from '../src/cli.js'
import { progression } from '../src/games/progress.js'
import { indexDriver } from '../src/index.js'

console.log(`Hello, ${name}!`)
console.log('What number is missing in the progression?')
indexDriver(progression)