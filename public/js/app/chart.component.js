System.register(['angular2/core', 'angular2/http', './skill.service'], function(exports_1, context_1) {
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
    var core_1, http_1, skill_service_1;
    var ChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (skill_service_1_1) {
                skill_service_1 = skill_service_1_1;
            }],
        execute: function() {
            ChartComponent = (function () {
                function ChartComponent(_skillService) {
                    this._skillService = _skillService;
                    // this._skillService.getSkills().then(skills => this.skills = skills);
                }
                ChartComponent.prototype.ngOnInit = function () {
                    // this._skillService.getSkills().then(skills => this.skills = skills);
                };
                ChartComponent.prototype.getLabels = function () {
                    return [];
                    // return this.skills.map(function(skill){
                    //   return skill.name;
                    // })
                };
                ChartComponent.prototype.getRates = function () {
                    return [];
                    // return this.skills.map(function(skill){
                    //     return skill.rate;
                    // })
                };
                ChartComponent.prototype.ngAfterViewInit = function () {
                    var ctx = this.myChart.nativeElement.getContext("2d");
                    // happy drawing from here on
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: this.getLabels(),
                            datasets: [{
                                    label: 'Rate of skills',
                                    data: this.getRates(),
                                }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                            }
                        }
                    });
                };
                __decorate([
                    core_1.ViewChild('myChart'), 
                    __metadata('design:type', core_1.ElementRef)
                ], ChartComponent.prototype, "myChart", void 0);
                ChartComponent = __decorate([
                    core_1.Component({
                        selector: 'app-chart',
                        template: "\n  <section class='chart'>\n        <div class='chart-nav'>\n          <a href='#'>Chart</a>\n          <a href='#'>Active</a>\n        </div>\n        <div>\n            <canvas #myChart width=\"400\" height=\"100\"></canvas>\n        </div>\n        <div>\n          <a href='#'>All</a>\n          <a href='#'>Month</a>\n          <a href='#'>Week</a>\n          <a href='#'>Day</a>\n        </div>\n    </section>\n  ",
                        providers: [skill_service_1.SkillService, http_1.HTTP_PROVIDERS],
                    }), 
                    __metadata('design:paramtypes', [skill_service_1.SkillService])
                ], ChartComponent);
                return ChartComponent;
            }());
            exports_1("ChartComponent", ChartComponent);
        }
    }
});
//# sourceMappingURL=chart.component.js.map