// jscs:disable
// jshint ignore:start
describe('jean-amd', function () {
    beforeEach(function (done) {
        $.getScript("../dist/jean-amd.js", function () { done(); });
    });
    describe("Methods", function () {
        it("define is available", function () {
            expect(define).not.toBeUndefined();
        });
        it("define.amd is available", function () {
            var d = 0;
            expect(define.amd).not.toBeUndefined();
        })
        it("require is available", function () {
            expect(require).not.toBeUndefined();
        });
    });
    describe("Modules without dependencies", function () {
        it("Defines module", function () {
            var i = 0;
            define("A", [], function () {
                i++;
                expect(i).toEqual(1);
                return { id: "A" };
            });
        });
        it("Defines multiple modules", function () {
            var i = 0;
            define("A", [], function () {
                i++;
                expect(i).toEqual(1);
                return { id: "A" };
            });
            define("B", [], function () {
                i++;
                expect(i).toEqual(2);
                return { id: "B" };
            });
            define("C", [], function () {
                i++;
                expect(i).toEqual(3);
                return { id: "C" };
            });
            define("D", [], function () {
                i++;
                expect(i).toEqual(4);
                return { id: "D" };
            });
        });
        it("Requires defined module", function () {
            define("A", [], function () {
                expect(true).toBe(true);
                return { id: "A" };
            });
            require(["A"], function (A) {
                expect(A).not.toBeUndefined();
                expect(A.id).toEqual("A");
            });
        });
        it("Requires multiple modules", function () {
            define("A", [], function () {
                return { id: "A" };
            });
            define("B", [], function () {
                return { id: "B" };
            });
            define("C", [], function () {
                return { id: "C" };
            });
            define("D", [], function () {
                return { id: "D" };
            });
            require(["A", "B", "C", "D"], function (A, B, C, D) {
                expect(A).not.toBeUndefined();
                expect(A.id).toEqual("A");
                expect(B).not.toBeUndefined();
                expect(B.id).toEqual("B");
                expect(C).not.toBeUndefined();
                expect(C.id).toEqual("C");
                expect(D).not.toBeUndefined();
                expect(D.id).toEqual("D");
            });
        });
        it("Requires module based on its id", function () {
            define("A", [], function () {
                return { id: "A" };
            });
            var A = require("A");
            expect(A.id).toEqual("A");
        })
        it("Loads defined modules in right order", function () {
            var counter = 0;
            define("A", [], function () {
                expect(counter).toEqual(0);
                counter++;
                return { id: "A" };
            });
            define("B", [], function () {
                expect(counter).toEqual(1);
                counter++;
                return { id: "B" };
            });
            define("C", [], function () {
                expect(counter).toEqual(2);
                counter++;
                return { id: "C" };
            });
            define("D", [], function () {
                expect(counter).toEqual(3);
                counter++;
                return { id: "D" };
            });
        });
    });
    describe("Modules with dependencies", function () {
        it("Defines module", function () {
            define("A", [], function () {
                return { id: "A" };
            });
            define("B", ["A"], function (A) {
                expect(A).not.toBeUndefined();
                expect(A.id).toEqual("A");
                return { id: "B" };
            });
        });
        it("Defines multiple modules", function () {
            define("A", [], function () {
                return { id: "A" };
            });
            define("B", ["A"], function (A) {
                expect(A).not.toBeUndefined();
                expect(A.id).toEqual("A");
                return { id: "B" };
            });
            define("C", ["A", "B"], function (A, B) {
                expect(A).not.toBeUndefined();
                expect(A.id).toEqual("A");
                expect(B).not.toBeUndefined();
                expect(B.id).toEqual("B");
                return { id: "C" };
            });
            define("D", ["A", "B", "C"], function (A, B, C) {
                expect(A).not.toBeUndefined();
                expect(A.id).toEqual("A");
                expect(B).not.toBeUndefined();
                expect(B.id).toEqual("B");
                expect(C).not.toBeUndefined();
                expect(C.id).toEqual("C");
                return { id: "D" };
            });
        });
        it("Requires defined module", function () {
            define("A", [], function () {
                return { id: "A" };
            });
            define("B", ["A"], function (A) {
                return { id: "B" };
            });
            require(["B"], function (B) {
                expect(B).not.toBeUndefined();
                expect(B.id).toEqual("B");
            });
        });
        it("Requires multiple defined modules", function () {
            define("A", [], function () {
                return { id: "A" };
            });
            define("B", ["A"], function (A) {
                return { id: "B" };
            });
            define("C", ["A", "B"], function (A, B) {
                return { id: "C" };
            });
            define("D", ["A", "B", "C"], function (A, B, C) {
                return { id: "D" };
            });
            require(["A", "B", "C", "D"], function (A, B, C, D) {
                expect(A).not.toBeUndefined();
                expect(A.id).toEqual("A");
                expect(B).not.toBeUndefined();
                expect(B.id).toEqual("B");
                expect(C).not.toBeUndefined();
                expect(C.id).toEqual("C");
                expect(D).not.toBeUndefined();
                expect(D.id).toEqual("D");
            });
        });
        it("Requires module based on its id", function () {
            define("A", [], function () {
                return { id: "A" };
            });
            define("B", ["A"], function () {
                return { id: "B" };
            })
            var B = require("B");
            expect(B.id).toEqual("B");
        })
        it("Loads defined modules in right order", function () {
            var counter = 0;
            define("A", [], function () {
                expect(counter).toEqual(0);
                counter++;
                return { id: "A" };
            });
            define("B", ["D"], function (D) {
                expect(counter).toEqual(2);
                counter++;
                return { id: "B" };
            });
            define("C", ["D"], function (D) {
                expect(counter).toEqual(3);
                counter++;
                return { id: "C" };
            });
            define("D", ["A"], function (A) {
                expect(counter).toEqual(1);
                counter++;
                return { id: "D" };
            });
        });
    });
    describe("Error", function () {
        it("Ignores a module, if its id is already in use", function () {
            define("A", [], function () {
                return { id: "A" };
            });
            spyOn(console, 'warn');
            define("A", [], function () {
                return { id: "A2" };
            });
            expect(console.warn).toHaveBeenCalled();
        });
        it("Ignores a module, if no dependency list is passed", function () {
            spyOn(console, 'warn');
            define("A", function () {
                return { id: "AFirst" };
            });
            expect(console.warn).toHaveBeenCalled();
            define("A", [], function () {
                return { id: "ASecond" };
            });
            require(["A"], function (A) {
                expect(A).not.toBeUndefined();
                expect(A.id).toEqual("ASecond");
            });
        });
        it("Throws exception, if a undefined module is required", function () {
            try {
                require(["A"], function () { });
            } catch (e) {
                expect(e instanceof Error).toBe(true);
            }
        });
        it("Throws exception, if multiple undefined modules are required", function () {
            try {
                require(["A", "B", "C"], function () { });
            } catch (e) {
                expect(e instanceof Error).toBe(true);
            }
        });
        it("Throws exception, if modules with circular dependencies are required", function (done) {
            define("A", ["B"], function (B) {
                return "A";
            });
            define("B", ["A"], function (A) {
                return "B";
            });
            try {
                require(["A", "B"], function (A, B) { });
            } catch (e) {
                expect(e instanceof Error).toBe(true);
                done();
            }
        });
        it("Throws exception, if modules with unresolved dependency is required", function () {
            define("A", [], function () {
                return { id: "A" };
            });
            define("C", ["A", "B", "D"], function (A, B, D) {
                return { id: "C" };
            });

            define("D", [], function () {
                return { id: "D" };
            });
            try {
                require(["C"], function (C) { });
            } catch (e) {
                expect(e instanceof Error).toBe(true);
            }
        });
        it("Provides an empty object, if a module dont provide a result value", function () {
            define("A", [], function () { });
            require(["A"], function (A) {
                expect(A).toEqual({});
            });
        });
    });
});

