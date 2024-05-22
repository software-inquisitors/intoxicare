import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-registration',
  templateUrl: './perfil-registration.component.html',
  styleUrls: ['./perfil-registration.component.css']
})
export class PerfilRegistrationComponent implements OnInit {
  perfilE: any[] = [];
  perfil: any[] = [];
  isListView: boolean = true;
  perfilObject: any = {
    "name":"",
    "age":0,
    "peso": 0,
    "altura": 0,
    "genero": "",
    "imc": "",
    "foto": ""           
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPerfilEstado();
    this.loadPerfil();
  }

  loadPerfilEstado() {
    this.http.get('assets/perfilEstado.json').subscribe((res: any) => {
      
      this.perfilE = res.data;
    })
  }

  loadPerfil(){
    this.http.get('assets/perfil.json').subscribe((res: any) => {
      debugger;
      this.perfil = res.data;
    })
  }
}
