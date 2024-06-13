import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { IntoxicacionsUptadeComponent } from './intoxicacions-uptade.component';

describe('IntoxicacionsUptadeComponent', () => {
  let component: IntoxicacionsUptadeComponent;
  let fixture: ComponentFixture<IntoxicacionsUptadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntoxicacionsUptadeComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IntoxicacionsUptadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
