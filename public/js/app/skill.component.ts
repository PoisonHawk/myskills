import {Component} from 'angular2/core';
import {SkillService} from './skill.service';
import {Skill} from './skill';

@Component ({
  selector: 'app-skills',
  templateUrl: 'js/app/views/skills/skill.html',
})

export class SkillComponent{

  skills: Skill[];

  constructor(private _skillService:SkillService){
    this.getSkills();
  }

  getSkills(){
    this._skillService.getSkills().then(skills => this.skills = skills);
  }

  addSkill(name: string){
    console.log('add skill');
  }

  processSkill(){
    console.log('process Skill');
  }
}
