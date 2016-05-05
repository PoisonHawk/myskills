import {Component, Output, OnInit} from 'angular2/core';
import {SkillService} from './skill.service';
import {AddSkillFormComponent} from './add-skill-form.component';
import {Skill} from './skill';
import {ChartComponent} from './chart.component';

@Component ({
  selector: 'app-skills',
  templateUrl: 'js/app/views/skills/skill.html',
  directives: [AddSkillFormComponent, ChartComponent],
  providers: [SkillService],
})

export class SkillComponent implements OnInit{

  skills: Skill[];
  model: Skill;
  errorMessage: string;

  constructor(private _skillService: SkillService){}

  ngOnInit(){
    this.model = new Skill('', 0);
    this.skills = [];
    this.getSkillData();
  }

  getSkillData(){
    this._skillService.getSkillData()
        .subscribe(
                       skills => this.skills = skills,
                       error =>  this.errorMessage = <any>error);
  }

  addSkill(name: string){
    this.model = new Skill('', 0);
  }

  processSkill(skill){

  }

  onAddedSkill(skill: Skill){

    this._skillService.addSkill(skill).subscribe(
      skill=> {
          if(typeof skill.name !== 'undefined') {
            this.skills.push(skill);
            this.model = new Skill('', 0);
        }
      },
      error =>
        {this.errorMessage = <any>error;
            console.log(this.errorMessage);
        }

    )

  }
}
