import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpsServiceService } from '../../../../services/https-service.service';

@Component({
  selector: 'app-graph-chart',
  templateUrl: './graph-chart.component.html',
  styleUrls: ['./graph-chart.component.css']
})
export class GraphChartComponent implements OnInit {
  // Atributos que almacenan los datos de los charts
  public lineChart: Chart | undefined;
  public pieChart: Chart | undefined;
  public barChart: Chart | undefined;

  constructor(
    private _ac: ActivatedRoute,
    private _apiService: HttpsServiceService
  ) { }

  ngOnInit(): void {
    this.createCasesPoisoning();
    this.createReportDate();

    //this.createLine();
    //this.createPie();
    //this.createBar();
  }

  createCasesPoisoning() {

    let _labels: any[] = [];
    let _data: any[] = [];


    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/Graph/index"))
    ).subscribe((response) => {

      response.forEach((element: any) => {
        _labels.push(element.tipo_intoxicacion)
        _data.push(element.cantidad)
      });

      const data = {
        labels: _labels,
        datasets: [{
          label: 'Tipos de Intoxicación',
          data: _data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 2
        }]
      };


      // Creamos la gráfica
      this.barChart = new Chart("casesPoisoning", {
        type: 'bar' as ChartType, // tipo de la gráfica 
        data // datos 
      })

      // Creamos la gráfica
      this.pieChart = new Chart("casesPoisoning_distribution", {
        type: 'pie' as ChartType, // tipo de la gráfica 
        data // datos 
      })

    });

  }

  createReportDate() {

    let _labels: any[] = [];
    let _data: any[] = [];


    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/Graph/reportDate"))
    ).subscribe((response) => {

      response.forEach((element: any) => {
        _labels.push(element.mes)
        _data.push(element.cantidad)
      });

      const data = {
        labels: _labels,
        datasets: [{
          label: 'Cantidad de Intoxicación',
          data: _data
        }]
      };

      // Creamos la gráfica
      this.barChart = new Chart("reportDate", {
        type: 'bar' as ChartType, // tipo de la gráfica 
        data // datos 
      })

    });

  }

  createLine() {
    // Datos
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // Creamos la gráfica
    this.lineChart = new Chart("lineChart", {
      type: 'line' as ChartType, // tipo de la gráfica 
      data // datos 
    })
  }

  createPie() {
    // Datos
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    // Creamos la gráfica
    this.pieChart = new Chart("pieChart", {
      type: 'pie' as ChartType, // tipo de la gráfica 
      data // datos 
    })
  }

  createBar() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'J uly'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    // Creamos la gráfica
    this.barChart = new Chart("barChart", {
      type: 'bar' as ChartType, // tipo de la gráfica 
      data // datos 
    })
  }
}
