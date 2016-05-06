import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Skill} from './skill';

@Component({
    selector: 'process-skill-form',
    templateUrl : 'js/app/views/skills/processskillform.html',
})

export class ProcessSkillFormComponent{

    register: any;    
    @Input() model: Skill[];
    @Input() errorMessage: string[] =[];

    @Output() onProcessSkill = new EventEmitter();

    processSkill(){

        let data = {
            skill: this.model,
            register: this.register,
        }

        this.onProcessSkill.emit(data);
    }

}
