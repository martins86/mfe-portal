# Requisitos para desenvolvimento

- Seguir as estruturas do projeto.
- Sempre se questionar se o item é um componente reaproveitável.
- Nunca pular os testes ou commits sem teste, manter a cobertura acima dos 90%.
- Sempre Tipar, criar interfaces únicas ou reaproveitável.
- Sempre programar em ingles, nomenclaturas e objetivas.

<br>

# Estrutura proposta

```
## Projeto portal
projects/
    portal/
        src/

app/

    layout/ -> tudo que for referente a layout vai aqui.
        default/ -> versão padrão do layout.
        v1/ -> uma versão diferente caso exista.

    pages/ -> tudo que for referente a layout vai aqui.
        not-found/ -> tudo que for de uso exclusivo e único da pagina vai aqui.
            components/ -> componentes usados só nessa pagina.
            services/ -> serviços  usados só nessa pagina.
            interfaces/ interfaces usadas só nessa pagina.
            not-found.module.ts/ modulo do not-found com imports e exports.
            not-found.routing.ts/ modulo para as rotas da not-found.

    shared/ -> tudo que for reaproveitável no portal.
        components/
        services/
        interfaces/

assets/
    styles/
```
