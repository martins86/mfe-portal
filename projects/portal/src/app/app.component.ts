import { Component } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt'])
    translate.setDefaultLang('pt')
    translate.use('pt')
  }
}
