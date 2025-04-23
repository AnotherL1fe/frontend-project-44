.PHONY: install brain-games

install:
	npm ci

brain-games:
    ./bin/brain-games.js

# Тест публикации в NPM (без реальной отправки)
publish-dry-run:
	npm publish --dry-run

# Локальная "глобальная" установка пакета (для отладки)
link:
	npm link