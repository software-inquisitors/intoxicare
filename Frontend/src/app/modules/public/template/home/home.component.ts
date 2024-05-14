import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpsServiceService } from '../../../../services/https-service.service'
import * as moment from 'moment';

declare const M: any;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  constructor(
    private _ac: ActivatedRoute,
    private _apiService: HttpsServiceService) {


  }

  ngOnInit(): void {
    M.AutoInit();

    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/v1/HRSD/get/all")))
      .subscribe((response) => { });

  }



}
