import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { MaintenanceRoutingModule } from './maintenance-routing.module'
import { MaintenanceComponent } from './maintenance.component'

@NgModule({
  declarations: [MaintenanceComponent],
  imports: [CommonModule, MaintenanceRoutingModule, TranslateModule.forChild()],
})
export class MaintenanceModule {}
