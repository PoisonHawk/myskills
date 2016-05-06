import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Skill} from './skill';

@Component({
  selector: 'add-skill-form',
  templateUrl : 'js/app/views/skills/addskillform.html',
})

export class AddSkillFormComponent{

  @Input() model: Skill;
  @Input() errorMessage: string[] = [];
  @Output() onAddedSkill = new EventEmitter();

  addSkill(){
    this.onAddedSkill.emit(this.model);
  }

}
