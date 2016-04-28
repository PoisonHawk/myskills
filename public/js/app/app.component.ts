import {Component, OnInit} from 'angular2/core';
import {Skill} from './skill';
import {RegisterComponent} from './register.component';
import {ChartComponent} from './chart.component';
import {SkillService} from './skill.service';


@Component({
	selector: 'my-app',
	templateUrl: 'js/app/views/index.html',
	directives: [RegisterComponent, ChartComponent],
	providers: [SkillService],

})

export class AppComponent implements OnInit{
	title = 'My Skills Tracker';
	skills: Skill[];

	constructor(private _skillService: SkillService){
		this.getSkills();
	}

	getSkills(){
		 this._skillService.getSkills().then(skills => {console.log(skills);this.skills = skills});
	}

	ngOnInit(){
		// this.getSkills();
	}

	//todo обработчик добавления навыка
	addSkill(){
		//todo валидация

		//todo сохранение в бд
		console.log('add skill');
	}

}
