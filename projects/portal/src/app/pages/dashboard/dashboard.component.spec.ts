import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TranslateStubModule } from '../../__stubs__/translate-stub.module'

import { DashboardComponent } from './dashboard.component'
import { DashboardModule } from './dashboard.module'

describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [DashboardModule, TranslateStubModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
