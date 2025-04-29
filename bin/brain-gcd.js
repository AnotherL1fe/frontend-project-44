#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const name = getName()
console.log('Find the greatest common divisor of given numbers.')

let correctAnswers = 0
const roundsToWin = 3

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

while (correctAnswers < roundsToWin) {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1

  console.log(`Question: ${num1} ${num2}`)
  const userAnswer = readlineSync.question('Your answer: ').trim()

  if (!/^\d+$/.test(userAnswer)) {
    console.log(`"${userAnswer}" is not a valid number! Please enter a number.`)
    continue
  }

  const correctAnswer = gcd(num1, num2)

  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!')
    correctAnswers++
  }
  else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`)
  }
}

console.log(`Congratulations, ${name}!`)
