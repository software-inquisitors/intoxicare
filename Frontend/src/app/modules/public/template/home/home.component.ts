import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpsServiceService } from '../../../../services/https-service.service';

declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('pieChart', { static: false }) pieChart!: ElementRef;
  @ViewChild('dataContainer', { static: false }) dataContainer!: ElementRef;

  percentageArray: number[] = [30.63, 26.25, 14.38, 28.75];
  answerArray: string[] = ['Alimentarias', 'Quimica', 'Biologica', 'Envenenamientos'];
  colors: string[] = ['#ce0f42', '#72be44', '#f15637', '#8b1851'];

  constructor(
    private _ac: ActivatedRoute,
    private _apiService: HttpsServiceService
  ) { }

  ngOnInit(): void {
    M.AutoInit();

    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/v1/HRSD/get/all"))
    ).subscribe((response) => {
     
    });
  }

  ngAfterViewInit(): void {
    this.createPieChart();
    this.displayData();
  }

  createPieChart(): void {
    const canvas = this.pieChart.nativeElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY);
      let startAngle = 0;

      this.percentageArray.forEach((percentage, index) => {
        const sliceAngle = (percentage / 100) * 2 * Math.PI;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();

        ctx.fillStyle = this.colors[index];
        ctx.fill();

        startAngle += sliceAngle;
      });
    }
  }

  displayData(): void {
    const dataContainer = this.dataContainer.nativeElement;
    dataContainer.innerHTML = ''; 

    this.percentageArray.forEach((percentage, index) => {
      const dataItem = document.createElement('div');
      dataItem.classList.add('data-item');

      const colorBox = document.createElement('span');
      colorBox.classList.add('color-box');
      colorBox.style.backgroundColor = this.colors[index];

      const label = document.createElement('span');
      label.classList.add('label');
      label.textContent = `${this.answerArray[index]}: ${percentage}%`;
      label.style.color = this.colors[index]

      dataItem.appendChild(colorBox);
      dataItem.appendChild(label);
      dataContainer.appendChild(dataItem);
    });
  }
}
