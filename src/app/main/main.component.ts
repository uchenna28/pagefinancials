import { Component,OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFan, faMagic, faAppleAlt, faChevronRight, faWallet, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit { 
  wallet = faWallet
  plus = faPlus 
  spotify = faMagic
  invision = faMagic
  restaurant= faFan
  apple = faAppleAlt  
  right = faChevronRight
  revenueChart:any
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Incomes' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Expenses' }
  ];
  constructor() { }

  ngOnInit() {
    // this.initForm()
    // this.createMonthlyRevenue()
  }
 

  // createMonthlyRevenue() {
    
  //   const months = [
  //     "JAN",
  //     "FEB",
  //     "MAR",
  //     "APR",
  //     "MAY",
  //     "JUN",
  //     "JUL",
  //     "AUG",
  //     "SEP",
  //     "OCT",
  //     "NOV",
  //     "DEC",
  //   ];

  //   this.revenueChart = new Chart(this.revenueRef.nativeElement, {
  //     type: "bar",
  //     data: {
  //       labels: months,
  //       datasets: [
  //         {
  //           data: [
  //             12,
  //             13,
  //             14,
  //             12,
  //             10,
  //             20,
  //             18,
  //             17,
  //             12,
  //             12,
  //             9,
  //             6
  //           ],
  //           backgroundColor: "#DB8F29",
  //           hoverBorderColor: "#000",
  //           hoverBorderWidth: 2,
  //         },
  //       ],
  //     },
  //     options: {
         
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       },
  //     },
  //   });
  // }

//   createMonthlyRevenue(){
//     const ctx = document.getElementById('myChart') as HTMLCanvasElement;
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
//   }


}
