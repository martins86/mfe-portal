# Coisas a Fazer no projeto

- Criar pagina manutenção, remover conteúdo default

<br>

- Criar primeira release 0.0.1

<br>

- Criar branch layout
  - Adicionar um ng-app-portal.md (doc do cli ng)
  - Copiar o layout roxo (pensar em outras cores)
  - Adicionar Translate
  - Adicionar modo escuro e claro

<br>

- Criar branch jasmine-jest (trocar o jasmine e karma pelo jest) <br>
  - Referencias: <br>
    https://dev.to/this-is-angular/migrate-from-jasmine-to-jest-and-testing-in-angular-286i
    https://medium.com/angular-in-depth/migrate-your-angular-library-to-jest-faba9579591a

<br>

- Criar branch login
  - login com firebase
  - pagina e service, usar o interceptor
    - acessos / perfil
    - adm
    - dev
    - user

<br>

- Criar branch upload-excel-b3-movimentacoes
  - Criar pagina para upload de arquivo excel

<br>

## implementar feature toggle

- criar crud para add nova ft - só tem acesso dev e adm
- criar enum com id pra cada ft = { id = 1, featureName="showSignUpLink" } shared/enums/featureToggleEnum.ts
- service para encrypt e decrypt das fts
- diretiva que recebe o feature-name="showSignUpLink"

https://blog.theodo.com/2016/08/feature-toggling-in-angular-with-20-lines-of-code/

## DB realtime com FireBase

- db-user
  - com infos do user
- db-b3
  - tem só o que vem da b3 [get, put](upload-b3)
- db-log-b3
  - a cada upload com sucesso guarda data e hr
- db-investimentos
  - só com o que é exibido no (get, put e delete)
- db-feature-toggle
  - get, post e delete
