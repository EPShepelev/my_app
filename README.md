# Пока цельной идеи нет, React приложение с максимально возможным функционалом

## 1. Добавлен ESLint и Prettier

конфигурацию и настройки ESLint взял из статьи https://dev.to/eprikhodko/eslint-prettier-vs-code-create-react-app-airbnb-52bc
Проблемы:

- Prettier не находил файл с локальными настройками.
  Решение: переименовал файл prettierrc.json в .prettierrc и добавил это название в настройки VSCode
  в workspace settings (JSON) строку "prettier.configPath": ".prettierrc"
