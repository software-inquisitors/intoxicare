
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(
    private _router: Router,
    private _ac: ActivatedRoute,
    private _apiService: HttpsServiceService) { }

  ngOnInit(): void {
    this.loadPerfil();

  }


  actualizarPerfil(perfilId: number) {
    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestPut("api/User/" + perfilId, this.perfil))
    ).subscribe((response) => {
      this.perfil = response.data;
      console.log(this.perfil)
    });
  }

  eliminarPerfil(perfilId: number) {
    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestDelete("api/User/" + perfilId))
    ).subscribe((response) => {
      this.perfil = response.data;
      console.log(this.perfil)
    });
  }

  loadPerfil() {
    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/User"))
    ).subscribe((response) => {
      this.perfil = response.data;
      console.log(this.perfil)
    });
  }

}
