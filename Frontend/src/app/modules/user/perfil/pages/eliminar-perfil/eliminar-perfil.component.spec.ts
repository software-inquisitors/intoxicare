import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPerfilComponent } from './eliminar-perfil.component';

describe('EliminarPerfilComponent', () => {
  let component: EliminarPerfilComponent;
  let fixture: ComponentFixture<EliminarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
