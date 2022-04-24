import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DefinitionsService } from '../../services/service-definitions/definitions.service'

import { SelectLanguageComponent } from './select-language.component'
import { SelectLanguageModule } from './select-language.module'

describe('SelectLanguageComponent', () => {
  let component: SelectLanguageComponent
  let fixture: ComponentFixture<SelectLanguageComponent>
  let definitionsService: DefinitionsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectLanguageComponent],
      imports: [SelectLanguageModule],
      providers: [DefinitionsService],
    }).compileComponents()
    definitionsService = TestBed.inject(DefinitionsService)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLanguageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('Testing changeLanguage', () => {
    const reload = window.location.reload

    beforeAll(() => {
      Object.defineProperty(window, 'location', {
        value: { reload: jest.fn() },
      })
    })

    afterAll(() => {
      window.location.reload = reload
    })

    it('should call updateDefinitionItem with "language" "en"', () => {
      // Arrange
      const spy = jest.spyOn(definitionsService, 'updateDefinitionItem')

      // Act
      component.changeLanguage('en')

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('language', 'en')
      spy.mockRestore()
    })

    it('should call changeTextLanguage with "pt"', () => {
      // Arrange
      const spy = jest.spyOn(component, 'changeTextLanguage')

      // Act
      component.changeLanguage('pt')

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('pt')
      spy.mockRestore()
    })

    it('should call fixRemoveClass"', () => {
      // Arrange
      const spy = jest.spyOn(component, 'fixRemoveClass')

      // Act
      component.changeLanguage('pt')

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })

    it('should call reloadPage"', () => {
      // Arrange
      const spy = jest.spyOn(component, 'reloadPage')

      // Act
      component.changeLanguage('pt')

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })
  })

  describe('Testing changeTextLanguage', () => {
    it('should return "Português" when "pt"', () => {
      // Arrange

      // Act
      const response = component.changeTextLanguage('pt')

      // Assert
      expect(response).toContain('Português')
    })

    it('should return "English" when "en"', () => {
      // Arrange

      // Act
      const response = component.changeTextLanguage('en')

      // Assert
      expect(response).toContain('English')
    })
  })
})
