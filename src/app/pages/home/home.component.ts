import { ReportService } from './../../services/report.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PercentService } from '../../services/percent.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  result = 0;
  msg = '';
  minReport = 0;
  maxReport = 0;
  daysAboveAverage = 0;

  billingState: { [key: string]: number } = {};
  totalBilling: number = 0;
  percents: { estado: string, percentual: number }[] = [];

  text: string = '';

  constructor(private reportsService: ReportService,
              private percentService: PercentService
  ) {}

  ngOnInit(): void {
   this.calcularSoma();
   this.billingState = this.percentService.get();
  }

  fetchReport () {
    this.reportsService.getReport().subscribe(data => {
      this.analyzeBilling(data.faturamento);
    });
  }

  calcularSoma(): any {
    let K: number = 0;
    let SOMA: number = 0;

    while (K < 13) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    this.result = SOMA;
  }


  calcFibonatti(event: any) {

    const num = Number(event.target.value);
    let a = 0, b = 1, temp;
    
    while (a < num) {
        temp = a + b;
        a = b;
        b = temp;
    }

    if (a === num) {
      this.msg = `O número ${num} pertence à sequência de Fibonacci!`
    } else {
      this.msg = `O número ${num} NÃO! pertence à sequência de Fibonacci!`
    }
  }


  analyzeBilling(reports: any[]): void {
    let daysWithReport = reports.filter(dia => dia.valor > 0);

    let values = daysWithReport.map(dia => dia.valor);

    this.minReport = Math.min(...values);
    this.maxReport = Math.max(...values);

    let sum = values.reduce((acc, value) => acc + value, 0);
    let avaregeMonth = sum / values.length;

    this.daysAboveAverage = values.filter(value => value > avaregeMonth).length;
  }


  calcularpercents(): void {
    this.totalBilling = Object.values(this.billingState).reduce((acc, valor) => acc + valor, 0);

    this.percents = Object.keys(this.billingState).map(estado => ({
      estado: estado,
      percentual: (this.billingState[estado] / this.totalBilling) * 100
    }));
  }


  inverseText(): string {
    let inverse = '';
    for (let i = this.text.length - 1; i >= 0; i--) {
      inverse += this.text[i]; // Inverte a string sem usar reverse()
    }
    return inverse;
  }

}



