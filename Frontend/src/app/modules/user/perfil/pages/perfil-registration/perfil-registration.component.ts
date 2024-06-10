
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

  
  actualizarPerfil() {
    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestPut("api/Patient", this.perfil))
    ).subscribe((response) => {
      this.perfil = response.data;
      console.log(this.perfil)
    });
  } 
  
  eliminarPerfil(perfilId: number) {
    this._apiService.requestDelete("api/Patient/" + perfilId).subscribe(
      (response) => {
        this.perfil = response.data;
        console.log(this.perfil);
      },
      (error) => {
        console.error('Error deleting profile:', error);
      }
    );
  }


  //EliminarPerfilComponent(perfilId: number) {
    //this._ac.paramMap.pipe(
      //switchMap((params: ParamMap) => this._apiService.requestDelete("api/Patient/" + perfilId)
    //).subscribe((response) => {
      //this.perfil = response.data;
      //console.log(this.perfil)
    //});
  //}
  
  loadPerfil() {
    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/Patient"))
    ).subscribe((response) => {
      this.perfil = response.data;
      console.log(this.perfil)
    });
  } 
  
}
