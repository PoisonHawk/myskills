System.register(['angular2/core', './chart.component', './skill.service', './add-skill-form.component', './skill'], function(exports_1, context_1) {
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
    var core_1, chart_component_1, skill_service_1, add_skill_form_component_1, skill_1;
    var SkillComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chart_component_1_1) {
                chart_component_1 = chart_component_1_1;
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
                    this.errorMessage = [];
                    this.changeTrigger = 1;
                }
                SkillComponent.prototype.ngOnInit = function () {
                    this.resetData();
                    this.skills = [];
                    this.getSkillData();
                };
                SkillComponent.prototype.getSkillData = function () {
                    var _this = this;
                    this._skillService.getSkillData()
                        .subscribe(function (skills) { return _this.skills = skills; }, function (error) { return _this.errorMessage = error; });
                };
                SkillComponent.prototype.addSkill = function (name) {
                    this.resetData();
                };
                SkillComponent.prototype.resetData = function () {
                    this.errorMessage = [];
                    this.model = new skill_1.Skill(null, '', 0);
                };
                SkillComponent.prototype.processSkill = function (index) {
                    var _this = this;
                    var skill = this.skills[index];
                    this._skillService.processSkill(skill).subscribe(function (skill) {
                        _this.skills[index].rate++;
                        _this.changeTrigger++;
                    }, function (error) { return _this.errorMessage = error; });
                };
                SkillComponent.prototype.closeModal = function () {
                    document.getElementsByTagName('body')[0].classList.remove('modal-open');
                    document.getElementsByClassName('modal-backdrop')[0].remove();
                    document.getElementById('myModal').style.display = 'none';
                    document.getElementById('myModal').classList.remove('in');
                };
                SkillComponent.prototype.onAddedSkill = function (skill) {
                    var _this = this;
                    this._skillService.addSkill(skill).subscribe(function (data) {
                        if (data.status === 'success') {
                            _this.skills.push(skill);
                            _this.changeTrigger++;
                            _this.resetData();
                            _this.closeModal();
                        }
                        else {
                            _this.errorMessage.push(data.errorMsg);
                        }
                    }, function (error) { return _this.errorMessage = error; });
                };
                SkillComponent = __decorate([
                    core_1.Component({
                        selector: 'app-skills',
                        templateUrl: 'js/app/views/skills/skill.html',
                        directives: [chart_component_1.ChartComponent, add_skill_form_component_1.AddSkillFormComponent],
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