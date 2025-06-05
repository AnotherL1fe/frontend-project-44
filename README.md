# Brain Games
Набор из пяти консольных игр для тренировки логического мышления и математических способностей. Каждая игра предлагает серию вопросов, на которые нужно ответить правильно три раза подряд для победы.

##  Установка

1. Клонируйте репозиторий:
```bash
   git clone https://github.com/AnotherL1fe/frontend-project-44.git
```
Перейдите в директорию проекта:

```bash
cd brain-games
```
Установите пакет:

```bash
make install
```
## Доступные игры
### Калькулятор (brain-calc)
Решайте арифметические выражения (сложение, вычитание, умножение, деление).

Запуск:

```bash
make brain-calc
```
Пример:
```bash
text
Question: 5 + 3
Your answer: 8
Correct!
```
### Проверка на чётность (brain-even)
Определите, является ли число чётным. Ответьте yes или no.

Запуск:

```bash
make brain-even
```
### Наибольший общий делитель (brain-gcd)
Найдите наибольший общий делитель двух предложенных чисел.

Запуск:

```bash
make brain-gcd
```
### Простое число (brain-prime)
Определите, является ли число простым. Ответьте yes или no.

Запуск:

```bash
make brain-prime
```
### Арифметическая прогрессия (brain-progression)
Найдите пропущенное число в последовательности.

Запуск:

```bash
make brain-progression
```
## Правила
В каждой игре нужно дать 3 правильных ответа подряд

При ошибке игра завершается и предлагает начать заново

Все ответы вводятся через консоль

Регистр ответов (yes/no) имеет значение

## Пример игры
```bash
text
Welcome to the Brain Games!
May I have your name? Alex
Hello, Alex!

Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 28
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Alex!
```
## Системные требования
Операционная система: Linux/macOS

Интерпретатор: Bash 4.0+

Утилиты: Make, Coreutils

## Разработка
Для разработчиков:

Установите зависимости:

```bash
make install-dev
```
Запустите тесты:
```bash
make test
```
Проверьте стиль кода:
```bash
make lint
```

Проект разработан в рамках образовательной программы Хекслет.
