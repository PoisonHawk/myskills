System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Skill;
    return {
        setters:[],
        execute: function() {
            Skill = (function () {
                function Skill(id, name, rate) {
                    this.id = id;
                    this.name = name;
                    this.rate = rate;
                    this.skillName = name;
                }
                return Skill;
            }());
            exports_1("Skill", Skill);
        }
    }
});
//# sourceMappingURL=skill.js.map