# GitHub WaTcher
___

## About

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Installation:

- IDE
```bash
npm install --save-dev eslint eslint-plugin-prettier eslint-config-prettier prettier eslint-plugin-react
```
- TypeScript Types
```bash
npm install typescript @types/node @types/react @types/react-dom
```
- Sass
```bash
npm install -D sass
```

#### Technologies:

- Eslint
- Prettier
- Axios
- React
- React/toolkit
- TypeScript
- Scss
- Feature sliced design
- GraphQL

#### Usage:

- Eslint
```bash
npx eslint -c .eslintrc.cjs "path_to_your_files/*.js"
```

### Automatic Configuration Detection

You can also run ESLint without specifying the configuration file. ESLint will automatically detect and use the `.eslintrc.cjs` file if it is present in your project root:

```bash
npx eslint "src/**/*.js"
```

## Additional Information:

- [ESLint documentation](https://eslint.org/docs/user-guide/getting-started)

- [FEATURE SLICED DESIGN official](https://feature-sliced.design)


#### GitHub API articles:

- [Getting Started GraphQL](https://www.robinwieruch.de/getting-started-github-graphql-api/)

- [GraphQL Request vol.1](https://habr.com/ru/articles/569556/)

- [GraphQL Request vol.2](https://habr.com/ru/articles/569560/)

## Helpers:


Таблица соответствия параметров и полей GraphQL:

| Требуемые данные                                  | Поле GraphQL                     |
|---------------------------------------------------|----------------------------------|
| Название репозитория                              | `name`                           |
| Количество звезд на GitHub                        | `stargazerCount`                 |
| Дата последнего коммита                           | `pushedAt`                       |
| Ссылка на GitHub                                  | `url`                            |
| Фото владельца репозитория (если есть)            | `owner.avatarUrl`                |
| Никнейм владельца репозитория с ссылкой на него   | `owner.login` и `owner.url`      |
| Список используемых языков в репозитории          | `languages.nodes` -> `name`      |
| Краткое описание репозитория                      | `description`                    |

Пример полученных данных для одного репозитория:
```json
{
  "name": "gulp",
  "url": "https://github.com/gulpjs/gulp",
  "description": "A toolkit to automate & enhance your workflow",
  "stargazerCount": 32952,
  "pushedAt": "2024-05-31T22:23:47Z",
  "owner": {
    "login": "gulpjs",
    "avatarUrl": "https://avatars.githubusercontent.com/u/6200624?v=4",
    "url": "https://github.com/gulpjs"
  },
  "languages": {
    "nodes": [
      { "name": "JavaScript" }
    ]
  }
}
```
