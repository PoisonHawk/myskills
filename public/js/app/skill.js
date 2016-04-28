System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Skill;
    return {
        setters:[],
        execute: function() {
            Skill = (function () {
                // name: string;
                // rate: number;
                function Skill(id, name, rate) {
                    this.id = id;
                    this.name = name;
                    this.rate = rate;
                }
                return Skill;
            }());
            exports_1("Skill", Skill);
        }
    }
});
//# sourceMappingURL=skill.js.map