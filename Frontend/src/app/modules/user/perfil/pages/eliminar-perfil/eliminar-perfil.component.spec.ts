import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { EliminarPerfilComponent } from './eliminar-perfil.component';

describe('EliminarPerfilComponent', () => {
  let component: EliminarPerfilComponent;
  let fixture: ComponentFixture<EliminarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarPerfilComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
