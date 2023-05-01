# Пока цельной идеи нет, React приложение с максимально возможным функционалом

## 1. Добавлен ESLint и Prettier

конфигурацию и настройки ESLint взял из статьи https://dev.to/eprikhodko/eslint-prettier-vs-code-create-react-app-airbnb-52bc
Проблемы:

- Prettier не находил файл с локальными настройками.
  Решение: переименовал файл prettierrc.json в .prettierrc и добавил это название в настройки VSCode
  в workspace settings (JSON) строку "prettier.configPath": ".prettierrc"
- При коммите ыорнинг от гита про LF b CTLF
  Решение: Полное описание тут https://stackoverflow.com/questions/1967370/git-replacing-lf-with-crlf
  Выполнил команду git config --local core.autocrlf false

## 2. Добавил базовую маршрутизацию, редирект, и redux store

## 3. Подключил firebase к проекту.

файл с настройками храниться в корне проекта, в .env.local - чтобы работало корректно надо называть поля REACT_APP_...

Проблемы: В Firebase, при поптыке сохранить тип аунтефикации по email и password - вылезала ошибка
Решение: отключить в браузере плагин CORS (или использовать другой браузер)
