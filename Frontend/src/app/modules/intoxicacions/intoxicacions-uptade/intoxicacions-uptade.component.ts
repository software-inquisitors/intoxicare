import { Component, OnInit } from '@angular/core';
import { HttpsServiceService } from "../../../services/https-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Intoxicacion } from "../Intoxicacion.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-intoxicacions-uptade',
  templateUrl: './intoxicacions-uptade.component.html',
  styleUrls: ['./intoxicacions-uptade.component.css']
})
export class IntoxicacionsUptadeComponent implements OnInit {
  intoxicacionForm: FormGroup;
  public itemId: string = "";
  public into: Intoxicacion = new Intoxicacion();

  constructor(
    private fb: FormBuilder,
    private http: HttpsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.intoxicacionForm = this.fb.group({
      id: [{ value: '', disabled: true }, Validators.required], // Disabled ID field
      dateRegister: ['', Validators.required],
      symptoms: ['', Validators.required],
      severety: ['', Validators.required],
      treatment: ['', Validators.required],
      patient_id: ['', Validators.required],
      type_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.getIntoxicacionDetails();
    this.intoxicacionForm.controls["id"].setValue(this.into.id);
    this.intoxicacionForm.controls["symptoms"].setValue(this.into.symptoms);
    this.intoxicacionForm.patchValue(this.into);
  }

  getIntoxicacionDetails(): void {
    this.http.requestGet(`api/Intoxication/${this.itemId}`).subscribe({
      next: (data) => {
        this.into = data;
        console.log('Intoxicación Encontrada:', this.into);
      },
      error: (err) => {
        console.error('Error al obtener detalles de la intoxicación:', err);
      }
    });
  }

  onSubmit(): void {
    if (this.intoxicacionForm.valid) {
      const formValue = this.intoxicacionForm.getRawValue();
      let intoxicacion = {
        ...formValue,
        id: this.itemId
      };

      this.http.requestPut(`api/Intoxication/${this.itemId}`, intoxicacion).subscribe({
        next: (response) => {
          console.log('Intoxicación actualizada:', response);
          this.ToRead();
        }
      });
    }
  }

  ToRead(): void {
    this.router.navigate(['/intoxicaciones/Read']);
  }
}

