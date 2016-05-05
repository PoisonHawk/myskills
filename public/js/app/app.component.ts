import {Component} from 'angular2/core';
import {Skill} from './skill';
import {RegisterComponent} from './register.component';
import {SkillService} from './skill.service';
import {SkillComponent} from './skill.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'my-app',
	templateUrl: 'js/app/views/index.html',
	directives: [SkillComponent, RegisterComponent],
	providers: [SkillService, HTTP_PROVIDERS],
})

export class AppComponent{
	title = 'My Skills Tracker';
}
