# Coisas a Fazer no projeto

<br>

- tranlate todo o site

  https://github.com/ngx-translate/core
  https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate
  https://stackblitz.com/github/ngx-translate/example
  https://www.youtube.com/watch?v=oxigDfDfD8Q&ab_channel=ScalableScripts 7:15

- user-definitions - guarda no session-storage theme e translate (preenche no login e usa depois do login)
- userDefinitions no guard canActivate do login

- app-definitions - guarda no session-storage maintenance = off, theme e translate default (preenche no start é o padrão até o login)
  if (userDefinitions) { } // else appDefinitions
  <br>

- Criar branch feature/login
  - login com firebase
  - pagina e service, usar o interceptor
    - acessos / perfil
    - adm
    - dev
    - user

<br>

- Criar branch feature/upload-excel-b3-movimentacoes
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

<br>
<br>

[⬆ Voltar ao topo](#coisas-a-fazer-no-projeto)<br>
