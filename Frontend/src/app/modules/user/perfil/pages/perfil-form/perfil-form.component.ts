import { Component, OnInit } from '@angular/core';
import { HttpsServiceService } from '../../../../../services/https-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit {

  perfilForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _apiService: HttpsServiceService) { 
    this.perfilForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    }

  ngOnInit(): void {
    
  }

  irAlaListaPerfil() {
    this._router.navigate(['/User/perfil']);
  }

  onSubmit() {
    const formValue = this.perfilForm.value;
    let perfil = {
      ...formValue
    };

    this._apiService.requestPost(`api/User`,perfil).subscribe();
    console.log(perfil);
    this.irAlaListaPerfil();
  }
}
