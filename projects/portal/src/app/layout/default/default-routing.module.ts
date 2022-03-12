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
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
