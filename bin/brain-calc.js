#!/usr/bin/env node

import runGame from '../src/index.js';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
}

const generateCalcQuestion = () => {
  const a = Math.floor(Math.random() * 50);
  const b = Math.floor(Math.random() * 50);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));

  return [question, correctAnswer];
}

const description = 'What is the result of the expression?';
runGame(description, generateCalcQuestion);
