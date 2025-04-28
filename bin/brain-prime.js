#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const name = getName()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let correctAnswers = 0;
const roundsToWin = 3;

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2, max = Math.SQRT1_2(num); )
}