import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: any;
  val2: number;
  val3: number;
  val1: number;
  constructor() {
    this.data = {
      labels: ['-R', '-R/2', '0', 'R/2', 'R'],
      datasets: [
        {
          label: 'График',
          data: [0, 2.5, 2.5, 4, 5],
          fill: false,
          borderColor: '#4bc0c0'
        }
      ]
    };
  }
}
