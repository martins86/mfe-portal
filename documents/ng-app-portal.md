# Criando itens do portal

## Criando o layout default com module, routes, top-bar, bottom-bar e left-bar

```sh
ng g m layout/default/ --module app --routing

ng g c layout/default/
ng g c layout/default/top-bar
ng g c layout/default/left-bar
ng g c layout/default/bottom-bar
```

## Configurando rota para o layout default (app-routing.module.ts)

```sh
const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@portal/pages/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('@portal/pages/maintenance/maintenance.module').then(
            (module) => module.MaintenanceModule
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import('@portal/pages/not-found/not-found.module').then(
            (module) => module.NotFoundModule
          ),
      },
    ],
  },
]
```

## Criando a página de manutenção

```sh
ng g m pages/maintenance/ --module layout/default --routing

ng g c pages/maintenance/
```

## Configurando rota para pagina de manutenção

```sh
const routes: Routes = [
  {
    path: '',
    component: MaintenanceComponent,
  },
]
```

## Criando a página de erro 404

```sh
ng g m pages/not-found/ --module layout/default --routing

ng g c pages/not-found/
```

## Configurando rota para pagina de erro (default-routing.module.ts)

```sh
const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
  },
]
```

## Criando a página dashboard

```sh
ng g m pages/dashboard/ --module layout/default --routing

ng g c pages/maintenance/
```

## Configurando rota para pagina dashboard (dashboard-routing.module.ts)

```sh
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
]
```

<br>
<br>

[⬆ Voltar ao topo](#criando-itens-do-portal)<br>
