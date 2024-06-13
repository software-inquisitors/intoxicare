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
    private _apiService: HttpsServiceService
  ) {
    this.perfilForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    const formValue = this.perfilForm.value;
    let perfil = {
      ...formValue
    };

    this._apiService.requestPost(`api/User`, perfil).subscribe({
      next: (response) => {
        console.log('Perfil registrado exitosamente', response);
        this._router.navigate(['/user/perfil']);
      },
      error: (error) => {
        console.error('Error al registrar el perfil', error);
        // Aquí podrías manejar el error de manera adecuada, mostrar un mensaje al usuario, etc.
      }
    });
  }
}
