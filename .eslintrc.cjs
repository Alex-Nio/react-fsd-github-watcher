module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  plugins: ['prettier', 'react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // СТИЛЬ РАЗРЫВА СТРОК
    'linebreak-style': ['error', 'auto'], // Устанавливает стиль разрыва строки в формат Unix (LF).

    // ОТСУТСТВИЕ CONSOLE.LOG
    'no-console': 'off', // Разрешает использование console.log в коде.

    // ОТСУТСТВИЕ DEBUGGER
    'no-debugger': 'error', // Запрещает использование оператора debugger в коде.

    // СКОБКИ В СТРЕЛОЧНЫХ ФУНКЦИЯХ
    'arrow-parens': ['error', 'always', { requireForBlockBody: true }], // Требует использование скобок в стрелочных функциях всегда.

    // ОТКЛЮЧЕНИЕ УНАРНЫХ ОПЕРАТОРОВ ++ И --
    'no-plusplus': 'off', // Разрешает использование унарных операторов ++ и --.

    // ОТКЛЮЧЕНИЕ ОБЯЗАТЕЛЬНОГО ВЫЗОВА SUPER() В КОНСТРУКТОРАХ
    'constructor-super': 'off', // Отключает требование вызова super() в конструкторах производных классов.

    // ГРУППИРОВКА СЛОЖНЫХ ВЫРАЖЕНИЙ
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ], // Заключает сложные выражения в круглые скобки для ясности.

    // ОТКЛЮЧЕНИЕ ПРАВИЛА О РАСШИРЕНИИ ФАЙЛОВ В ПУТИ ИМПОРТА
    'import/extensions': 'off', // Отключает правило обязательного указания расширения файла в пути импорта.

    // ОТКЛЮЧЕНИЕ ПРАВИЛА О ПРЕДПОЧТЕНИИ ЭКСПОРТА ПО УМОЛЧАНИЮ
    'import/prefer-default-export': 'off', // Отключает предпочтение экспорта по умолчанию.

    // ОТСУТСТВИЕ НЕИСПОЛЬЗУЕМЫХ ВЫРАЖЕНИЙ
    'no-unused-expressions': 'error', // Запрещает неиспользуемые выражения.

    // ОТКЛЮЧЕНИЕ ЗАПРЕТА ПЕРЕНАЗНАЧЕНИЯ ПАРАМЕТРОВ
    'no-param-reassign': 'off', // Разрешает переназначение параметров функции.

    // ДЕСТРУКТУРИЗАЦИЯ
    'prefer-destructuring': [
      'error',
      {
        array: true, // Требует деструктуризацию массивов.
        object: true, // Требует деструктуризацию объектов.
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // ЗАПРЕТ ПОБИТОВЫХ ОПЕРАТОРОВ, КРОМЕ ~
    'no-bitwise': [
      'error',
      {
        allow: ['~'],
      },
    ],

    // ЗАПРЕТ НЕИСПОЛЬЗУЕМЫХ ПЕРЕМЕННЫХ
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_', // Игнорировать неиспользуемые переменные, начинающиеся с символа '_'.
      },
    ],

    // МАКСИМАЛЬНАЯ ДЛИНА СТРОКИ
    'max-len': [
      'error',
      {
        code: 120, // Устанавливает максимальную длину строки кода в 120 символов.
      },
    ],

    // РАЗРЫВ СТРОК ПОКАЗАНИЯ ФИГУРНЫХ СКОБОК
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
      },
    ], // Применяет согласованные разрывы строк после открытия и перед закрытием фигурных скобок.

    // ПУСТАЯ СТРОКА МЕЖДУ ЧЛЕНАМИ КЛАССА
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ], // Требует пустую строку между членами класса.

    // ЗАПЯТАЯ В КОНЦЕ ОБЪЕКТОВ И МАССИВОВ
    'comma-dangle': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
  },
};
