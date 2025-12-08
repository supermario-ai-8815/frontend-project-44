import {name} from '../src/cli.js'
import { nod } from '../src/games/nod.js'
import { indexDriver } from '../src/index.js'

console.log(`Hello, ${name}!`)
console.log('Find the greatest common divisor of given numbers.')
indexDriver(nod)