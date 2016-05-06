import {Component} from 'angular2/core';
import {SkillService} from './skill.service';
import {SkillComponent} from './skill.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'my-app',
	template: `<main class='container'>
		<header class='text-center'>
			<h1>{{title}}</h1>
		</header>
	    	<app-skills></app-skills>
	</main>`,
	directives: [SkillComponent],
	providers: [SkillService, HTTP_PROVIDERS],
})

export class AppComponent{
	title = 'My Skills Tracker';
}
