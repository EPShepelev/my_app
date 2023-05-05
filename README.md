# React приложение. Управление состоянием через Redux (Redux-toolkit) Backend - firebase

## 1. Подключил ESLint и Prettier

Конфигурацию и настройки ESLint на основе [статьи](https://dev.to/eprikhodko/eslint-prettier-vs-code-create-react-app-airbnb-52bc)
Проблемы:

- Prettier не находил файл с локальными настройками - переименовал файл prettierrc.json в .prettierrc и добавил это название в настройки VSCode в workspace settings (JSON) строку "prettier.configPath": ".prettierrc"
- При коммите warning от гита про LF и CTLF - git config --local core.autocrlf false Подробное описание [тут](https://stackoverflow.com/questions/1967370/git-replacing-lf-with-crlf)

## 2. Добавил базовую маршрутизацию, редирект, и redux store

## 3. Подключил firebase к проекту.

файл с настройками храниться в корне проекта, в .env.local - чтобы работало корректно надо называть поля REACT_APP_...
Доступна простая регистрация и авторизация через почту и пароль 

Проблемы: В Firebase, при поптыке сохранить тип аунтефикации по email и password - вылезала ошибка
Решение: отключить в браузере плагин CORS (или использовать другой браузер)

## 3. Список TODO:
  - реализовать страницу постов и функционал - просмотр постов других пользователей, создание/удаление своих постов
  - добавить простую валидацию - на пустоту пароля и на email