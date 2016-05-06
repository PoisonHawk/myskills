System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var SkillService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            SkillService = (function () {
                function SkillService(http) {
                    this.http = http;
                }
                ;
                SkillService.prototype.getSkillData = function () {
                    return this.http.get('/skills')
                        .map(this._extractData)
                        .catch(this._handleError);
                };
                SkillService.prototype.addSkill = function (skill) {
                    var body = JSON.stringify(skill);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post('/skills', body, options)
                        .map(this._processData)
                        .catch(this._handleError);
                };
                SkillService.prototype.processSkill = function (skill) {
                    var body = JSON.stringify(skill);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post('/skills/' + skill.id, body, options)
                        .map(this._extractData)
                        .catch(this._handleError);
                };
                SkillService.prototype._extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                ;
                SkillService.prototype._handleError = function (error) {
                    var errMsg = [];
                    if (error.status == '422') {
                        var errors = error.json();
                        for (var err in errors) {
                            errMsg.push(errors[err]);
                        }
                        return Observable_1.Observable.throw(errMsg);
                    }
                    else {
                        errMsg.push('Server error');
                        console.error(errMsg); // log to console instead
                        return Observable_1.Observable.throw(errMsg);
                    }
                };
                ;
                SkillService.prototype._processData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    return res.json();
                };
                ;
                SkillService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SkillService);
                return SkillService;
            }());
            exports_1("SkillService", SkillService);
        }
    }
});
//# sourceMappingURL=skill.service.js.map