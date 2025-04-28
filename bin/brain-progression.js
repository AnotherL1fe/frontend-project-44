#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const name = getName();
console.log('What number is missing in the progression?');

let correctAnswers = 0;
const roundsToWin = 3;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

while (correctAnswers < roundsToWin) {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 5) + 1;
  
  const progression = generateProgression(start, step, length);
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[hiddenIndex];

  const question = progression
    .map((num, index) => (index === hiddenIndex ? '..' : num))
    .join(' ');

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ').trim();

  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
}

console.log(`Congratulations, ${name}!`);