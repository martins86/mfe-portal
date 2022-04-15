import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClient } from '@angular/common/http'

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core'

import { AppModule, HttpLoaderFactory } from './app.module'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let app: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let translateService: TranslateService
  let httpTesting: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        AppModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [TranslateService],
    }).compileComponents()
    translateService = TestBed.inject(TranslateService)
    httpTesting = TestBed.inject(HttpTestingController)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    app = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(app).toBeTruthy()
  })

  describe('Testing ngOnInit', () => {
    it('should call setTranslateDefault', () => {
      // Arrange
      jest.spyOn(app, 'setTranslateDefault')

      // Act
      app.ngOnInit()

      // Assert
      expect(app.setTranslateDefault).toHaveBeenCalled()
    })
  })

  describe('Testing setTranslateDefault', () => {
    it('should call addLangs and set langs "en, pt"', () => {
      // Arrange
      const langs = ['en', 'pt']

      // Assert
      expect(translateService.getLangs()).toEqual(langs)
    })

    it('should call setDefaultLang and set default "pt"', () => {
      // Arrange
      const lang = 'pt'

      // Assert
      expect(translateService.getDefaultLang()).toEqual(lang)
    })

    it('should call use and set use "pt"', () => {
      // Arrange
      const langs = 'pt'

      // Assert
      expect(translateService.currentLang).toEqual(langs)
    })
  })
})
