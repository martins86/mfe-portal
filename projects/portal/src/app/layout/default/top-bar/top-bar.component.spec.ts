import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TopBarComponent } from './top-bar.component'

describe('TopBarComponent', () => {
  let component: TopBarComponent
  let fixture: ComponentFixture<TopBarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('Testing header', () => {
    it('should not set classList "active" before toggleBtnAnimate call', () => {
      // Arrange
      let btnElement =
        fixture.debugElement.nativeElement.querySelector('.toggle')

      // Assert
      expect(btnElement).toBeTruthy()
      expect(btnElement.classList).not.toContain('active')
    })

    it('should set classList "active" after toggleBtnAnimate call', () => {
      // Arrange
      let btnElement =
        fixture.debugElement.nativeElement.querySelector('.toggle')

      // Act
      btnElement.click()

      // Assert
      expect(btnElement).toBeTruthy()
      expect(btnElement.classList).toContain('active')
    })
  })
})
