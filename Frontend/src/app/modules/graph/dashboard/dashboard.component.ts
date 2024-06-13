import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { HttpsServiceService } from '../../../services/https-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(
    private _ac: ActivatedRoute
    , private _apiService: HttpsServiceService) {

  }

  ngOnInit(): void {

    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/v1/HRSD/get/all")))
      .subscribe((response) => {
      });

  }
}