#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const name = getName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let correctAnswers = 0;
const roundsToWin = 3;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

while (correctAnswers < roundsToWin) {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

  if (userAnswer !== 'yes' && userAnswer !== 'no') {
    console.log('Please answer "yes" or "no".');
    continue;
  }

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
}

console.log(`Congratulations, ${name}!`);
