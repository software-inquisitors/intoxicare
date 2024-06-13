import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { GraphChartComponent } from './graph-chart.component';

describe('GraphChartComponent', () => {
  let component: GraphChartComponent;
  let fixture: ComponentFixture<GraphChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphChartComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GraphChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
