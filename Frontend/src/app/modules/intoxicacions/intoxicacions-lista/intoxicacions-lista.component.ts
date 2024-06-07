import { Component, OnInit } from '@angular/core';
import {HttpsServiceService} from "../../../services/https-service.service";
import {Intoxicacion} from "../Intoxicacion.model"

@Component({
  selector: 'app-intoxicacions-lista',
  templateUrl: './intoxicacions-lista.component.html',
  styleUrls: ['./intoxicacions-lista.component.css']
})
export class IntoxicacionsListaComponent implements OnInit {

  public  ListInto: Intoxicacion[]=[];
  constructor(
    public http: HttpsServiceService
  ) { }

  ngOnInit(): void {
    this.showList();
  }

  showList(): void {
    this.http.requestGet('api/Intoxication').subscribe(
      {
        next: (data: any)=>{
          this.ListInto =data.data;
        }
      }
    );
  }

}
