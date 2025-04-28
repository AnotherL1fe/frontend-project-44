#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '../src/cli.js';
import runGame from '../src/index.js';

const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no"');

let correctAnswers = 0;
const roundsToWin = 3;

while (correctAnswers < roundsToWin) {
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

  // Проверяем, что введено либо "yes", либо "no"
  if (userAnswer !== 'yes' && userAnswer !== 'no') {
    console.log(`"${userAnswer}" is invalid input! Please answer "yes" or "no".`);
    continue;
  }

  // Проверяем правильность ответа
  const isEven = num % 2 === 0;
  const correctResponse = isEven ? 'yes' : 'no';

  if (userAnswer === correctResponse) {
    console.log('Correct!');
    correctAnswers++;
  }
  else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctResponse}".`);
  }
}

console.log(`Congratulations, ${name}!`);
