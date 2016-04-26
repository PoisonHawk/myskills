import {Component} from 'angular2/core';
import {Skill} from './skill';

@Component({
	selector: 'my-app',
	templateUrl: 'js/app/views/index.html',
	
})

export class AppComponent { 
	title = 'My Skills Tracker';
	skills = [
		new Skill(1, 'Laravel', 10),
		new Skill(2, 'PHP', 30),
		new Skill(2, 'Angular', 2)
	];

	actions = [
		{
			skill: 'Laravel',
			material: 'Статья на хабре'
		},
		{
			skill: 'JS',
			material: 'JS'
		},
	];

	addSkill(){
		console.log('add skill');
	}
	
}

