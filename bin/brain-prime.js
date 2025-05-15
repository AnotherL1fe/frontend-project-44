#!/usr/bin/env node

import welcomeUser from '../src/cli.js'
import { generationNumber, isPrime } from '../src/helpers/helpers.js'
import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')

const name = welcomeUser()

console.log(`Hello, ${name}!`)

console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)

const num = generationNumber()
const correctAnswer = isPrime(num) ? 'yes' : 'no'

const question = num
console.log(`Question: ${question}`)

const userAnswer = readlineSync.question('Your answer: ')

if (String(userAnswer) === String(correctAnswer)) {
  console.log('Correct!')
}
else {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
};
