import { TestBed } from '@angular/core/testing'

import { DefinitionsService } from './definitions.service'

describe('DefinitionsService', () => {
  let service: DefinitionsService
  let sessionStorage: Storage

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DefinitionsService)
  })

  beforeEach(() => {
    sessionStorage = window.sessionStorage
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('Testing setDefinitionDefault', () => {
    it('should set default values in sessionStorage', () => {
      // Arrange
      const definitionDefault = JSON.stringify({
        language: 'pt',
        theme: 'light-theme',
      })

      // Act
      service.setDefinitionDefault('pt', 'light-theme')

      // Assert
      expect(sessionStorage.getItem('user-definitions')).toBe(definitionDefault)
    })
  })

  describe('Testing updateDefinitionItem', () => {
    it('should update item in sessionStorage', () => {
      // Arrange
      const alternateDefinition = JSON.stringify({
        language: 'en',
        theme: 'dark-theme',
      })

      // Act
      service.updateDefinitionItem('language', 'en')
      service.updateDefinitionItem('theme', 'dark-theme')

      // Assert
      expect(sessionStorage.getItem('user-definitions')).toBe(
        alternateDefinition
      )
    })
  })

  describe('Testing getDefinitions', () => {
    it('should get item in sessionStorage', () => {
      // Arrange
      const definitionDefault = JSON.stringify({
        language: 'pt',
        theme: 'light-theme',
      })
      service.setDefinitionDefault('pt', 'light-theme')

      // Act
      service.getDefinitions()

      // Assert
      expect(sessionStorage.getItem('user-definitions')).toBe(definitionDefault)
    })
  })
})
