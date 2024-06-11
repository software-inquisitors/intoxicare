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
  }

  getIntoxicacionDetails(): void {
    this.http.requestGet(`api/Intoxication/${this.itemId}`).subscribe({
      next: (data) => {
        this.into = data.Intoxication;
        this.intoxicacionForm.controls["id"].setValue(this.into.id);
        this.intoxicacionForm.controls["symptoms"].setValue(this.into.symptoms);
        this.intoxicacionForm.controls["severety"].setValue(this.into.severety);
        this.intoxicacionForm.controls["treatment"].setValue(this.into.treatment);
        this.intoxicacionForm.controls["patient_id"].setValue(this.into.patient_id);
        this.intoxicacionForm.controls["type_id"].setValue(this.into.type_id);
        const dateString: any = this.into.dateRegister;
        const dateObject: Date = new Date(dateString);
        const formattedDate = this.formatDate(dateObject);
        this.intoxicacionForm.controls["dateRegister"].setValue(formattedDate);
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

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  ToRead(): void {
    this.router.navigate(['/intoxicaciones/Read']);
  }
}

