import {Component, OnInit} from 'angular2/core';
import {ChartComponent} from './chart.component';
import {RegisterComponent} from './register.component';
import {SkillService} from './skill.service';
import {AddSkillFormComponent} from './add-skill-form.component';
import {ProcessSkillFormComponent} from './process-skill-form.component';
import {Skill} from './skill';
import {Register} from './register';


@Component ({
  selector: 'app-skills',
  templateUrl: 'js/app/views/skills/skill.html',
  directives: [ChartComponent, AddSkillFormComponent, ProcessSkillFormComponent, RegisterComponent],
  providers: [SkillService],
})

export class SkillComponent implements OnInit{

  skills: Skill[];
  model: Skill;
  errorMessage: string[] = [];
  changeTrigger: number = 1;
  activeSkill: Skill;
  registers: Register[] = [
      {
          skillName: 'js',
          action: 'Статья на хабре',
      },
      {
          skillName: 'php',
          action: 'изучение функции strtolower',
      }
  ];

  constructor(private _skillService: SkillService){}

  ngOnInit(){
    this.resetData();
    this.skills = [];
    this.getSkillData();
    this.activeSkill = new Skill(null, '', 0);
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
      this.model = this.skills[index];
      return;

    //   let skill = this.skills[index];
    //   this._skillService.processSkill(skill).subscribe(
    //       skill=>{
    //           this.skills[index].rate++;
    //           this.changeTrigger++;
    //       },
    //       error =>this.errorMessage = <any>error
    //   )
  }

  onProcessSkill(data){
      console.log(data);

      if (typeof data.register !== 'undefined'){
          this.registers.push(new Register(data.skill.name, data.register));
      }
      this.closeModal();

  }

  closeModal(){
      document.getElementsByTagName('body')[0].classList.remove('modal-open');
      document.getElementsByClassName('modal-backdrop')[0].remove();
      document.getElementById('myModal').style.display = 'none';
      document.getElementById('myModal').classList.remove('in');
      document.getElementById('process_skill').style.display = 'none';
      document.getElementById('process_skill').classList.remove('in');
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
