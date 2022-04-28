import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'

import { ConstantsThemes } from '../../../utils/constants'

import { DefinitionsService } from '../service-definitions/definitions.service'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  light = ConstantsThemes.lightClassName
  dark = ConstantsThemes.darkClassName

  constructor(private definitionsService: DefinitionsService) {}

  toggleThemes(toggleControl: FormControl, overlayElement: HTMLElement): void {
    toggleControl.valueChanges.subscribe((isDark: boolean) => {
      if (isDark) {
        this.switchClass(this.dark, this.light, overlayElement)
        this.definitionsService.updateDefinitionItem('theme', this.dark)
      } else {
        this.switchClass(this.light, this.dark, overlayElement)
        this.definitionsService.updateDefinitionItem('theme', this.light)
      }
    })
  }

  getThemeSession(): string {
    let userDefinitionSession = this.definitionsService.getDefinitions()
    return userDefinitionSession?.theme || ConstantsThemes.lightClassName
  }

  setThemeSession(theme: string): void {
    this.definitionsService.updateDefinitionItem('theme', theme)
    if (theme === this.dark) {
      this.switchClass(this.dark, this.light)
    } else {
      this.switchClass(this.light, this.dark)
    }
  }

  switchClass(
    addClass: string,
    removeClass: string,
    overlayElement?: HTMLElement
  ): void {
    if (overlayElement) {
      overlayElement.classList.remove(removeClass)
      overlayElement.classList.add(addClass)
    }
    document.body.classList.remove(removeClass)
    document.body.classList.add(addClass)
    let element = document.querySelector('app-left-bar.dark-theme')
    element?.classList.remove('dark-theme')
  }
}
