import {Component, Output} from 'angular2/core';
import {SkillService} from './skill.service';
import {AddSkillFormComponent} from './add-skill-form.component';
import {Skill} from './skill';

@Component ({
  selector: 'app-skills',
  templateUrl: 'js/app/views/skills/skill.html',
  directives: [AddSkillFormComponent],
})

export class SkillComponent{

  skills: Skill[];

  model: Skill;

  constructor(private _skillService:SkillService){
    this.getSkills();
    this.model = new Skill('', 0);
  }

  getSkills(){
    this._skillService.getSkills().then(skills => this.skills = skills);
  }

  addSkill(name: string){
    console.log('add skill');
    this.model = new Skill('', 0);
  }

  processSkill(skill){
    console.log('process Skill');
    this._skillService.processSkill(Skill);
  }

  onAddedSkill(skill: Skill){
    console.log('on added');
    this.skills.push(skill);
    this.model = new Skill('', 0);
  }
}
