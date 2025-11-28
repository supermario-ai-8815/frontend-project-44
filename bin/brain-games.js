#!/usr/bin/env node
import cli from '../src/cli.js'
import even from '../bin/brain-even.js'
console.log('Welcome to the Brain Games!')
cli()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
even()