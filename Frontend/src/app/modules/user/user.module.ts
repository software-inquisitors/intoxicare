import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilRegistrationComponent } from './perfil/pages/perfil-registration/perfil-registration.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PerfilComponent,
    PerfilRegistrationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
