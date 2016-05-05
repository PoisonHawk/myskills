import {Component, ViewChild, ElementRef, Input, Output, OnInit, OnChanges} from 'angular2/core';
import {SkillService} from './skill.service';
import {Skill} from './skill';

declare var Chart: any;

@Component({
  selector: 'app-chart',
  template: `
  <section class='chart'>
        <div>
            <canvas #myChart width="400" height="100"></canvas>
        </div>
    </section>
  `,
  providers: [SkillService],
})

export class ChartComponent implements OnInit, OnChanges{

    chart;

    @ViewChild ('myChart') myChart: ElementRef;

    @Input() skills: Skill[];

    ngOnChanges(changes){
        console.info('on changes');
        let skills = changes.skills.currentValue,
        labels = [],
        dataset = [];

        if(skills.length>0){
            for(let skill in skills) {
                labels.push(skills[skill].name);
                dataset.push(skills[skill].rate);

            }
            this.chart.data.labels=labels;
            this.chart.data.datasets[0].data=dataset;
            this.chart.update();
        }

    }

    ngOnInit(){
        console.info('on init');
        this.skills = [];
    }

    ngAfterViewInit() {
        console.info('after view init');
        this.renderChart();
    }

    getLabels(){
        return this.skills.map(function(skill){
          return skill.name;
        })
    }

    getRates(){
      return this.skills.map(function(skill){
          return skill.rate;
      })
    }



    updateChart(){

    }

    renderChart(){
      let ctx: CanvasRenderingContext2D = this.myChart.nativeElement.getContext("2d");

      this.chart = new Chart(ctx, {
         type: 'bar',
         data: {
             labels: this.getLabels(),
             datasets: [{
                 label: 'Rate of skills',
                 data: this.getRates(),
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
