import { DebugElement, Predicate } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'

import { TranslateTestingModule } from 'ngx-translate-testing'

import { TranslateStubModule } from './../../__stubs__/translate-stub.module'
import { ConstantsTranslations } from './../../utils/constants'

import { NotFoundComponent } from './not-found.component'
import { NotFoundModule } from './not-found.module'

describe('NotFoundComponent', () => {
  let component: NotFoundComponent
  let fixture: ComponentFixture<NotFoundComponent>
  let de: DebugElement
  let el: HTMLElement

  function beforeEachAll(): void {
    fixture = TestBed.createComponent(NotFoundComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }

  function textElementByCss(ByCss: Predicate<DebugElement>): HTMLElement {
    de = fixture.debugElement.query(ByCss)
    el = de.nativeElement

    return el
  }

  describe('Testing page not-found', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [NotFoundComponent],
        imports: [NotFoundModule, RouterTestingModule, TranslateStubModule],
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
        declarations: [NotFoundComponent],
        imports: [
          NotFoundModule,
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

    it('should show text "ERROR 404!! - Content not found." ', () => {
      // Arrange
      const textEn = `ERROR 404!! - Content not found.`
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
        declarations: [NotFoundComponent],
        imports: [
          NotFoundModule,
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

    it('should show text "ERRO 404!! - Conteúdo não encontrado." ', () => {
      // Arrange
      const textPT = `ERRO 404!! - Conteúdo não encontrado.`
      const textElement = textElementByCss(By.css('p'))
        .textContent?.toString()
        .trim()

      // Assert
      expect(textElement).toEqual(textPT)
    })
  })
})
