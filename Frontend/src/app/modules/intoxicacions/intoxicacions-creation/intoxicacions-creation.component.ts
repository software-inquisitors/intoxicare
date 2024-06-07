import { Component, OnInit } from '@angular/core';
import {HttpsServiceService} from "../../../services/https-service.service";
import {Intoxicacion} from "../Intoxicacion.model"

@Component({
  selector: 'app-intoxicacions-creation',
  templateUrl: './intoxicacions-creation.component.html',
  styleUrls: ['./intoxicacions-creation.component.css']
})
export class IntoxicacionsCreationComponent implements OnInit {

  public Item:Intoxicacion = new Intoxicacion();
  constructor(
    public http: HttpsServiceService
  ) { }

  ngOnInit(): void {
  }

  CreateItem(): void {
    this.http.requestPost('api/Intoxication',this.Item);
  }

}
