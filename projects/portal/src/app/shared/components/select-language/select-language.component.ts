import { Component } from '@angular/core'
import { ConstantsTranslations } from './../../../utils/constants'

import { DefinitionsService } from './../../services/service-definitions/definitions.service'

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent {
  session: any
  textLanguage: string
  languageOptions = ConstantsTranslations.languageOptions

  constructor(private definitionsService: DefinitionsService) {
    this.session = this.definitionsService.getDefinitions()
    this.textLanguage = this.changeTextLanguage(this.session?.language)
  }

  changeLanguage(lang: string): void {
    this.definitionsService.updateDefinitionItem('language', lang)
    this.textLanguage = this.changeTextLanguage(lang)
    this.fixRemoveClass()
    this.reloadPage()
  }

  reloadPage(): void {
    window.location.reload()
  }

  fixRemoveClass(): void {
    let element = document.querySelector('app-left-bar.dark-theme')
    element?.classList.remove('dark-theme')
  }

  changeTextLanguage(lang: string): string {
    const index = this.languageOptions.findIndex(
      (item) => item.language === lang
    )
    return this.languageOptions[index]?.textName.slice(5)
  }
}
