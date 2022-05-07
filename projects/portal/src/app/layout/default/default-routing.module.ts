import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DefaultComponent } from './default.component'

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./../../pages/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('./../../pages/maintenance/maintenance.module').then(
            (module) => module.MaintenanceModule
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./../../pages/not-found/not-found.module').then(
            (module) => module.NotFoundModule
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
