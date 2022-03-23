import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

import { DefaultModule } from '../default.module'

import { LeftBarComponent } from './left-bar.component'

describe('LeftBarComponent', () => {
  let component: LeftBarComponent
  let fixture: ComponentFixture<LeftBarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftBarComponent],
      imports: [DefaultModule, BrowserAnimationsModule, RouterTestingModule],
    }).compileComponents()
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
      spyOn(component, 'toggleThemes').and.callThrough()

      // Act
      component.ngOnInit()

      // Assert
      expect(component.toggleThemes).toHaveBeenCalled()
    })
  })

  describe('Testing closeLeftBar', () => {
    it('should emit emitCloseLeftBar', () => {
      // Arrange
      spyOn(component.emitCloseLeftBar, 'emit')

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
    it('should receive toggleControl true and set darkClassName', () => {
      // Arrange
      const darkClassName = 'dark-theme'
      component.toggleControl.setValue(true)

      // Act
      component.toggleThemes()

      // Assert
      expect(document.body.classList.toString()).toEqual(darkClassName)
    })

    it('should receive toggleControl false and set lightClassName', () => {
      // Arrange
      const lightClassName = 'light-theme'
      component.toggleControl.setValue(false)

      // Act
      component.toggleThemes()

      // Assert
      expect(document.body.classList.toString()).toEqual(lightClassName)
    })
  })

  describe('Testing switchClass', () => {
    it('should remove "light-theme" and add "dark-theme"', () => {
      // Arrange
      const darkClassName = 'dark-theme'
      const lightClassName = 'light-theme'

      // Act
      component.switchClass(darkClassName, lightClassName)

      // Assert
      expect(document.body.classList.toString()).toEqual(darkClassName)
      expect(document.body.classList.toString()).not.toEqual(lightClassName)
    })

    it('should remove "dark-theme" and add "light-theme"', () => {
      // Arrange
      const darkClassName = 'dark-theme'
      const lightClassName = 'light-theme'

      // Act
      component.switchClass(lightClassName, darkClassName)

      // Assert
      expect(document.body.classList.toString()).toEqual(lightClassName)
      expect(document.body.classList.toString()).not.toEqual(darkClassName)
    })
  })
})
