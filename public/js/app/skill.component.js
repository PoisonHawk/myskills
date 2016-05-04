System.register(['angular2/core', './skill.service', './add-skill-form.component', './skill'], function(exports_1, context_1) {
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
    var core_1, skill_service_1, add_skill_form_component_1, skill_1;
    var SkillComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (skill_service_1_1) {
                skill_service_1 = skill_service_1_1;
            },
            function (add_skill_form_component_1_1) {
                add_skill_form_component_1 = add_skill_form_component_1_1;
            },
            function (skill_1_1) {
                skill_1 = skill_1_1;
            }],
        execute: function() {
            SkillComponent = (function () {
                function SkillComponent(_skillService) {
                    this._skillService = _skillService;
                }
                SkillComponent.prototype.ngOnInit = function () {
                    this.model = new skill_1.Skill('', 0);
                    this.skills = [];
                    this.getSkillData();
                };
                SkillComponent.prototype.getSkillData = function () {
                    var _this = this;
                    this._skillService.getSkillData()
                        .subscribe(function (skills) { return _this.skills = skills; }, function (error) { return _this.errorMessage = error; });
                };
                SkillComponent.prototype.addSkill = function (name) {
                    this.model = new skill_1.Skill('', 0);
                };
                SkillComponent.prototype.processSkill = function (skill) {
                };
                SkillComponent.prototype.onAddedSkill = function (skill) {
                    var _this = this;
                    this._skillService.addSkill(skill).subscribe(function (skill) {
                        if (typeof skill.name !== 'undefined') {
                            _this.skills.push(skill);
                            _this.model = new skill_1.Skill('', 0);
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        console.log(_this.errorMessage);
                    });
                };
                SkillComponent = __decorate([
                    core_1.Component({
                        selector: 'app-skills',
                        templateUrl: 'js/app/views/skills/skill.html',
                        directives: [add_skill_form_component_1.AddSkillFormComponent],
                        providers: [skill_service_1.SkillService],
                    }), 
                    __metadata('design:paramtypes', [skill_service_1.SkillService])
                ], SkillComponent);
                return SkillComponent;
            }());
            exports_1("SkillComponent", SkillComponent);
        }
    }
});
//# sourceMappingURL=skill.component.js.map