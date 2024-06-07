import { Component, OnInit } from '@angular/core';
import {HttpsServiceService} from "../../../services/https-service.service";

@Component({
  selector: 'app-intoxicacions-delete',
  templateUrl: './intoxicacions-delete.component.html',
  styleUrls: ['./intoxicacions-delete.component.css']
})
export class IntoxicacionsDeleteComponent implements OnInit {

  constructor(
    public http: HttpsServiceService
  ) {
  }

  ngOnInit(): void {
  }

  DeleteInto(item: string): void{
    this.http.requestDelete('api/Intoxication/'+item);
  }
}
