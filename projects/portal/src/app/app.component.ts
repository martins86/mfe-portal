import { Component, OnInit } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'
import { DefinitionsService } from './shared/services/service-definitions/definitions.service'
import { ThemeService } from './shared/services/service-theme/theme.service'

import { ConstantsTranslations, ConstantsThemes } from './utils/constants'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  session: any

  constructor(
    private translateService: TranslateService,
    private definitionsService: DefinitionsService,
    private themeService: ThemeService
  ) {
    this.session = this.definitionsService.getDefinitions()
  }

  ngOnInit() {
    this.firstLoadApp()
  }

  firstLoadApp(): void {
    if (this.session) {
      this.setDefinitionDefault(this.session.language, this.session.theme)
    } else {
      this.setDefinitionDefault(
        ConstantsTranslations.portugueseLanguage,
        ConstantsThemes.lightClassName
      )
    }
  }

  setDefinitionDefault(lang: string, theme: string): void {
    this.themeService.setThemeSession(theme)
    this.definitionsService.setDefinitionDefault(lang, theme)
    this.translateService.addLangs(ConstantsTranslations.languages)
    this.translateService.setDefaultLang(lang)
    this.translateService.use(lang)
  }
}
