import { TestBed } from '@angular/core/testing'

import { DefinitionsService } from './definitions.service'

describe('DefinitionsService', () => {
  let service: DefinitionsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DefinitionsService)
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
      const sessionStorage = window.sessionStorage.getItem('user-definitions')
      expect(sessionStorage).toBe(definitionDefault)
    })
  })

  describe('Testing updateDefinitionItem', () => {
    it('should update item in sessionStorage', () => {
      // Arrange
      const definitionDefault = JSON.stringify({
        teste: 'este é um teste UpdateItem',
      })
      service.userDefinitionSession = {}

      // Act
      service.updateDefinitionItem('teste', 'este é um teste UpdateItem')

      // Assert
      const sessionStorage = window.sessionStorage.getItem('user-definitions')
      expect(sessionStorage).toBe(definitionDefault)
    })
  })

  describe('Testing getDefinitions', () => {
    it('should get item in sessionStorage', () => {
      // Arrange
      const definitionDefault = JSON.stringify({
        teste: 'este é um teste getItem',
      })
      service.userDefinitionSession = {}
      service.updateDefinitionItem('teste', 'este é um teste getItem')

      // Act
      service.getDefinitions()

      // Assert
      const sessionStorage = window.sessionStorage.getItem('user-definitions')
      expect(sessionStorage).toBe(definitionDefault)
    })
  })
})
