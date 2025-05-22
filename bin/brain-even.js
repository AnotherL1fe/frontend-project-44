#!/usr/bin/env node

import { generateRandomNumber, isEven } from '../src/helpers/helpers.js';
import runGame from '../src/runGame.js';

const generateQuestion = () => {
  const number = generateRandomNumber(100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [`Question: ${number}`, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// Генерация данных для 3 раундов игры
const gameData = Array.from({ length: 3 }, () => generateQuestion());

runGame(description, gameData);
