import { TestBed } from '@angular/core/testing'
import { DefinitionsService } from '../service-definitions/definitions.service'

import { ThemeService } from './theme.service'

describe('ThemeService', () => {
  let service: ThemeService
  let definitionsService: DefinitionsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ThemeService)
    definitionsService = TestBed.inject(DefinitionsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('Testing getThemeSession', () => {
    it('should call definitionsService and getDefinitions', () => {
      // Arrange
      const spy = jest
        .spyOn(definitionsService, 'getDefinitions')
        .mockReturnValue('any-theme')
      // Act
      service.getThemeSession()

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveReturnedWith('any-theme')
      spy.mockRestore()
    })
  })
})
