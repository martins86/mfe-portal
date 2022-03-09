# Comandos npm e configurações

### Seguindo a ordem de uso, comandos e configurações usadas no projeto do portal.

<br>

> Após a instalação dos itens <br>
>
> 1. [Programas](./programs.md) <br>
> 2. [Dependências Globais](./npm-global.md)

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
# Adicionando babel/eslint-parser
npm install eslint @babel/core @babel/eslint-parser --save-dev
```

```sh
## Criando .eslintrc.json root
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "requireConfigFile": false
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
.angular

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
      dir: require('path').join(__dirname, '../../coverage'),
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

## 6. Adicionando e configurando o Husky

```sh
## Adicionando o Husky
npm install husky --save-dev
npx husky install
```

```sh
# Adicionando scripts para husky no package.json
npm set-script test:ci "ng test --no-watch --no-progress --code-coverage --browsers ChromeHeadlessNoSandbox"
npm set-script pre-commit "npx --no-install lint-staged && npm run lint"
npm set-script pre-push "npm run test:ci"
npm set-script postinstall "npx husky install && chmod ug+x .husky/*"
```

```sh
## Configurando o Husky
npx husky add .husky/pre-commit "npm run pre-commit"
npx husky add .husky/pre-push "npm run pre-push"
```

<br>

---

<br>

## 7. Adicionando e configurando o Commits

```sh
## Instalando o Commitizen no projeto.
npm install commitizen --save-dev
```

```sh
## Inicializando o configurador do changelog.
commitizen init cz-conventional-changelog --save-dev --save-exact
```

```sh
## Adicionando Commitlint
npm add @commitlint/config-conventional @commitlint/cli --save-dev
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

```sh
## Adicionando os Script no package.json.
npm set-script commit "git-cz"
```

```sh
## Adicionando commmitlint
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

<br>

---

<br>

## 8. Adicionando e configurando o Versionamento

```sh
## Instalando o Standard Version no projeto.
npm install standard-version --save-dev
```

```sh
## Adicionando os Script no package.json.
npm set-script release "standard-version"
```

<br>

---

<br>

## 9. Adicionando e editando alguns Scripts

```sh
## Scripts no package.json
npm set-script build "ng build --project=portal --base-href ./ --single-bundle=true --output-hashing=none --vendor-chunk=false --aot"
npm set-script start "ng serve --project=portal --port=5000 --host=0.0.0.0 --disable-host-check --open"
npm set-script test "ng test --code-coverage"
npm set-script test:dev "npm run test -- --progress --browsers Chrome"
npm set-script test:ci "npm run test -- --no-watch --no-progress --browsers ChromeHeadlessNoSandbox"
```

<br>

---

<br>

## 10. Adicionando o Angular Material

```sh
ng add @angular/material@13.2.5 --project=portal
```

<br>

---

<br>

## 11. Adicionando o Bootstrap

```sh
npm install bootstrap
```

<br>

---

<br>

## 12. Adicionando e configurando o Travis CI

```sh
## Adicionando o Travis CI
# Criando o Token GITHUB_TOKEN_TRAVIS
https://github.com/settings/tokens

# martins86 / mfe-portal
https://app.travis-ci.com/martins86/mfe-portal

# Criando o .travis.yml
language: node_js

os: linux

node_js:
  - node

dist: xenial

addons:
  chrome: stable
  sonarcloud:
    organization: 'martins86'
    token:
      secure: $SONAR_TOKEN

cache:
  yarn: true
  directories:
    - node_modules

install:
  - npm install -g @angular/cli@13.2.5
  - npm install

before_install:
  - export DISPLAY=:99.0
  - export NODE_OPTIONS=--openssl-legacy-provider
  - sh -e /etc/init.d/xvfb start

script:
  - npm run lint
  - npm run test:ci
  - sonar-scanner
  - npm run build
  - cd dist/portal
  - cp index.html 404.html

branches:
  only:
    - master

env:
  - EMBER_VERSION=release

jobs:
  fast_finish: true
  allow_failures:
    - env: EMBER_VERSION=release

deploy:
  provider: pages
  github_token: $GITHUB_TOKEN_TRAVIS
  local_dir: dist/portal
  on:
    branch: master

```

<br>

---

<br>

## 13. Adicionando e configurando o SonarCloud

```sh
## Acesse o https://sonarcloud.io entre com sua conta do github para acesso aos projetos
https://sonarcloud.io

# Crie a empresa e adicione o repositório desejado, logo após ele executara um scan, finalizando o scan acesse o information para obter as keys do projeto
https://sonarcloud.io/project/information?id=martins86_mfe-portal
```

```sh
# Adicionando sonar-project.properties
sonar.host.url=https://sonarcloud.io
sonar.organization=martins86
sonar.projectVersion=1.0
sonar.projectName=martins86_mfe-portal
sonar.projectKey=martins86_mfe-portal

sonar.sourceEncoding=UTF-8
sonar.sources=projects

sonar.exclusions=**/node_modules/**,**/*.js
sonar.coverage.exclusions=**/*.js,src/main.ts,src/polyfills.ts,**/*environment*.ts,**/*module.ts

sonar.tests=app
sonar.test.inclusions=**/*.spec.ts,**/*test.ts

sonar.typescript.tsconfigPath=tsconfig.json

sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

```sh
## depois de configurar o sonar e instalar o scanner
## gerar token no sonar e colocar ele no travis tbm
sonar-scanner -Dsonar.login=**TOKEN**
```

<br>

---

<br>
