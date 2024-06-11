import { Component, OnInit } from '@angular/core';
import { HttpsServiceService } from '../../../../../services/https-service.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Perfil } from '../perfil.model';


@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.component.html',
  styleUrls: ['./actualizar-perfil.component.css']
})
export class ActualizarPerfilComponent implements OnInit {
  perfilForm: FormGroup;
  public itemId: string = "";
  public per: Perfil = new Perfil();

  constructor(
    private fb: FormBuilder,
    private http: HttpsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.perfilForm = this.fb.group({
      id: [{ value: '', disabled: true }, Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.getPerfilDetails();
  }

  getPerfilDetails(): void {
    this.http.requestGet(`api/User/${this.itemId}`).subscribe({
      next: (data) => {
        this.per = data.User;
        this.perfilForm.controls["id"].setValue(this.per.id);
        this.perfilForm.controls["name"].setValue(this.per.name);
        this.perfilForm.controls["email"].setValue(this.per.email);
      }, error: (err) => {
        console.error('Error al obtener detalles del perfil:', err);
      }
    });
  }

  onSubmit(): void {
    if (this.perfilForm.valid) {
      const formValue = this.perfilForm.getRawValue();
      let perfil = {
        ...formValue,
        id: this.itemId
      };
      this.http.requestPut(`api/User/${this.itemId}`, perfil).subscribe({
        next: (response) => {
          console.log('Perfil actualizado:', response);
          this.ToRead();
        }, error: (err) => {
          console.error('Error al actualizar el perfil:', err);
        }
      });
    }
  }

  ToRead(): void {
    this.router.navigate(['/user/perfil']);
  }
}
