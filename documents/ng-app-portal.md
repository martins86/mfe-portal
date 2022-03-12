# Criando itens do portal

## Criando o layout default com module, routes, header, footer e left-bar

```sh
ng g m layout/default/ --module app --routing

ng g c layout/default/
ng g c layout/default/header
ng g c layout/default/left-bar
ng g c layout/default/footer
```

## Configurando rota para o layout default (app-routing.module.ts)

```sh
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@portal/layout/default/default.module').then(
        (module) => module.DefaultModule
      ),
  },
];
```

## Criando a página de manutenção

```sh
ng g m pages/maintenance/ --module layout/default --routing

ng g c pages/maintenance/
```

## Configurando rota para pagina de manutenção (default-routing.module.ts)

```sh
const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'maintenance',
        pathMatch: 'full',
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('@portal/pages/maintenance/maintenance.module').then(
            (module) => module.MaintenanceModule
          ),
      },
    ]
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
    component: DefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'maintenance',
        pathMatch: 'full',
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
    ]
  },
]
```
