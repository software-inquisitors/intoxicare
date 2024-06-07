import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoxicacionsListaComponent } from './intoxicacions-lista.component';

describe('IntoxicacionsListaComponent', () => {
  let component: IntoxicacionsListaComponent;
  let fixture: ComponentFixture<IntoxicacionsListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntoxicacionsListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntoxicacionsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
