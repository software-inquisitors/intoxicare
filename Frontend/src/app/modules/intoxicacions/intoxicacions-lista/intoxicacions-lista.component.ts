import { Component, OnInit } from '@angular/core';
import {HttpsServiceService} from "../../../services/https-service.service";
import {Intoxicacion} from "../Intoxicacion.model"
import {Router} from "@angular/router";
import {Tipo} from "../Type.model";

@Component({
  selector: 'app-intoxicacions-lista',
  templateUrl: './intoxicacions-lista.component.html',
  styleUrls: ['./intoxicacions-lista.component.css']
})
export class IntoxicacionsListaComponent implements OnInit {

  public  ListInto: Intoxicacion[]=[];
  public  ListType: Tipo[] = [];
  public  lista:number = 34;
  constructor(
    public http: HttpsServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadTypes();
    this.showList(this.lista);
  }

  showList(pag:number): void {
    this.http.requestGet(`api/Intoxication?page=${pag}`).subscribe(
      {
        next: (data: any)=>{
          this.ListInto =data.data;
        }
      }
    );

    this.lista = pag;
  }

  loadTypes(): void{
    this.http.requestGet(`api/TypeIntoxication`).subscribe(
      {
        next: (data: any)=>{
          this.ListType =data.data;
        }
      }
    );
  }
  warning(lista:any) : void{
    this.router.navigate(['/intoxicaciones/Delete', lista.id]);
  }
  GoUptade(lista:any) : void{
    this.router.navigate(['/intoxicaciones/Uptade', lista.id]);
  }
}
