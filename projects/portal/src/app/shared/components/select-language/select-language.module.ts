import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectLanguageComponent } from './select-language.component'

import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

const MatModules = [MatMenuModule, MatButtonModule, MatIconModule]

@NgModule({
  declarations: [SelectLanguageComponent],
  imports: [CommonModule, ...MatModules],
  exports: [SelectLanguageComponent],
})
export class SelectLanguageModule {}
