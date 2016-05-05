import {Component, OnInit} from 'angular2/core';
import {ChartComponent} from './chart.component';
import {SkillService} from './skill.service';
import {AddSkillFormComponent} from './add-skill-form.component';
import {Skill} from './skill';


@Component ({
  selector: 'app-skills',
  templateUrl: 'js/app/views/skills/skill.html',
  directives: [ChartComponent, AddSkillFormComponent],
  providers: [SkillService],
})

export class SkillComponent implements OnInit{

  skills: Skill[];
  model: Skill;
  errorMessage: string;
  changeTrigger: number = 1;

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

  processSkill(index){
      this.skills[index].rate ++;
      this.changeTrigger++;
  }

  onAddedSkill(skill: Skill){

    this._skillService.addSkill(skill).subscribe(
      skill=> {
          if(typeof skill.name !== 'undefined') {
            this.skills.push(skill);
            this.changeTrigger++;
            console.log(this.skills);
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
