import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DefaultModule } from './default.module'
import { DefaultComponent } from './default.component'
import { TranslateStubModule } from './../../__stubs__/translate-stub.module'

describe('DefaultComponent', () => {
  let component: DefaultComponent
  let fixture: ComponentFixture<DefaultComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultComponent],
      imports: [
        DefaultModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateStubModule,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('Testing toggleLeftBar', () => {
    it('should the leftBarOpen value starts with false', () => {
      // Assert
      expect(component.leftBarOpen).toBe(false)
    })

    it('should the leftBarOpen value be equal to false', () => {
      // Arrange
      component.leftBarOpen = true

      // Act
      component.toggleLeftBar()

      // Assert
      expect(component.leftBarOpen).toBe(false)
    })

    it('should the leftBarOpen value be equal to true', () => {
      // Arrange
      component.leftBarOpen = false

      // Act
      component.toggleLeftBar()

      // Assert
      expect(component.leftBarOpen).toBe(true)
    })
  })

  describe('Testing closeLeftBar', () => {
    it('should the leftBarOpen value be equal to false', () => {
      // Arrange
      component.leftBarOpen = true

      // Act
      component.closeLeftBar()

      // Assert
      expect(component.leftBarOpen).toBe(false)
    })

    it('should the value of leftBarOpen remain equal to false', () => {
      // Arrange
      component.leftBarOpen = false

      // Act
      component.closeLeftBar()

      // Assert
      expect(component.leftBarOpen).toBe(false)
    })
  })
})
