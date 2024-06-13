import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { IntoxicacionsDeleteComponent } from './intoxicacions-delete.component';

describe('IntoxicacionsDeleteComponent', () => {
  let component: IntoxicacionsDeleteComponent;
  let fixture: ComponentFixture<IntoxicacionsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntoxicacionsDeleteComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IntoxicacionsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
