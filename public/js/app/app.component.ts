import {Component} from 'angular2/core';
import {Skill} from './skill';
import {RegisterComponent} from './register.component';
import {ChartComponent} from './chart.component';

@Component({
	selector: 'my-app',
	templateUrl: 'js/app/views/index.html',
	directives: [RegisterComponent, ChartComponent]

})

export class AppComponent {
	title = 'My Skills Tracker';
	skills = [
		new Skill(1, 'Laravel', 10),
		new Skill(2, 'PHP', 30),
		new Skill(2, 'Angular', 2),
		new Skill(2, 'React', 2)
	];

	addSkill(){
		//todo test
		console.log('add skill');
	}

}
