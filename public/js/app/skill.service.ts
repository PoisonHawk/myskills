import {Injectable} from 'angular2/core';
import {Skill} from './skill';

@Injectable()
export class SkillService {
  getSkills(){
    return [
  		new Skill(1, 'Laravel', 10),
  		new Skill(2, 'PHP', 30),
  		new Skill(2, 'Angular', 2),
  		new Skill(2, 'React', 2)
  	]
  }
}
