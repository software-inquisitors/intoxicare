import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpsServiceService } from '../../../services/https-service.service'
import { switchMap } from 'rxjs/operators';

/**
 * 
 */
declare const M: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  isListView: boolean = true;
  perfilObject: any = {
    "name": "",
    "Email": 0,
    "Password": 0
  };
  perfilE: any[] = [];
  perfil: any[] = [];

  constructor(
    private router: Router
    , private _ac: ActivatedRoute
    , private _apiService: HttpsServiceService
    , private fb: FormBuilder) { }

  ngOnInit(): void {

    M.AutoInit();

  }

  savePerfil(perfilObject: PerfilComponent) {
    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestPost("api/User", this.perfilObject))
    ).subscribe((response) => {
      this.perfil = response.data;
      console.log(this.perfil)
    });
  } 

}
