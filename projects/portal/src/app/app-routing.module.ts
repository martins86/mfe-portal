import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@portal/layout/default/default.module').then(
        (module) => module.DefaultModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
