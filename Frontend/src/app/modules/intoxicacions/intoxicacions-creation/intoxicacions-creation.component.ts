import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpsServiceService } from "../../../services/https-service.service";
import { Intoxicacion } from "../Intoxicacion.model"

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-intoxicacions-creation',
  templateUrl: './intoxicacions-creation.component.html',
  styleUrls: ['./intoxicacions-creation.component.css']
})
export class IntoxicacionsCreationComponent implements OnInit {

  public Item: Intoxicacion = new Intoxicacion();
  constructor(
    private router: Router
    , private _ac: ActivatedRoute
    , public _apiService: HttpsServiceService
  ) { }

  ngOnInit(): void {
  }

  CreateItem(): void {

    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestPost('api/Intoxication', {
        "Alejo": "Jose"
      }))
    ).subscribe((response) => {
    });

  }

}
