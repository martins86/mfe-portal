import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClient } from '@angular/common/http'

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core'

import { AppModule, HttpLoaderFactory } from './app.module'
import { ThemeService } from './shared/services/service-theme/theme.service'
import { DefinitionsService } from './shared/services/service-definitions/definitions.service'
import { AppComponent } from './app.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('AppComponent', () => {
  let app: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let translateService: TranslateService
  let themeService: ThemeService
  let definitionsService: DefinitionsService

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
      providers: [TranslateService, ThemeService, DefinitionsService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
    translateService = TestBed.inject(TranslateService)
    themeService = TestBed.inject(ThemeService)
    definitionsService = TestBed.inject(DefinitionsService)
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
    it('should call firstLoadApp', () => {
      // Arrange
      jest.spyOn(app, 'firstLoadApp')

      // Act
      app.ngOnInit()

      // Assert
      expect(app.firstLoadApp).toHaveBeenCalled()
    })
  })

  describe('Testing firstLoadApp', () => {
    it('should call firstLoadApp with session null and set default values', () => {
      // Arrange
      app.session = null
      const spy = jest.spyOn(app, 'setDefinitionDefault')

      // Act
      app.firstLoadApp()

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('pt', 'light-theme')
      spy.mockRestore()
    })

    it('should call firstLoadApp with session "en" and "dark-theme"', () => {
      // Arrange
      app.session = { language: 'en', theme: 'dark-theme' }
      const spy = jest.spyOn(app, 'setDefinitionDefault')

      // Act
      app.firstLoadApp()

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('en', 'dark-theme')
      spy.mockRestore()
    })
  })

  describe('Testing setTranslateDefault', () => {
    it('should call setThemeSession and set theme "dark-theme"', () => {
      // Arrange
      const spy = jest.spyOn(themeService, 'setThemeSession')

      // Act
      app.setDefinitionDefault('en', 'dark-theme')

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('dark-theme')
      spy.mockRestore()
    })

    it('should call setDefinitionDefault with language "pt" and theme "dark-theme"', () => {
      // Arrange
      const spy = jest.spyOn(definitionsService, 'setDefinitionDefault')

      // Act
      app.setDefinitionDefault('pt', 'dark-theme')

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('pt', 'dark-theme')
      spy.mockRestore()
    })

    it('should call addLangs with languages "pt" and "en"', () => {
      // Arrange
      const langs = ['pt', 'en']
      const spy = jest.spyOn(translateService, 'addLangs')

      // Act
      app.setDefinitionDefault('pt', 'dark-theme')

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(langs)
      spy.mockRestore()
    })

    it('should call setDefaultLang with language "pt"', () => {
      // Arrange
      const spy = jest.spyOn(translateService, 'setDefaultLang')

      // Act
      app.setDefinitionDefault('pt', 'dark-theme')

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('pt')
      spy.mockRestore()
    })

    it('should call use with language "en"', () => {
      // Arrange
      const spy = jest.spyOn(translateService, 'use')

      // Act
      app.setDefinitionDefault('en', 'dark-theme')

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('en')
      spy.mockRestore()
    })
  })
})
