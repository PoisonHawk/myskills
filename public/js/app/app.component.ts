import {Component} from 'angular2/core';
import {Skill} from './skill';
import {RegisterComponent} from './register.component';
import {ChartComponent} from './chart.component';
import {SkillService} from './skill.service';
import {SkillComponent} from './skill.component';

@Component({
	selector: 'my-app',
	templateUrl: 'js/app/views/index.html',
	directives: [SkillComponent, RegisterComponent, ChartComponent],
	providers: [SkillService],
})

export class AppComponent{
	title = 'My Skills Tracker';
}
