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
    this.createReportLastYear();

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
          label: 'Cantidad de Intoxicación por mes',
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

  createReportLastYear() {

    let _labels: any[] = [];

    let _dataRaw: {
      Indeterminada: { label: string, data: number[] },
      Animales: { label: string, data: number[] },
      Alcohol: { label: string, data: number[] },
      Medicamentos: { label: string, data: number[] },
      Alimentaria: { label: string, data: number[] },
      Sustancias: { label: string, data: number[] },
      Plantas: { label: string, data: number[] },
      Metales: { label: string, data: number[] },
      Gases: { label: string, data: number[] },
      Drogas: { label: string, data: number[] }
    } = {
      Indeterminada: { label: "", data: [] },
      Animales: { label: "", data: [] },
      Alcohol: { label: "", data: [] },
      Medicamentos: { label: "", data: [] },
      Alimentaria: { label: "", data: [] },
      Sustancias: { label: "", data: [] },
      Plantas: { label: "", data: [] },
      Metales: { label: "", data: [] },
      Gases: { label: "", data: [] },
      Drogas: { label: "", data: [] }
    }

    console.log(_dataRaw)

    let _data: any[] = [];

    this._ac.paramMap.pipe(
      switchMap((params: ParamMap) => this._apiService.requestGet("api/Graph/lastYear"))
    ).subscribe((response) => {

      response.forEach((element: { mes: string, tipo_intoxicacion: string, cantidad: number }) => {

        if (!_labels.includes(element.mes)) {
          _labels.push(element.mes);
        }

        switch (element.tipo_intoxicacion) {

          case "Plantas y Hongos":

            _dataRaw.Plantas.label = element.tipo_intoxicacion;
            _dataRaw.Plantas.data.push(element.cantidad);
            break;

          case "Gases y Vapores":

            _dataRaw.Gases.label = element.tipo_intoxicacion;
            _dataRaw.Gases.data.push(element.cantidad);
            break;

          case "Sustancias Químicas":

            _dataRaw.Sustancias.label = element.tipo_intoxicacion;
            _dataRaw.Sustancias.data.push(element.cantidad);
            break;

          case "Alcohol":

            _dataRaw.Alcohol.label = element.tipo_intoxicacion;
            _dataRaw.Alcohol.data.push(element.cantidad);
            break;

          case "Medicamentos":

            _dataRaw.Medicamentos.label = element.tipo_intoxicacion;
            _dataRaw.Medicamentos.data.push(element.cantidad);
            break;

          case "Alimentaria":

            _dataRaw.Alimentaria.label = element.tipo_intoxicacion;
            _dataRaw.Alimentaria.data.push(element.cantidad);
            break;

          case "Metales Pesados":

            _dataRaw.Metales.label = element.tipo_intoxicacion;
            _dataRaw.Metales.data.push(element.cantidad);
            break;

          case "Drogas Recreativas":

            _dataRaw.Drogas.label = element.tipo_intoxicacion;
            _dataRaw.Drogas.data.push(element.cantidad);
            break;

          case "Animales Venenosos":

            _dataRaw.Animales.label = element.tipo_intoxicacion;
            _dataRaw.Animales.data.push(element.cantidad);
            break;

          default:

            _dataRaw.Indeterminada.label = element.tipo_intoxicacion;
            _dataRaw.Indeterminada.data.push(element.cantidad);
            break;
        }

      });

      const data = {
        labels: _labels,
        datasets: [
          {
            label: _dataRaw["Indeterminada"].label,
            data: _dataRaw["Indeterminada"].data,
            yAxisID: 'y'
          },
          {
            label: _dataRaw["Animales"].label,
            data: _dataRaw["Animales"].data,
            yAxisID: 'y'
          },
          {
            label: _dataRaw["Alcohol"].label,
            data: _dataRaw["Alcohol"].data,
            yAxisID: 'y'
          },
          {
            label: _dataRaw["Medicamentos"].label,
            data: _dataRaw["Medicamentos"].data,
            yAxisID: 'y'
          },
          {
            label: _dataRaw["Alimentaria"].label,
            data: _dataRaw["Alimentaria"].data,
            yAxisID: 'y'
          },
          {
            label: _dataRaw["Sustancias"].label,
            data: _dataRaw["Sustancias"].data,
            yAxisID: 'y'
          },
          {
            label: _dataRaw["Plantas"].label,
            data: _dataRaw["Plantas"].data,
            yAxisID: 'y'
          },
          {
            label: _dataRaw["Metales"].label,
            data: _dataRaw["Metales"].data,
            yAxisID: 'y'
          },
          {
            label: _dataRaw["Gases"].label,
            data: _dataRaw["Gases"].data,
            yAxisID: 'y'
          },
          {
            label: _dataRaw["Drogas"].label,
            data: _dataRaw["Drogas"].data,
            yAxisID: 'y'
          },

        ]
      };

      // Creamos la gráfica
      this.lineChart = new Chart("reportDate_line", {
        type: 'line' as ChartType, // tipo de la gráfica 
        data: data,
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            title: {
              display: true,
              text: 'Último Año'
            }
          },
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
            }
          }
        },
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
