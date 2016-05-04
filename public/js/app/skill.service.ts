import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Skills}   from './mock-skills';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import {Skill} from './skill';

@Injectable()
export class SkillService {

  constructor(private http: Http){};

  getSkillData():Observable<Skill[]>{
    return this.http.get('/skills')
                .map(this.extractData);
                // .catch(this.handleError);
  }

  extractData(res: Response){

    console.log(res.json());

    if(res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: '+res.status);
    }
    let body = res.json();
    return body.data || {};

  };

  handleError(error:any){
      console.log('error');
  };

}
