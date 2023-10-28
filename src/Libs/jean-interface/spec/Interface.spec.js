define([
    "Interface",
    "NotImplementedError"
], function (Interface, NotImplementedError) {
    describe('Interface.spec.js', function () {
        describe("Interface", function () {
            describe("Interface.areMembersImplemented", function () {
                var A = function () { // jscs:ignore
                    this.a = "a";
                    this.b = "b";
                    this.c = "c";
                }, a = new A();
                it("Responds with true, if members are correctly implemented", function () {
                    expect(Interface.areMembersImplemented(["a", "b"], a)).toBe(true);
                });
                it("Throws TypeError, If instance is not an object", function () {
                    try {
                        Interface.areMembersImplemented(["a", "b", "c"], 1);
                    } catch (e) {
                        expect(e instanceof TypeError).toBe(true);
                    }
                });
                it("Throws TypeError, If memberList is no a string array", function () {
                    try {
                        Interface.areMembersImplemented([1, 2, 3], a);
                    } catch (e) {
                        expect(e instanceof TypeError).toBe(true);
                    }
                });
                it("Throws NotImplementedError, if a member is not implemented", function () {
                    try {
                        Interface.areMembersImplemented(["a", "b", "c", "d"], a);
                    } catch (e) {
                        expect(e instanceof NotImplementedError).toBe(true);
                    }
                });
                it("Throws NotImplementedError, which shows all members, which are not implemented", function () {
                    try {
                        Interface.areMembersImplemented(["a", "b", "c", "d", "aa", "bb", "cc"], a);
                    } catch (e) {
                        expect(e instanceof NotImplementedError).toBe(true);
                    }
                });
            });
            describe("Interface.areMethodsImplemented", function () {
                var methodNameOne = "methodOne",
                    methodNameTwo = "methodTwo",
                    methodNameThree = "methodThree";
                var Test = function () { }; // jscs:ignore
                Test.prototype[methodNameOne] = function () { }; // jscs:ignore
                Test.prototype[methodNameTwo] = function () { }; // jscs:ignore
                var test = new Test();
                it("Responds with true, if methods are correctly implemented", function () {
                    expect(Interface.areMethodsImplemented([methodNameOne, methodNameTwo], test)).toBe(true);
                });
                it("Throws TypeError, If instance is not an object", function () {
                    try {
                        Interface.areMethodsImplemented([methodNameOne, methodNameTwo, methodNameThree], 1);
                    } catch (e) {
                        expect(e instanceof TypeError).toBe(true);
                    }
                });
                it("Throws TypeError, If methodList is no a string array", function () {
                    try {
                        Interface.areMethodsImplemented([1, 2, 3], test);
                    } catch (e) {
                        expect(e instanceof TypeError).toBe(true);
                    }
                });
                it("Throws NotImplementedError, if a method is not implemented", function () {
                    try {
                        Interface.areMethodsImplemented([methodNameOne, methodNameTwo, methodNameThree], test);
                    } catch (e) {
                        expect(e instanceof NotImplementedError).toBe(true);
                    }
                });
                it("Throws NotImplementedError, which shows all methods, which are not implemented", function () {
                    try {
                        Interface.areMethodsImplemented(["a", "b", "c", "d"], test);
                    } catch (e) {
                        expect(e instanceof NotImplementedError).toBe(true);
                    }
                });
            });
        });

        describe("NotImplementedError", function () {
            var ie = {};
            beforeEach(function () {
                ie = new NotImplementedError();
            });
            it("Has all necessary members", function () {
                var numberOfMembers = 2;
                expect(Object.keys(ie).length).toEqual(numberOfMembers);
            });
        });
    });
});

