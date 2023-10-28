define(["TypeCheck"], function (TypeCheck) {
    return {
        /**
         * Inherits constructor values
         * @param {Function} testator - Testator constructor which must be called for inheritance
         * @param {Object} instance - Instance of the inheritor
         * @param {Any[]|Object} options - Options, which will be passed to the testator
         * @returns {Boolean} - True if constructor values are inherited, false otherwise
         */
        inheritConstructor: function (testator, instance, options) {
            var isInherited = false, options = options ? options : {};
            if (TypeCheck.isFunction(testator) && TypeCheck.isObject(instance)) {
                if (Array.isArray(options)) {
                    testator.apply(instance, options);
                } else {
                    testator.apply(instance, [options]);
                }
                isInherited = true;
            }
            return isInherited;
        },
        /**
         * Inherits prototype from testator to inheritor
         * @param {Function} inheritor - The method which will be inherited from testator
         * @param {Function} testator - The method which pass its prototype to inheritor
         * @returns {Boolean} - True if prototype values are inherited, false otherwise
         */
        inheritPrototype: function (inheritor, testator) {
            var isInherited = false;
            if (TypeCheck.isFunction(inheritor) && TypeCheck.isFunction(testator)) {
                inheritor.prototype = Object.create(testator.prototype);
                inheritor.prototype.constructor = inheritor;
                isInherited = true;
            }
            return isInherited;
        }
    }
});