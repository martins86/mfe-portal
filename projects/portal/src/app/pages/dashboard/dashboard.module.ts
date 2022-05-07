import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { MatIconModule } from '@angular/material/icon'

import { DashboardComponent } from './dashboard.component'

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatIconModule, TranslateModule.forChild()],
})
export class DashboardModule {}
