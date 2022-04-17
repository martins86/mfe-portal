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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
