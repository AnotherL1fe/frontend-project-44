#!/usr/bin/env node

import { generateRandomNumber, isEven } from '../src/helpers/helpers.js';
import runGame from '../src/runGame.js';

const generateQuestion = () => {
  const number = generateRandomNumber(100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [`Question: ${number}`, correctAnswer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
  const gameData = []

  for (let i = 0; i < 3; i += 1) {
    gameData.push(generateQuestion())
  }

  return { rules, gameData }
}

// ... остальной код игры

const description = `Answer "yes" if the number is even, otherwise answer "no".`
runGame(description, generateEvenQuestion)
