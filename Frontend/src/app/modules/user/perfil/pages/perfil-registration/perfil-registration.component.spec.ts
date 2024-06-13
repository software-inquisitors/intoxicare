import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { PerfilRegistrationComponent } from './perfil-registration.component';

describe('PerfilRegistrationComponent', () => {
  let component: PerfilRegistrationComponent;
  let fixture: ComponentFixture<PerfilRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilRegistrationComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
