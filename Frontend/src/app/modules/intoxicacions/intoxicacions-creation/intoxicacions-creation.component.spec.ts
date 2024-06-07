import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoxicacionsCreationComponent } from './intoxicacions-creation.component';

describe('IntoxicacionsCreationComponent', () => {
  let component: IntoxicacionsCreationComponent;
  let fixture: ComponentFixture<IntoxicacionsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntoxicacionsCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntoxicacionsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
