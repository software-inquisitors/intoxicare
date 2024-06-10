import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilRegistrationComponent } from './perfil/pages/perfil-registration/perfil-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilFormComponent } from './perfil/pages/perfil-form/perfil-form.component';
import { ActualizarPerfilComponent } from './perfil/pages/actualizar-perfil/actualizar-perfil.component';
import { PerfilDetallesComponent } from './perfil/pages/perfil-detalles/perfil-detalles.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    PerfilComponent,
    PerfilRegistrationComponent,
    PerfilFormComponent,
    ActualizarPerfilComponent,
    PerfilDetallesComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class UserModule { }
