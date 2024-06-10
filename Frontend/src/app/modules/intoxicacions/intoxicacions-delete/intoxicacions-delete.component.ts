import { Component, OnInit } from '@angular/core';
import {HttpsServiceService} from "../../../services/https-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Intoxicacion} from "../Intoxicacion.model"

@Component({
  selector: 'app-intoxicacions-delete',
  templateUrl: './intoxicacions-delete.component.html',
  styleUrls: ['./intoxicacions-delete.component.css']
})
export class IntoxicacionsDeleteComponent implements OnInit {

  public itemId: string;
  public into : Intoxicacion= new Intoxicacion();

  constructor(
    public http: HttpsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.getIntoxicacionDetails();
  }

  getIntoxicacionDetails(): void {
    this.http.requestGet(`api/Intoxication/${this.itemId}`).subscribe({
      next: (data) => {
        this.into = data.Intoxication;
        console.log('Intoxicación Encontrada:', this.into);
      }
    });
  }
  deleteInto(): void {
    this.http.requestDelete(`api/Intoxication/${this.itemId}`).subscribe({
      next: (response) => {
        console.log('Intoxicación eliminada:', response);
        this.ToRead();
      }
    });
  }

  ToRead():void{
    this.router.navigate(['/intoxicaciones/Read']);
  }

}
