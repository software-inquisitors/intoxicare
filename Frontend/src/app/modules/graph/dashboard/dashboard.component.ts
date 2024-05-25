import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StorageService } from '../../../helpers/storage.service';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { HttpsServiceService } from '../../../services/https-service.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

declare const M: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
    , private _ac: ActivatedRoute
    , private storageService: StorageService
    , private _apiService: HttpsServiceService
    , private fb: FormBuilder) {

  }

  ngOnInit(): void {

    M.AutoInit();

    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/v1/HRSD/get/all")))
      .subscribe((response) => {
      });

  }
}