import {Component, ViewChild, ElementRef, Input, OnInit} from 'angular2/core';
import {AppComponent} from './app.component';
import {SkillService} from './skill.service';
import {Skill} from './skill';

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
          <a href='#'>All</a>
          <a href='#'>Month</a>
          <a href='#'>Week</a>
          <a href='#'>Day</a>
        </div>
    </section>
  `
})

export class ChartComponent implements OnInit{
    @ViewChild ('myChart') myChart: ElementRef;

    skills: Skill[];

    ngOnInit(){

        // this._skillService.getSkills().then(skills => this.skills = skills);
    }

    constructor(private _skillService: SkillService){
      this._skillService.getSkills().then(skills => this.skills = skills);
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

    ngAfterViewInit() { // wait for the view to init before using the element

      let ctx: CanvasRenderingContext2D = this.myChart.nativeElement.getContext("2d");
      // happy drawing from here on

      var myChart = new Chart(ctx, {
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
