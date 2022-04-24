import {
  EventEmitter,
  Injectable,
  NgModule,
  Pipe,
  PipeTransform,
} from '@angular/core'
import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core'
import { Observable, of } from 'rxjs'

const translations: any = {}

class FakeLoader implements TranslateLoader {
  getTranslation(_lang: string): Observable<any> {
    return of(translations)
  }
}

@Pipe({
  name: 'translate',
})
export class TranslatePipeMock implements PipeTransform {
  public name = 'translate'

  public transform(query: string, ..._args: any[]): any {
    return query
  }
}

@Injectable()
export class TranslateServiceStub {
  public onLangChange = new EventEmitter<any>()
  public onTranslationChange = new EventEmitter<any>()
  public onDefaultLangChange = new EventEmitter<any>()
  public addLangs(_langs: string[]) {
    return
  }
  public getLangs() {
    return ['en', 'pt']
  }
  public getBrowserLang() {
    return ''
  }
  public getBrowserCultureLang() {
    return ''
  }
  public use(_lang: string) {
    return null
  }
  public get<T>(key: T): Observable<T> {
    return of(key)
  }
}

@NgModule({
  declarations: [TranslatePipeMock],
  providers: [
    { provide: TranslateService, useClass: TranslateServiceStub },
    { provide: TranslatePipe, useClass: TranslatePipeMock },
  ],
  imports: [
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: FakeLoader },
    }),
  ],
  exports: [TranslatePipeMock, TranslateModule],
})
export class TranslateStubModule {}
