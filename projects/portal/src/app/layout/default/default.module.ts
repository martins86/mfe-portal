import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { TranslateModule } from '@ngx-translate/core'

import { DefaultRoutingModule } from './default-routing.module'
import { DefaultComponent } from './default.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'

const materialModules = [
  MatSidenavModule,
  MatSlideToggleModule,
  ReactiveFormsModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
]

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
    RouterModule,
    HttpClientModule,
    DefaultRoutingModule,
    TranslateModule.forChild(),
    ...materialModules,
    ...pagesModules,
  ],
})
export class DefaultModule {}
