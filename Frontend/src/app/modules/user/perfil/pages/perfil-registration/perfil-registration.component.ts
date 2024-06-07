
import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpsServiceService } from '../../../../../services/https-service.service';
import { PerfilFormComponent } from '../perfil-form/perfil-form.component';


@Component({
  selector: 'app-perfil-registration',
  templateUrl: './perfil-registration.component.html',
  styleUrls: ['./perfil-registration.component.css']
})
export class PerfilRegistrationComponent implements OnInit {
  perfilE: any[] = [];
  perfil: any[] = [];
  isListView: boolean = true;
  
  
  constructor(
    private _ac: ActivatedRoute,
    private _apiService: HttpsServiceService) { }

  ngOnInit(): void {
    this.loadPerfil();
    
  }

  
  loadPerfil() {
    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/Patient"))
    ).subscribe((response) => {
      this.perfil = response.data;
      console.log(this.perfil)
    });
  } 

  

  
}
