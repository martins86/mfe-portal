import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

import { ThemeService } from '../../../shared/services/service-theme/theme.service'
import { TranslateStubModule } from '../../../__stubs__/translate-stub.module'

import { DefaultModule } from '../default.module'

import { LeftBarComponent } from './left-bar.component'

describe('LeftBarComponent', () => {
  let component: LeftBarComponent
  let fixture: ComponentFixture<LeftBarComponent>
  let themeService: ThemeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftBarComponent],
      imports: [
        DefaultModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        TranslateStubModule,
      ],
      providers: [ThemeService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
    themeService = TestBed.inject(ThemeService)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('Testing ngOnInit', () => {
    it('should call toggleThemes', () => {
      // Arrange
      jest.spyOn(component, 'toggleThemes')
      // Act
      component.ngOnInit()
      // Assert
      expect(component.toggleThemes).toHaveBeenCalled()
    })
  })

  describe('Testing closeLeftBar', () => {
    it('should emit emitCloseLeftBar', () => {
      // Arrange
      jest.spyOn(component.emitCloseLeftBar, 'emit')
      // Act
      component.closeLeftBar()
      // Assert
      expect(component.emitCloseLeftBar.emit).toHaveBeenCalled()
      expect(component.emitCloseLeftBar.emit).toHaveBeenCalledWith(
        'closeLeftBar'
      )
    })
  })

  describe('Testing toggleThemes', () => {
    it('should call toggleThemes', () => {
      // Arrange
      const spy = jest.spyOn(themeService, 'toggleThemes')

      // Act
      component.toggleThemes()

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore()
    })

    it('should call getThemeSession and return the theme', () => {
      // Arrange
      const spy = jest.spyOn(themeService, 'getThemeSession')

      // Act
      component.toggleThemes()

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveReturnedWith('light-theme')
      spy.mockRestore()
    })

    it('should set className theme "light-theme"', () => {
      // Arrange
      const spy = jest
        .spyOn(themeService, 'getThemeSession')
        .mockReturnValue('light-theme')

      // Act
      component.toggleThemes()

      // Assert
      expect(component.className).toBe('light-theme')
    })

    it('should set className theme "dark-theme"', () => {
      // Arrange
      const spy = jest
        .spyOn(themeService, 'getThemeSession')
        .mockReturnValue('dark-theme')

      // Act
      component.toggleThemes()

      // Assert
      expect(component.className).toBe('dark-theme')
    })

    it('should set value toggleControl false for theme "light-theme"', () => {
      // Arrange
      const spy = jest
        .spyOn(themeService, 'getThemeSession')
        .mockReturnValue('light-theme')

      // Act
      component.toggleThemes()

      // Assert
      expect(component.toggleControl.value).toBe(false)
    })

    it('should set value toggleControl true for theme "dark-theme"', () => {
      // Arrange
      const spy = jest
        .spyOn(themeService, 'getThemeSession')
        .mockReturnValue('dark-theme')

      // Act
      component.toggleThemes()

      // Assert
      expect(component.toggleControl.value).toBe(true)
    })
  })
})
