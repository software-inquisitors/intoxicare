import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoxicacionsUptadeComponent } from './intoxicacions-uptade.component';

describe('IntoxicacionsUptadeComponent', () => {
  let component: IntoxicacionsUptadeComponent;
  let fixture: ComponentFixture<IntoxicacionsUptadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntoxicacionsUptadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntoxicacionsUptadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
