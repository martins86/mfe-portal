import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LeftBarComponent } from './left-bar.component'

describe('LeftBarComponent', () => {
  let component: LeftBarComponent
  let fixture: ComponentFixture<LeftBarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftBarComponent],
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
})
