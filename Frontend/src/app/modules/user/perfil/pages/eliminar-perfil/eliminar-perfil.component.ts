import { Component, OnInit } from '@angular/core';
import { HttpsServiceService } from '../../../../../services/https-service.service';
import { ActivatedRoute, Router } from "@angular/router";

export interface UserObject {
  id: number,
  name: string,
  email: string,
  dateRegister: string
}

@Component({
  selector: 'app-eliminar-perfil',
  templateUrl: './eliminar-perfil.component.html',
  styleUrls: ['./eliminar-perfil.component.css']
})

export class EliminarPerfilComponent implements OnInit {

  public itemId: string;
  public perfil: UserObject;

  constructor(
    public http: HttpsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.perfil = {
      id: 0,
      name: "",
      email: "",
      dateRegister: ""
    }
  }

  ngOnInit(): void {

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
