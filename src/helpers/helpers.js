export const calcNums = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2

    case '-':
      return num1 - num2

    case '*':
      return num1 * num2
  }
}

export const generationMathOperator = () => {
  const num = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 * 3)

  switch (num) {
    case 0:
      return '+'

    case 1:
      return '-'

    default:
      return '*'
  }
}

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true
  }

  return false
}

export const gcd = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)

  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }

  return a
}

import crypto from 'crypto';

export const generationNumber = (max) => {
  const randomValue = crypto.randomBytes(4).readUInt32BE(0);
  return Math.floor((randomValue / 4294967296) * max);
};

export const generationArithmeticProgression = () => {
  function getSecureRandomInRange(min, max) {
    const randomValue = crypto.getRandomValues(new Uint32Array(1))[0]
    return Math.floor((randomValue / 4294967296) * (max - min + 1)) + min
  }

  const lengthProgression = getSecureRandomInRange(5, 20)
  const stepProgression = getSecureRandomInRange(1, 10)
  const start = getSecureRandomInRange(0, 99)

  let current = start

  const newArr = []

  for (let i = 0; i < lengthProgression; i += 1) {
    newArr.push(current)
    current += stepProgression
  }

  return newArr
}

export const replaceRandomWithDots = (arr) => {
  function getSecureRandomIndex(arrayLength) {
    const randomValue = crypto.getRandomValues(new Uint32Array(1))[0]
    return Math.floor((randomValue / 4294967296) * arrayLength)
  }

  const positionPoints = getSecureRandomIndex(arr.length)
  const randomElement = arr[positionPoints]
  const newArr = arr.map((item, index) => (index !== positionPoints ? item : '..'))

  return [newArr, arr[positionPoints]]
}

export const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}
