import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DefaultRoutingModule } from './default-routing.module'
import { DefaultComponent } from './default.component'

import { HeaderComponent } from './header/header.component'
import { LeftBarComponent } from './left-bar/left-bar.component'
import { FooterComponent } from './footer/footer.component'

const layoutComponents = [HeaderComponent, LeftBarComponent, FooterComponent]

import { MaintenanceModule } from '../../pages/maintenance/maintenance.module'

const pagesModules = [MaintenanceModule]

@NgModule({
  declarations: [DefaultComponent, ...layoutComponents],
  imports: [CommonModule, DefaultRoutingModule, ...pagesModules],
})
export class DefaultModule {}
