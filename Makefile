.PHONY: install brain-games publish link lint

# Установка зависимостей и настройка прав
install:
	npm ci
	chmod +x bin/brain-games.js

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