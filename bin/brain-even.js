#!/usr/bin/env node

import { isEven, generationNumber } from '../src/helpers/helpers.js'
import runGame from '../src/runGame.js'

import { generationNumber } from '../src/helpers/helpers.js';

const generateEvenQuestion = () => {
  const number = generationNumber(100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [`Question: ${number}`, correctAnswer];
};

// ... остальной код игры

const description = `Answer "yes" if the number is even, otherwise answer "no".`
runGame(description, generateEvenQuestion)

