import {Component, ViewChild, ElementRef} from 'angular2/core';

declare var Chart: any;

@Component({
  selector: 'app-chart',
  template: `
  <section class='chart'>
        <div class='chart-nav'>
          <a href='#'>Chart</a>
          <a href='#'>Active</a>
        </div>
        <div>
            <canvas #myChart width="400" height="100"></canvas>
        </div>
        <div>
          <a href='#'>Allasasasa</a>
          <a href='#'>Month</a>
          <a href='#'>Week</a>
          <a href='#'>Day</a>
        </div>
    </section>
  `
})

export class ChartComponent{
    @ViewChild ('myChart') myChart: ElementRef;

    ngAfterViewInit() { // wait for the view to init before using the element

      let ctx: CanvasRenderingContext2D = this.myChart.nativeElement.getContext("2d");
      // happy drawing from here on

      var myChart = new Chart(ctx, {
         type: 'bar',
         data: {
             labels: ["Laravel", "PHP", "JS", "Angular", "Wordpress", "React"],
             datasets: [{
                 label: 'Rate of skills',
                 data: [12, 19, 3, 5, 2, 3]
             }]
         },
         options: {
             scales: {
                 yAxes: [{
                     ticks: {
                         beginAtZero:true
                     }
                 }]
             }
         }
     });

    }
}
