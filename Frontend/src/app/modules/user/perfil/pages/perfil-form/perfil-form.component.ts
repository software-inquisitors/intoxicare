import { Component, OnInit } from '@angular/core';

interface perfil {
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

  perfil: perfil = {
    name: '',
    email: '',
    password: ''
  };
 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.perfil);
  }

}