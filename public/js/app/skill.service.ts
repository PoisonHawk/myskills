import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Skills}   from './mock-skills';
import {Observable} from 'rxjs/Observable';
// import {map} from 'rxjs/operator/map';
import {Skill} from './skill';

@Injectable()
export class SkillService {

  constructor(private http: Http){};

  getSkillData():Observable<Skill[]>{

    console.log('skillSertvice: getSkillData');

    return this.http.get('/skills')
                .map(this.extractData)
                .catch(this.handleError);
  }

  extractData(res: Response){

    if(res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: '+res.status);
    }
    let body = res.json();
    console.log(body);
    return body.data || {};

  };

  private handleError(error:any){
      console.log('error');
      let errMsg = error.message || 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  };

  addSkill(skill: Skill): Observable<Skill> {

      let body = JSON.stringify(skill);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      return this.http.post('/skills', body, options)
          .map(this.extractData)
          .catch(this.handleError);
  }

}
