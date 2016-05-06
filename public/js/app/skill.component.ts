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
  errorMessage: string[] = [];
  changeTrigger: number = 1;

  constructor(private _skillService: SkillService){}

  ngOnInit(){
    this.resetData();
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
    this.resetData();
  }

  resetData(){
      this.errorMessage = [];
      this.model = new Skill(null, '', 0);
  }

  processSkill(index){
      let skill = this.skills[index];
      this._skillService.processSkill(skill).subscribe(
          skill=>{
              this.skills[index].rate++;
              this.changeTrigger++;
          },
          error =>this.errorMessage = <any>error
      )
  }

  closeModal(){
      document.getElementsByTagName('body')[0].classList.remove('modal-open');
      document.getElementsByClassName('modal-backdrop')[0].remove();
      document.getElementById('myModal').style.display = 'none';
      document.getElementById('myModal').classList.remove('in');
  }

  onAddedSkill(skill: Skill){

    this._skillService.addSkill(skill).subscribe(
      data=> {
          if(data.status === 'success') {
            this.skills.push(skill);
            this.changeTrigger++;
            this.resetData();
            this.closeModal();
        } else {
            this.errorMessage.push(data.errorMsg);
        }
      },
      error => this.errorMessage = <any>error
    )
  }
}
