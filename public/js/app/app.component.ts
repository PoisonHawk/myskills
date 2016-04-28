import {Component} from 'angular2/core';
import {Skill} from './skill';
import {RegisterComponent} from './register.component';
import {ChartComponent} from './chart.component';
import {SkillService} from './skill.service';

@Component({
	selector: 'my-app',
	templateUrl: 'js/app/views/index.html',
	directives: [RegisterComponent, ChartComponent]

})

export class AppComponent {
	title = 'My Skills Tracker';

	//todo получать skills из запроса к БД
	skills = [];

	constructor(private _skillService: SkillService){

	}

	//todo обработчик добавления навыка
	addSkill(){
		//todo валидация

		//todo сохранение в бд
		console.log('add skill');
	}

}
