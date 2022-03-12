import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DefaultRoutingModule } from './default-routing.module'
import { DefaultComponent } from './default.component'

import { HeaderComponent } from './header/header.component'
import { LeftBarComponent } from './left-bar/left-bar.component'
import { FooterComponent } from './footer/footer.component'

const layoutModules = [HeaderComponent, LeftBarComponent, FooterComponent]

@NgModule({
  declarations: [DefaultComponent, ...layoutModules],
  imports: [CommonModule, DefaultRoutingModule],
})
export class DefaultModule {}
