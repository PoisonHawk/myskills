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
                new skill_1.Skill('Laravel', 10),
                new skill_1.Skill('PHP', 25),
                new skill_1.Skill('Angular', 2),
                new skill_1.Skill('React', 2),
                new skill_1.Skill('Java Script', 20),
                new skill_1.Skill('React', 0),
            ]);
        }
    }
});
//# sourceMappingURL=mock-skills.js.map