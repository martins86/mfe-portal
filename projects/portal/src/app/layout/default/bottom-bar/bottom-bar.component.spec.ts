import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { DebugElement, Predicate } from '@angular/core'
import { By } from '@angular/platform-browser'

import { TranslateTestingModule } from 'ngx-translate-testing'

import { DefaultModule } from '../default.module'

import { BottomBarComponent } from './bottom-bar.component'
import { TranslateStubModule } from '../../../__stubs__/translate-stub.module'
import { ConstantsTranslations } from '../../../utils/constants'

describe('BottomBarComponent', () => {
  let component: BottomBarComponent
  let fixture: ComponentFixture<BottomBarComponent>
  let de: DebugElement
  let el: HTMLElement

  function beforeEachAll(): void {
    fixture = TestBed.createComponent(BottomBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }

  function textElementByCss(ByCss: Predicate<DebugElement>): HTMLElement {
    de = fixture.debugElement.query(ByCss)
    el = de.nativeElement

    return el
  }

  describe('Testing footer', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [BottomBarComponent],
        imports: [DefaultModule, RouterTestingModule, TranslateStubModule],
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
        declarations: [BottomBarComponent],
        imports: [
          DefaultModule,
          RouterTestingModule,
          TranslateTestingModule.withTranslations(
            ConstantsTranslations.englishLanguage,
            require(`./../../../../assets/i18n/${ConstantsTranslations.englishTranslations}`)
          ),
        ],
      }).compileComponents()
    })

    beforeEach(() => {
      return beforeEachAll()
    })

    it('should show text "TMF © All rights reserved 2022- current year" ', () => {
      // Arrange
      const textEn = `TMF © All rights reserved 2022-${component.currentYear}`
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
        declarations: [BottomBarComponent],
        imports: [
          DefaultModule,
          RouterTestingModule,
          TranslateTestingModule.withTranslations(
            ConstantsTranslations.portugueseLanguage,
            require(`./../../../../assets/i18n/${ConstantsTranslations.portugueseTranslations}`)
          ),
        ],
      }).compileComponents()
    })

    beforeEach(() => {
      return beforeEachAll()
    })

    it('should show text "TMF © Todos os direitos reservados 2022- current year" ', () => {
      // Arrange
      const textPT = `TMF © Todos os direitos reservados 2022-${component.currentYear}`
      const textElement = textElementByCss(By.css('p'))
        .textContent?.toString()
        .trim()

      // Assert
      expect(textElement).toEqual(textPT)
    })
  })
})
