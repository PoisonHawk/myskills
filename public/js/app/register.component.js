System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent() {
                    this.actions = [
                        {
                            skill: 'Laravel',
                            material: 'Статья на хабре'
                        },
                        {
                            skill: 'JS',
                            material: 'JS'
                        },
                    ];
                }
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'app-register',
                        template: "\n  <section class=\"register\">\n    <table class=\"table table-striped\">\n    <thead>\n      <th>Skill</th>\n      <th>Active</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"#action of actions\">\n        <td>{{action.skill}}</td>\n        <td>{{action.material}}</td>\n      </tr>\n    </tbody>\n  </table>\n  </section>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map