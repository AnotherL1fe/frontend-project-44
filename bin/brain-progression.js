#!/usr/bin/env node

import { generationArithmeticProgression, replaceRandomWithDots } from '../src/helpers/helpers.js'
import runGame from '../src/runGame.js'

const generateProgressionQuestion = () => {
  const arr = generationArithmeticProgression()
  const [newArr, correctAnswer] = replaceRandomWithDots(arr)

  const question = newArr.join(' ')

  return [question, correctAnswer]
}

const description = `What number is missing in the progression?`
runGame(description, generateProgressionQuestion)
