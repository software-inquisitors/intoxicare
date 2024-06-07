import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoxicacionsDeleteComponent } from './intoxicacions-delete.component';

describe('IntoxicacionsDeleteComponent', () => {
  let component: IntoxicacionsDeleteComponent;
  let fixture: ComponentFixture<IntoxicacionsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntoxicacionsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntoxicacionsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
