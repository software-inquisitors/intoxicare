import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpsServiceService } from '../../../services/https-service.service'

/**
 * 
 */
declare const M: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private router: Router
    , private _ac: ActivatedRoute
    , private _apiService: HttpsServiceService
    , private fb: FormBuilder) { }

  ngOnInit(): void {

    M.AutoInit();

  }

}
