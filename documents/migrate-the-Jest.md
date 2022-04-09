# Migrando do Karma e Jasmine para o Jest

## 01. Removendo Karma e Jasmine

```sh
# Removendo devDependencies no package.json
npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter karma-spec-reporter
```

```sh
# Removendo arquivos de config
rm karma.root.conf.js
rm projects/portal/karma.conf.js
rm projects/portal/src/test.ts
```

## 02. Adicionando Jest

```sh
# Adicionando devDependencies no package.json
npm install @types/jest jest jest-preset-angular jest-junit --save-dev
```

## Configurando Jest

```sh
# Removendo test do angular.json
"test": {
  "builder": "@angular-devkit/build-angular:karma",
  "options": {
    "main": "projects/portal/src/test.ts",
    "polyfills": "projects/portal/src/polyfills.ts",
    "tsConfig": "projects/portal/tsconfig.spec.json",
    "karmaConfig": "projects/portal/karma.conf.js",
    "codeCoverageExclude": ["**/*.module.ts", "**/*.module.js"],
    "inlineStyleLanguage": "scss",
    "assets": [
      "projects/portal/src/favicon.ico",
      "projects/portal/src/assets"
    ],
    "styles": ["projects/portal/src/styles.scss"],
    "scripts": []
  }
},
```

```sh
# Adicionando o jest.config.js na raiz
module.exports = {
  globalSetup: 'jest-preset-angular/global-setup',
  projects: ['<rootDir>/projects/portal'],
  transformIgnorePatterns: [
    "^.+\\.js$"
  ],
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!**/**.module.ts",
    "!**/**.model.ts",
  ],
  coverageReporters: ["lcov"],
  coverageDirectory: "<rootDir>/coverage/",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./coverage",
        outputName: "mfe-portal-app.xml",
      },
    ],
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};

```

```sh
# Adicionando o setup-jest.ts dentro de projects/portal
import 'jest-preset-angular/setup-jest'
```

```sh
# Adicionando outro jest.config.js agora dentro de projects/portal
module.exports = {
  preset: 'jest-preset-angular',
  moduleNameMapper: {},
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
}

```

```sh
# Atualizando o tsconfig.spec.ts dentro de projects/portal
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "esModuleInterop": true,
    "outDir": "../../out-tsc/spec",
    "types": [
      "jest"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}

```

## Alterando os Scripts

```sh
# Alterando scripts no package.json
npm set-script test "jest --config ./jest.config.js --coverage --no-cache"
npm set-script test:ci "npm run test -- --silent --colors --coverageReporters=text"
npm set-script test:dev "npm run test -- -o --watch --coverageReporters=text-summary"
```