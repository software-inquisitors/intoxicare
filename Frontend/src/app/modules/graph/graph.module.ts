import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { GraphRoutingModule } from './graph-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    GraphRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
