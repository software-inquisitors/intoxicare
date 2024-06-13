import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IntoxicacionsCreationComponent } from './intoxicacions-creation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('IntoxicacionsCreationComponent', () => {
  let component: IntoxicacionsCreationComponent;
  let fixture: ComponentFixture<IntoxicacionsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntoxicacionsCreationComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
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
