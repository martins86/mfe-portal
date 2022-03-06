# Comandos npm e configurações

### Seguindo a ordem de uso, comandos e configurações usadas no projeto do portal.

<br>

> Após a instalação dos itens <br>
>
> 1. [Programas](./programs.md) <br>
> 2. [Dependências Globais](./npm-global.md) <br>
> <br>

<br>

## 1. Criando workspace do portal com Angular CLI

```sh
# criando o workspace
ng new mfe-portal --create-application=false
```

<br>

---

<br>

## 2. Adicionando e configurando o Eslint para adicionar o app

```sh
# Adicionando eslint e incluindo no cli angular.json
ng add @angular-eslint/schematics@13.1.0
ng config cli.defaultCollection @angular-eslint/schematics
```

```sh
## Criando .eslintrc.json root
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json", "e2e/tsconfig.json"],
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {}
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    }
  ]
}
```

```sh
## Gerando MFE app portal com eslint, routing e style
ng g @angular-eslint/schematics:app portal --routing=true --strict=true --style=scss
```

<br>

---

<br>

## 3. Adicionando e configurando o Prettier

```sh
# Criando o .prettierignore
build
coverage
node_modules
dist
documents
.angular
.vscode

```

```sh
# Criando o .prettierrc.json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

```sh
## Adicionando o Prettier
npm install prettier --save-dev --save-exact
```

```sh
## Adicionando scripts do prettier no package.json
npm set-script prettier-write "npx prettier --write --ignore-unknown ."
npm set-script prettier-check "npx prettier --check ."
```

<br>

---

<br>

## 4. Adicionando e configurando o Lint-staged

```sh
## Criando o .lintstagedrc.json
{
  "*.{js,ts,md,html,scss,json}": [
    "npm run prettier-write",
    "git add",
    "npm run prettier-check"
  ]
}
```

```sh
## Adicionando o Lint Staged
npm install lint-staged --save-dev
```

<br>

---

<br>

## 5. Configurando o Karma

```sh
## Adicionando o karma.root.conf.js
module.exports = function () {
  return {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {},
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    thresholds: {
      emitWarning: false,
      global: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80,
      },
      each: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80,
      },
    },
    reporters: ['progress', 'coverage', 'kjhtml'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--headless', '--no-sandbox', '--remote-debugging-port=9222'],
      },
    },
    browserDisconnectTolerance: 8,
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 20000,
    captureTimeout: 210000,
  };
};

```

```sh
## Editando o karma.conf.js
var getBaseKarmaConfig = require('./../../karma.root.conf');

module.exports = function (config) {
  var baseRootConfig = getBaseKarmaConfig();
  config.set({
    ...baseRootConfig,
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/shared-lib'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'lcov' }],
      fixWebpackSourcePaths: true,
    },
    logLevel: config.LOG_INFO,
  });
};
```

<br>

---

<br>
