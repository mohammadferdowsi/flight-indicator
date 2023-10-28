// jscs:disable
// jshint ignore:start
define([
    "Failure"
], function (Failure) {
    describe('Failure.spec.js', function () {
        var instance;
        describe("Failure.throwError", function () {
            it("Throws error", function () {
                try {
                    Failure.throwError("msg");
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
        });
        describe("Failure.throwTypeError", function () {
            it("Throws type error", function () {
                try {
                    Failure.throwError("msg");
                } catch (e) {
                    expect(e instanceof Error).toBe(true);
                }
            });
        });
    });
});

