import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesTypeComponent } from './vacancies-type.component';

describe('VacanciesTypeComponent', () => {
  let component: VacanciesTypeComponent;
  let fixture: ComponentFixture<VacanciesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacanciesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
