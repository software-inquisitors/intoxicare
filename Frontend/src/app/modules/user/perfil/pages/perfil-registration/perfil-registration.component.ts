import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpsServiceService } from '../../../../../services/https-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

@Component({
  selector: 'app-perfil-registration',
  templateUrl: './perfil-registration.component.html',
  styleUrls: ['./perfil-registration.component.css'],
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
    console.log(perfilId);
    this._router.navigate(['/user/actualizar-perfil', perfilId])
  }

  eliminarPerfil(perfilId: number) {
    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestDelete("api/User/" + perfilId))
    ).subscribe((response) => {
      this.perfil = response.data;
      console.log(this.perfil)
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'created_at', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  loadPerfil() {
    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/User"))
    ).subscribe((response) => {
      this.perfil = response.data;
      console.log(this.perfil);
      this.dataSource.data = this.perfil;
    });
  }

}
