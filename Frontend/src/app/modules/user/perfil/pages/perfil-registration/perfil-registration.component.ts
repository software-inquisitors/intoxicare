
import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpsServiceService } from '../../../../../services/https-service.service';

@Component({
  selector: 'app-perfil-registration',
  templateUrl: './perfil-registration.component.html',
  styleUrls: ['./perfil-registration.component.css']
})
export class PerfilRegistrationComponent implements OnInit {
  perfilE: any[] = [];
  perfil: any[] = [];
  isListView: boolean = true;
  perfilObject: any = {
    "name": "",
    "age": 0,
    "peso": 0,
    "altura": 0,
    "genero": "",
    "imc": "",
    "foto": ""
  };
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
