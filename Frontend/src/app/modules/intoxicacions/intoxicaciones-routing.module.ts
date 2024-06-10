import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntoxicacionsListaComponent } from './intoxicacions-lista/intoxicacions-lista.component';
import { NotFoundComponent } from '../public/errors/not-found/not-found.component';
import {IntoxicacionsDeleteComponent} from "./intoxicacions-delete/intoxicacions-delete.component";
import {IntoxicacionsCreationComponent} from "./intoxicacions-creation/intoxicacions-creation.component";
import {IntoxicacionsUptadeComponent} from "./intoxicacions-uptade/intoxicacions-uptade.component";

const routes: Routes = [
  {
    path: "Read",
    component: IntoxicacionsListaComponent
  },
  {
    path: "Delete/:id",
    component: IntoxicacionsDeleteComponent
  },
  {
    path: "Create",
    component: IntoxicacionsCreationComponent
  },
  {
    path: "Uptade/:id",
    component: IntoxicacionsUptadeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntoRoutingModule { }
