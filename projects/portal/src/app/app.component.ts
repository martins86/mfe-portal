import { Component, OnInit } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.setTranslateDefault()
  }

  setTranslateDefault(): void {
    this.translateService.addLangs(['en', 'pt'])
    this.translateService.setDefaultLang('pt')
    this.translateService.use('pt')
  }
}
