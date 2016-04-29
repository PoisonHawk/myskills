import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Skill} from './skill';

@Component({
  selector: 'add-skill-form',
  templateUrl : 'js/app/views/skills/addskillform.html',
})

export class AddSkillFormComponent{

  @Input() model: Skill;
  @Output() onAddedSkill = new EventEmitter();

  addSkill(){
    console.log(this.model);
    this.onAddedSkill.emit(this.model);
    console.log('asasa');
  }

}
