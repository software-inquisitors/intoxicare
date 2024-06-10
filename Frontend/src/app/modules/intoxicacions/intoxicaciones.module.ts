import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IntoRoutingModule } from './intoxicaciones-routing.module';
import { IntoxicacionsListaComponent } from './intoxicacions-lista/intoxicacions-lista.component';
import {IntoxicacionsCreationComponent} from "./intoxicacions-creation/intoxicacions-creation.component";
import {IntoxicacionsDeleteComponent} from "./intoxicacions-delete/intoxicacions-delete.component";
import { IntoxicacionsUptadeComponent } from './intoxicacions-uptade/intoxicacions-uptade.component';
@NgModule({
  declarations:[
    IntoxicacionsListaComponent,
    IntoxicacionsCreationComponent,
    IntoxicacionsDeleteComponent,
    IntoxicacionsUptadeComponent
  ],
  imports:[
    CommonModule,
    IntoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IntoModule { }
