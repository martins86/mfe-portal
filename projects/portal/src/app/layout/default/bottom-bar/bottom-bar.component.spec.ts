import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BottomBarComponent } from './bottom-bar.component'

describe('BottomBarComponent', () => {
  let component: BottomBarComponent
  let fixture: ComponentFixture<BottomBarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomBarComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('Testing footer', () => {
    it('should show text en "TMF © All rights reserved 2022- current year" ', () => {
      // Arrange
      const textEn = `TMF © All rights reserved 2022-${component.currentYear}`

      // Act
      const textElement = document.querySelector('footer')?.innerText

      // Assert
      expect(textElement).toBeTruthy()
      expect(textElement).toBe(textEn)
    })
  })
})
