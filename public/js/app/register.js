System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Register;
    return {
        setters:[],
        execute: function() {
            Register = (function () {
                function Register(skillName, action) {
                    this.skillName = skillName;
                    this.action = action;
                }
                return Register;
            }());
            exports_1("Register", Register);
        }
    }
});
//# sourceMappingURL=register.js.map