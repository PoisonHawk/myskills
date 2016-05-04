import {Component, Output, OnInit} from 'angular2/core';
import {SkillService} from './skill.service';
import {AddSkillFormComponent} from './add-skill-form.component';
import {Skill} from './skill';

@Component ({
  selector: 'app-skills',
  templateUrl: 'js/app/views/skills/skill.html',
  directives: [AddSkillFormComponent],
  providers: [SkillService],
})

export class SkillComponent implements OnInit{

  skills: Skill[];
  model: Skill;
  errorMessage: string;

  constructor(private _skillService:SkillService){}

  ngOnInit(){
    this.model = new Skill('', 0);
    this.skills = [];
    this.getSkillData();
  }

  getSkillData(){
    this._skillService.getSkillData()
    .subscribe(
                       skills => {
                         console.log('success');
                         console.log(skills);
                         this.skills = skills;
                         console.log(this.skills);
                          },
                       error =>  this.errorMessage = <any>error);
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
