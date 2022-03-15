import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DefaultRoutingModule } from './default-routing.module'
import { DefaultComponent } from './default.component'

import { MatIconModule } from '@angular/material/icon'

const materialModules = [MatIconModule]

import { TopBarComponent } from './top-bar/top-bar.component'
import { LeftBarComponent } from './left-bar/left-bar.component'
import { BottomBarComponent } from './bottom-bar/bottom-bar.component'

const layoutComponents = [TopBarComponent, LeftBarComponent, BottomBarComponent]

import { MaintenanceModule } from '../../pages/maintenance/maintenance.module'
import { NotFoundModule } from '../../pages/not-found/not-found.module'

const pagesModules = [MaintenanceModule, NotFoundModule]

@NgModule({
  declarations: [DefaultComponent, ...layoutComponents],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    ...materialModules,
    ...pagesModules,
  ],
})
export class DefaultModule {}
