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
        return this.http.get('/skills')
                    .map(this._extractData)
                    .catch(this._handleError);
  }

  addSkill(skill: Skill): Observable<any> {

      let body = JSON.stringify(skill);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      return this.http.post('/skills', body, options)
          .map(this._processData)
          .catch(this._handleError);
  }

  processSkill(skill: Skill): Observable<any>{

      let body = JSON.stringify(skill);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      return this.http.post('/skills/'+skill.id, body, options)
        .map(this._extractData)
        .catch(this._handleError);
  }

  private _extractData(res: Response){

    if(res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: '+res.status);
    }
    let body = res.json();
    return body.data || {};

  };

  private _handleError(error:any){

      let errMsg = [];

      if(error.status == '422') {

          let errors = error.json();

          for (let err in errors) {
              errMsg.push(errors[err]);
          }
          return Observable.throw(errMsg);

      } else {

          errMsg.push('Server error');
          console.error(errMsg); // log to console instead
          return Observable.throw(errMsg);
      }
  };



  private _processData(res: Response){

    if(res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: '+res.status);
    }
    return res.json();

  };

}
