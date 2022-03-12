import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { DefaultModule } from './default.module'
import { DefaultComponent } from './default.component'

describe('DefaultComponent', () => {
  let component: DefaultComponent
  let fixture: ComponentFixture<DefaultComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultComponent],
      imports: [DefaultModule, RouterTestingModule],
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
})
