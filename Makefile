.PHONY: install brain-games publish link lint brain-even brain-calc

# Установка зависимостей и настройка прав
install:
	npm ci
	chmod +x bin/brain-games.js
	chmod +x bin/brain-even.js
	chmod +x bin/*.js
	chmod +x bin/brain-calc.js

# Запуск игры
brain-games:
	./bin/brain-games.js

# Тест публикации (без реальной отправки)
publish:
	npm publish --dry-run

# Локальная глобальная установка (может потребоваться sudo)
link:
	npm link

# Проверка и исправление стиля кода
lint:
	npx eslint --fix .

brain-calc:
	./bin/brain-calc.js

# Запуск игры brain-even
brain-even:
	./bin/brain-even.js