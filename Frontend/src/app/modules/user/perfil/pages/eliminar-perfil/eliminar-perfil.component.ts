import { Component, OnInit } from '@angular/core';
import { HttpsServiceService } from '../../../../../services/https-service.service';
import {ActivatedRoute, Router} from "@angular/router";
import { UserModule } from '../../../user.module';

@Component({
  selector: 'app-eliminar-perfil',
  templateUrl: './eliminar-perfil.component.html',
  styleUrls: ['./eliminar-perfil.component.css']
})
export class EliminarPerfilComponent implements OnInit {

  public itemId: string;
  public perfil : UserModule= new UserModule();

  constructor(
    public http: HttpsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
   }

  ngOnInit(): void {
    
  }

  getPerfilDetails(): void {
    this.http.requestGet(`api/User/${this.itemId}`).subscribe({
      next: (data) => {
        this.perfil = data.User;
        console.log('Perfil Encontrado:', this.perfil);
      }
    });
  }

  deletePerfil(): void {
    this.http.requestDelete(`api/User/${this.itemId}`).subscribe({
      next: (response) => {
        console.log('Perfil eliminado:', response);
        this.ToRead();
      }
    });
  }

  ToRead(): void {
    this.router.navigate(['user/perfil']);
  }
}
