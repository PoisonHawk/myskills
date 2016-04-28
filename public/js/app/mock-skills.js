System.register(['./skill'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var skill_1;
    var Skills;
    return {
        setters:[
            function (skill_1_1) {
                skill_1 = skill_1_1;
            }],
        execute: function() {
            exports_1("Skills", Skills = [
                // {'name': 'PHP', 'rate': 10},
                // {'name': 'JS', 'rate': 5},
                new skill_1.Skill(1, 'Laravel', 10),
                new skill_1.Skill(2, 'PHP', 25),
                new skill_1.Skill(2, 'Angular', 2),
                new skill_1.Skill(2, 'React', 2),
                new skill_1.Skill(5, 'Java Script', 20),
                new skill_1.Skill(6, 'React', 0),
            ]);
        }
    }
});
//# sourceMappingURL=mock-skills.js.map