import {Injectable} from 'angular2/core';
import {Skills} from './mock-skills';

@Injectable()
export class SkillService {
  getSkills(){
    return Promise.resolve(Skills);
  }

  processSkill(Skill){
    
  }

}
