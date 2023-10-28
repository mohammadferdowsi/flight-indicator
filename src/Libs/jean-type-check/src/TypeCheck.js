define([], function () {
    return {
        /**
         * Checks if provided element type is string
         * @public
         * @memberof TypeCheck
         * @param {Any} o - element to be checked
         * @returns {Boolean} True, if element type is string, false otherwise
         */
        isString: function (o) {
            return (typeof o === "string") ? true : false;
        },
        /** 
         * Checks if provided element type is boolean
         * @public
         * @memberof TypeCheck
         * @param {Any} o - element to be checked
         * @returns {Boolean} True, if element type is boolean, false otherwise
         */
        isBoolean: function (o) {
            return (typeof o === "boolean") ? true : false;
        },
        /**
         * Checks if provided element type is boolean
         * @public
         * @memberof TypeCheck
         * @param {Any} o - element to be checked
         * @returns {Boolean} True, if element type is boolean, false otherwise
         */
        isNumber: function (o) {
            return (typeof o === "number") ? true : false;
        },
        /**
         * Checks if provided element is an object
         * @public
         * @memberof TypeCheck
         * @param {Any} o - element to be checked
         * @returns {Boolean} True, if element is empty, false otherwise
         */
        isObject: function (o) {
            return !this.isArray(o) && o !== null && typeof o === 'object';
        },
        /**
         * Checks if provided element is an empty object
         * @public
         * @memberof TypeCheck
         * @param {Any} o - element to be checked
         * @returns {Boolean} True, if element is empty, false otherwise
         */
        isEmptyObject: function (o) {
            var isEmpty = false;
            if (this.isObject(o) && Object.keys(o).length === 0) {
                isEmpty = true;
            }
            return isEmpty;
        },
        /**
        * Checks if provided element is a function
        * @public
        * @memberof TypeCheck
        * @param {Any} o - element to be checked
        * @returns {Boolean} True, if element is a function, false otherwise
        */
        isFunction: function (o) {
            return (typeof o === "function") ? true : false;
        },
        /**
         * Checks if provided element is defined
         * @public
         * @memberof TypeCheck
         * @param {Any} o - element to be checked
         * @returns {Boolean} True, if element is defined, false otherwise
         */
        isDefined: function (o) {
            return (o !== undefined && o != null);
        },
        /**
         * Checks if provided element is an array
         * @public 
         * @memberof TypeCheck
         * @param {Any} o - element to be checked
         * @returns {Boolean} - true if o is an array, false otherwise
         */
        isArray: function (o) {
            return Array.isArray(o);
        },
        /**
         * Check id provided element is an empty array
         * @public
         * @memberof TypeCheck
         * @param {Any} o - element to be checked
         * @returns {Boolean} - True if o is an empty array, false otherwise
         */
        isEmptyArray: function (o) {
            return this.isArray(o) && (o.length === 0);
        },
        /**
         * Checks if all elements in this array have the same type
         * @public
         * @memberof TypeCheck
         * @throws {TypeError} - If options.type is not a string
         * @throws {TypeError} - If options.array is not a string
         * @param {Any[]} array - Array to be checked
         * @param {String} type - Type of elements in this array. Valid values are all which matches 
         *                        to the typeof operator
         * @returns {Boolean} - true if all elements in the array have the same type, false otherwise
         */
        isArrayTypeOf: function (array, type) {
            var isTypeOf = true;
            if (!this.isString(type)) {
                throw new TypeError("options.type is not a string");
            }
            if (!Array.isArray(array)) {
                throw new TypeError("options.array is not an array");
            }
            if (array.length === 0) {
                isTypeOf = false;
            }
            for (var i = 0, length = array.length; i < length; i++) {
                var o = array[i];
                if (typeof o !== type) {
                    isTypeOf = false;
                    break;
                }
            }
            return isTypeOf;
        },
        /**
          * Checks if all objects within array have the same instance
          * @public
          * @memberof TypeCheck
          * @throws {TypeError} - If array is not an array
          * @throws {TypeError} - If constructor is not a function
          * @param {Object[]} array - The array which objects shall be checked
          * @param {Function} fn - the constructor function
          * @returns {Boolean} - True if all elements have the same instance, false otherwise
          */
        areObjectsInstanceOf: function (array, fn) {
            if (!this.isArray(array)) {
                throw new TypeError("array is not an array");
            }
            if (!this.isFunction(fn)) {
                throw new TypeError("fn is not a function");
            }
            var i, o, length = array.length, result = true;
            for (i = 0; i < length; i++) {
                o = array[i];
                if (!this.isObject(o) || !this.isInstanceOf(o, fn)) {
                    result = false;
                    break;
                }
            }
            return result;
        },
        /**
         * Checks if the objects have are instances of the provided constructors
         * @public
         * @memberof TypeCheck
         * @throws {TypeError} - If array is not an array
         * @throws {TypeError} - If constructors is not an array
         * @param {Object[]} objects - The array which objects shall be checked
         * @param {Function[]} constructors - An array of constructor functions
         * @returns {Boolean} - True if all elements have the same instance, false otherwise
         */
        areObjectsInstancesOf: function (objects, constructors) {
            var i, j, o, length = objects.length, constructorLength = constructors.length, result = true, noConstructorMatched;
            if (!this.isArray(objects)) {
                throw new TypeError("objects is not an array");
            }
            if (!this.isArray(constructors)) {
                throw new TypeError("constructors is not an array");
            }
            if (!this.isArrayTypeOf(constructors, "function")) {
                throw new TypeError("constructors is not an array of constructor functions");
            }
            for (i = 0; i < length; i++) {
                o = objects[i];
                noConstructorMatched = true;
                for (j = 0; j < constructorLength; j++) {
                    if (!this.isObject(o)) {
                        break;
                    }
                    if (this.isInstanceOf(o, constructors[j])) {
                        noConstructorMatched = false;
                        break;
                    }
                }
                if (noConstructorMatched === true) {
                    result = false;
                    break;
                }
            }
            return result;
        },
        /**
         * Checks if child is an instance of parent
         * @public
         * @memberof TypeCheck
         * @throws {TypeError} - If child is not an object
         * @throws {TypeError} - If parent is not a function
         * @param {Object} child - The object which shall be checked
         * @param {Function} parent - The function which shall be the constructor
         * @returns {Boolean} - True if child is an instance of parent, false otherwise
         */
        isInstanceOf: function (child, parent) {
            if (!this.isObject(child)) {
                throw new TypeError("child is not an object");
            }
            if (!this.isFunction(parent)) {
                throw new TypeError("parent is not a function");
            }
            return child instanceof parent;
        },
        /**
         * Checks if the provided value is a value of the provided object which is used as an enum
         * @throws {TypeError} - If value is not a string or a number
         * @throws {TypeError} - If o is not an object
         * @param {String|Number} value - the value
         * @param {Object} o - the object which shall be checked
         * @returns {Boolean} - True if value is part of o, false otherwise
         */
        isEnumValue: function (value, o) {
            if (!this.isDefined(value)) {
                return false;
            }
            if (!this.isString(value) && !this.isNumber(value)) {
                throw new TypeError("value must be a String or a Number");
            }
            if (!this.isObject(o)) {
                throw new TypeError("o is not an object");
            }
            var keys = Object.keys(o), length = keys.length, i, isValue = false;
            for (i = 0; i < length; i++) {
                if (o[keys[i]] === value) {
                    isValue = true;
                    break;
                }
            }
            return isValue;
        }
    };
});