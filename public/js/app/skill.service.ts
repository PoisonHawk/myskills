import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Skills}   from './mock-skills';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SkillService {

  constructor(private http: Http){};

  getSkills(){
    return Promise.resolve(Skills);
  }

  getSkillData(){
    return this.http.get('/skills')
                .map(this.extractData);
                // .catch(this.handleError);
  }

  extractData(res: Response){
    console.log(res);
  };

  handleError(error:any){
      console.log('error');
  };

}
