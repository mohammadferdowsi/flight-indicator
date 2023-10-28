define(["NotImplementedError", "TypeCheck", "Failure"], function (NotImplementedError, TypeCheck, Failure) {
    return {
        /**
         * Checks if <memberList is implemented in constructor of <instance>
         * @public
         * @memberof Interface
         * @throws {TypeError} - If instance is undefined
         * @throws {TypeError} - If methodList is no a string array
         * @throws {NotImplementedError} - If method is not implemented
         * @param {String[]} memberList - Contains all method names
         * @param {Object} instance - Object which shall be checked
         * @returns {Boolean} - True, if members are implemented
         */
        areMembersImplemented: function (memberList, instance) {
            if (!TypeCheck.isObject(instance)) {
                Failure.throwTypeError("instance is not an object");
            }
            if (!TypeCheck.isArrayTypeOf(memberList, "string")) {
                Failure.throwTypeError("memberList is no a string array");
            }
            var i, length = memberList.length, member = "", notImplementedMembers = [];
            for (i = 0; i < length; i++) {
                member = memberList[i];
                if (!instance.hasOwnProperty(member)) {
                    notImplementedMembers.push(member);
                }
            }
            if (notImplementedMembers.length > 0) {
                throw new TypeError("Members " + notImplementedMembers.join(" ") + " are not implemented");
            }
            return true;
        },
        /**
         * Checks if <methodList>, is implemented in prototype of <instance>
         * @public
         * @memberof Interface
         * @throws {TypeError} - If instance is not an object
         * @throws {TypeError} - If methodList is no a string array
         * @throws {NotImplementedError} - If method is not implemented
         * @param {String[]} methodList - Contains all method names
         * @param {Object} instance - Object which shall be checked
         * @returns {Boolean} - True, if methods are implemented
         */
        areMethodsImplemented: function (methodList, instance) {
            if (!TypeCheck.isObject(instance)) {
                Failure.throwTypeError("instance is not an object");
            }
            if (!TypeCheck.isArrayTypeOf(methodList, "string")) {
                Failure.throwTypeError("methodList is no a string array");
            }
            var i, length = methodList.length, method = "", prototype = Object.getPrototypeOf(instance), notImplementedMethods = [];
            for (i = 0; i < length; i++) {
                method = methodList[i];
                if (!prototype.hasOwnProperty(method)) {
                    notImplementedMethods.push(method);
                }
            }
            if (notImplementedMethods.length > 0) {
                throw new NotImplementedError("Methods " + notImplementedMethods.join(" ") + " are not implemented");
            }
            return true;
        }
    };
}); 