import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpsServiceService } from "../../../services/https-service.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-intoxicacions-creation',
  templateUrl: './intoxicacions-creation.component.html',
  styleUrls: ['./intoxicacions-creation.component.css']
})
export class IntoxicacionsCreationComponent implements OnInit {

  intoxicacionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpsServiceService,
    private router: Router
  ) {
    this.intoxicacionForm = this.fb.group({
      id: ['', Validators.required],
      dateRegister: ['', Validators.required],
      symptoms: ['', Validators.required],
      severety: ['', Validators.required],
      treatment: ['', Validators.required],
      patient_id: ['', Validators.required],
      type_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const formValue = this.intoxicacionForm.value;
    let intoxicacion = {
      ...formValue
    };

    this.http.requestPost(`api/Intoxication`,intoxicacion).subscribe();
    console.log(intoxicacion);
    this.ToRead();
  }

  ToRead(): void {
    this.router.navigate(['/intoxicaciones/Read']);
  }
}

