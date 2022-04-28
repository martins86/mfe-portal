import { DebugElement, NO_ERRORS_SCHEMA, Predicate } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'

import { TranslateTestingModule } from 'ngx-translate-testing'

import { TranslateStubModule } from './../../__stubs__/translate-stub.module'
import { ConstantsTranslations } from './../../utils/constants'

import { MaintenanceComponent } from './maintenance.component'
import { MaintenanceModule } from './maintenance.module'

describe('MaintenanceComponent', () => {
  let component: MaintenanceComponent
  let fixture: ComponentFixture<MaintenanceComponent>
  let de: DebugElement
  let el: HTMLElement

  function beforeEachAll(): void {
    fixture = TestBed.createComponent(MaintenanceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }

  function textElementByCss(ByCss: Predicate<DebugElement>): HTMLElement {
    de = fixture.debugElement.query(ByCss)
    el = de.nativeElement

    return el
  }

  describe('Testing page maintenance', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [MaintenanceComponent],
        imports: [MaintenanceModule, RouterTestingModule, TranslateStubModule],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents()
    })

    beforeEach(() => {
      return beforeEachAll()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })

  describe('Testing text translate en', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [MaintenanceComponent],
        imports: [
          MaintenanceModule,
          RouterTestingModule,
          TranslateTestingModule.withTranslations(
            ConstantsTranslations.englishLanguage,
            require(`./../../../assets/i18n/${ConstantsTranslations.englishTranslations}`)
          ),
        ],
      }).compileComponents()
    })

    beforeEach(() => {
      return beforeEachAll()
    })

    it('should show text "the site is in maintenance mode and will be back soon!" ', () => {
      // Arrange
      const textEn = `the site is in maintenance mode and will be back soon!`
      const textElement = textElementByCss(By.css('p'))
        .textContent?.toString()
        .trim()

      // Assert
      expect(textElement).toEqual(textEn)
    })
  })

  describe('Testing text translate pt', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [MaintenanceComponent],
        imports: [
          MaintenanceModule,
          RouterTestingModule,
          TranslateTestingModule.withTranslations(
            ConstantsTranslations.portugueseLanguage,
            require(`./../../../assets/i18n/${ConstantsTranslations.portugueseTranslations}`)
          ),
        ],
      }).compileComponents()
    })

    beforeEach(() => {
      return beforeEachAll()
    })

    it('should show text "o site está em modo manutenção e retornara em breve!" ', () => {
      // Arrange
      const textEn = `o site está em modo manutenção e retornara em breve!`
      const textElement = textElementByCss(By.css('p'))
        .textContent?.toString()
        .trim()

      // Assert
      expect(textElement).toEqual(textEn)
    })
  })
})
