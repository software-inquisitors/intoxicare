import { Component, OnInit } from '@angular/core';
import { HttpsServiceService } from '../../../../../services/https-service.service';
import { Router } from '@angular/router';

interface Perfil {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit {

  perfil: Perfil = { name: '', email: '', password: '' }; // Inicializa el perfil con valores vacíos
  isListView: boolean = true;
  errorMessage: string | null = null; // Mensaje de error para mostrar al usuario

  constructor(
    private _router: Router,
    private _apiService: HttpsServiceService) { }

  ngOnInit(): void {
    console.log(this.perfil);
  }

  savePerfil(perfilObject: Perfil) {
    // Verifica que el objeto perfilObject tenga todos los campos necesarios
    if (!perfilObject.name || !perfilObject.email || !perfilObject.password) {
      console.error('El objeto perfil no tiene todos los campos necesarios:', perfilObject);
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }
  
    console.log('Guardando perfil:', perfilObject);
  
    // Verificar si el correo electrónico ya existe
    this._apiService.requestGet("api/User/checkEmail/" + perfilObject.email).subscribe(
      (response) => {
        if (response.exists) {
          console.error('Error: El correo electrónico ya existe.');
          this.errorMessage = 'El correo electrónico ya está en uso. Por favor, usa otro.';
        } else {
          // Si el correo electrónico no existe, intenta guardar el perfil
          this._apiService.requestPost("api/user", perfilObject).subscribe(
            (response) => {
              this.perfil = response.data;
              this.irAlaListaPerfil();
              console.log(this.perfil);
            },
            (error) => {
              console.error('Error al guardar el perfil:', error);
              this.errorMessage = 'Hubo un error al guardar el perfil. Inténtalo de nuevo.';
            }
          );
        }
      },
      (error) => {
        console.error('Error al verificar el correo electrónico:', error);
        this.errorMessage = 'Hubo un error al verificar el correo electrónico. Inténtalo de nuevo.';
      }
    );
  }

  irAlaListaPerfil() {
    this._router.navigate(['/User/perfil']);
  }

  onSubmit() {
    this.savePerfil(this.perfil);
  }
}
