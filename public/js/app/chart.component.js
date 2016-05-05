System.register(['angular2/core', './skill.service'], function(exports_1, context_1) {
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
    var core_1, skill_service_1;
    var ChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (skill_service_1_1) {
                skill_service_1 = skill_service_1_1;
            }],
        execute: function() {
            ChartComponent = (function () {
                function ChartComponent() {
                }
                ChartComponent.prototype.ngOnChanges = function (changes) {
                    console.info('on changes');
                    this.updateChart();
                };
                ChartComponent.prototype.ngOnInit = function () {
                    console.info('on init');
                    this.skills = [];
                };
                ChartComponent.prototype.ngAfterViewInit = function () {
                    console.info('after view init');
                    this.renderChart();
                };
                ChartComponent.prototype.getLabels = function () {
                    return this.skills.map(function (skill) {
                        return skill.name;
                    });
                };
                ChartComponent.prototype.getRates = function () {
                    return this.skills.map(function (skill) {
                        return skill.rate;
                    });
                };
                //redraw chart
                ChartComponent.prototype.updateChart = function () {
                    if (this.skills.length > 0) {
                        var labels = [], dataset = [];
                        for (var skill in this.skills) {
                            labels.push(this.skills[skill].name);
                            dataset.push(this.skills[skill].rate);
                        }
                        this.chart.data.labels = labels;
                        this.chart.data.datasets[0].data = dataset;
                        this.chart.clear().update();
                    }
                };
                ChartComponent.prototype.renderChart = function () {
                    var ctx = this.myChart.nativeElement.getContext("2d");
                    this.chart = new Chart(ctx, {
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
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ChartComponent.prototype, "skills", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ChartComponent.prototype, "changeTrigger", void 0);
                ChartComponent = __decorate([
                    core_1.Component({
                        selector: 'app-chart',
                        template: "\n  <section class='chart'>\n        <div>\n            <canvas #myChart width=\"400\" height=\"100\"></canvas>\n        </div>\n    </section>\n  ",
                        providers: [skill_service_1.SkillService],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent);
                return ChartComponent;
            }());
            exports_1("ChartComponent", ChartComponent);
        }
    }
});
//# sourceMappingURL=chart.component.js.map