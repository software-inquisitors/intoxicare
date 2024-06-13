import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ActualizarPerfilComponent } from './actualizar-perfil.component';

describe('ActualizarPerfilComponent', () => {
  let component: ActualizarPerfilComponent;
  let fixture: ComponentFixture<ActualizarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarPerfilComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
