System.register(['angular2/core', './skill'], function(exports_1, context_1) {
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
    var core_1, skill_1;
    var AddSkillFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (skill_1_1) {
                skill_1 = skill_1_1;
            }],
        execute: function() {
            AddSkillFormComponent = (function () {
                function AddSkillFormComponent() {
                    this.onAddedSkill = new core_1.EventEmitter();
                }
                AddSkillFormComponent.prototype.addSkill = function () {
                    console.log(this.model);
                    this.onAddedSkill.emit(this.model);
                    console.log('asasa');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', skill_1.Skill)
                ], AddSkillFormComponent.prototype, "model", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AddSkillFormComponent.prototype, "onAddedSkill", void 0);
                AddSkillFormComponent = __decorate([
                    core_1.Component({
                        selector: 'add-skill-form',
                        templateUrl: 'js/app/views/skills/addskillform.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddSkillFormComponent);
                return AddSkillFormComponent;
            }());
            exports_1("AddSkillFormComponent", AddSkillFormComponent);
        }
    }
});
//# sourceMappingURL=add-skill-form.component.js.map