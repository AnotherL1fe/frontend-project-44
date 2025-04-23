.PHONY: install brain-games publish link

install:
	npm ci
	chmod +x bin/brain-games.js

brain-games:
    ./bin/brain-games.js

# Тест публикации в NPM (без реальной отправки)
publish:
	npm publish --dry-run

# Локальная "глобальная" установка пакета (для отладки)
link:
	npm link