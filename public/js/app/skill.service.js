System.register(['angular2/core', 'angular2/http', './mock-skills'], function(exports_1, context_1) {
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
    var core_1, http_1, mock_skills_1;
    var SkillService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (mock_skills_1_1) {
                mock_skills_1 = mock_skills_1_1;
            }],
        execute: function() {
            SkillService = (function () {
                function SkillService(http) {
                    this.http = http;
                }
                ;
                SkillService.prototype.getSkills = function () {
                    return Promise.resolve(mock_skills_1.Skills);
                };
                SkillService.prototype.getSkillData = function () {
                    return this.http.get('/skills')
                        .map(this.extractData);
                    // .catch(this.handleError);
                };
                SkillService.prototype.extractData = function (res) {
                    console.log(res);
                };
                ;
                SkillService.prototype.handleError = function (error) {
                    console.log('error');
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