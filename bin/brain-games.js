#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!\nMay I have your name?')

const name = readlineSync.question('Your answer: ')

console.log(`Hello, ${name}`)

console.log('Answer "yes" if the number is even, otherwise answer "no"')

// const readlineSync = require('readline-sync');

let correctAnswers = 0
while (correctAnswers < 3) {
  const num = Math.floor(Math.random() * 100)
  console.log(`Question: ${num}`)
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase() // Приводим к нижнему регистру и убираем пробелы

  // Проверяем, что введено либо "yes", либо "no"
  if (userAnswer !== 'yes' && userAnswer !== 'no') {
    console.log(`"${userAnswer}" is invalid input! Please answer "yes" or "no".`)
    correctAnswers = 0 // Сбрасываем счетчик правильных ответов
    continue // Переходим к следующей итерации
  }

  // Проверяем правильность ответа
  const isEven = num % 2 === 0
  const correctResponse = isEven ? 'yes' : 'no'

  if (userAnswer === correctResponse) {
    console.log('Correct!')
    correctAnswers++
  }
  else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctResponse}".`)
  }
}

console.log(`Congratulations, ${name}!`)
