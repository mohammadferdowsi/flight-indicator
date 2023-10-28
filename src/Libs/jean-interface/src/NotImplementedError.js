define([], function () {
    /**
     * Represents a error message for non implemented methods
     * @param {String} message - message of error
     */
    var NotImplementedError = function (message) {
        this.name = "NotImplementedError";
        this.message = (message || "Function must be implemented in Class");
    };
    NotImplementedError.prototype = Error.prototype; 
    return NotImplementedError;
}); 