import {Component, Output, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {SkillService} from './skill.service';
import {AddSkillFormComponent} from './add-skill-form.component';
import {Skill} from './skill';

@Component ({
  selector: 'app-skills',
  templateUrl: 'js/app/views/skills/skill.html',
  directives: [AddSkillFormComponent],
  providers: [SkillService, HTTP_PROVIDERS],
})

export class SkillComponent implements OnInit{

  skills;

  model: Skill;

  errorMessage: string;

  constructor(private _skillService:SkillService){
    // this.getSkills();
    this.model = new Skill('', 0);
  }

  ngOnInit(){
    this.getSkillData();
  }

  getSkillData(){
    this._skillService.getSkillData()
    .subscribe(
                       skills => this.skills = skills,
                       error =>  this.errorMessage = <any>error);
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

  }

  onAddedSkill(skill: Skill){
    console.log('on added');
    this.skills.push(skill);
    this.model = new Skill('', 0);
  }
}
