// jscs:disable
// jshint ignore:start
define([
    "Inheritance"
], function (Inheritance) {
    describe('Inheritance.spec.js', function () {
        var instance;
        describe("Inheritance", function () {
            it("All necessary methods are available", function () {
                expect(Inheritance).not.toBeUndefined();
                expect(Inheritance.inheritConstructor).not.toBeUndefined();
                expect(Inheritance.inheritPrototype).not.toBeUndefined();
            });
            it("instanceof tests passes", function(){
                var Testator = (function () {
                    var Testator = function () { };
                    Testator.prototype.MethodOne = function () { };
                    Testator.prototype.MethodTwo = function () { };
                    Testator.prototype.MethodThree = function () { };
                    return Testator;
                })(),
                Inheritor = (function () {
                    var Inheritor = function () {

                    };
                    Inheritance.inheritPrototype(Inheritor, Testator);
                    Inheritor.prototype.a = function(){};
                    Inheritor.prototype.b = function(){};
                    return Inheritor;
                })();
                var i = new Inheritor();
                expect(i instanceof Testator).toBe(true);
            })
        });
        describe("Inheritance.inheritConstructor", function () {
            var Testator, Inheritor;
            beforeEach(function () {
                Testator = (function () {
                    var Testator = function (options) {
                        this.id = "id";
                        this.name = "name";
                        this.address = options.address;
                    };
                    return Testator;
                })();
                Inheritor = {};
            });
            it("Inherits constructor members from testator", function () {
                Inheritor = (function () {
                    var Inheritor = function () {
                        var b = Inheritance.inheritConstructor(Testator, this, {});
                        expect(b).toBe(true);
                        expect(this.id).toEqual("id");
                        expect(this.name).toEqual("name");
                    };
                    return Inheritor;
                })();
                var i = new Inheritor();
            });
            it("Inherits initialised constructor members from testator", function () {
                Inheritor = (function () {
                    var Inheritor = function (address) {
                        var b = Inheritance.inheritConstructor(Testator, this, address);
                        expect(b).toBe(true);
                        expect(this.address).toEqual("address");
                    };
                    return Inheritor;
                })();
                var i = new Inheritor({ address: "address" });
            });
            it("Inherits constructor members from testator, also if undefined is passed", function () {
                Testator = (function () {
                    var Testator = function (options) {
                        this.id = "id";
                        this.name = "name";
                        this.address = options.address;
                    };
                    return Testator;
                })();
                Inheritor = (function () {
                    var Inheritor = function (address) {
                        var b = Inheritance.inheritConstructor(Testator, this, undefined);
                        expect(b).toBe(true);
                        expect(this.id).toEqual("id");
                    };
                    return Inheritor;
                })();
                var i = new Inheritor({ address: "address" });
            });
            it("Inherits constructor members from testator, also if null is passed", function () {
                Testator = (function () {
                    var Testator = function (options) {
                        this.id = "id";
                        this.name = "name";
                        this.address = options.address;
                    };
                    return Testator;
                })();
                Inheritor = (function () {
                    var Inheritor = function (address) {
                        var b = Inheritance.inheritConstructor(Testator, this, null);
                        expect(b).toBe(true);
                        expect(this.id).toEqual("id");
                    };
                    return Inheritor;
                })();
                var i = new Inheritor({ address: "address" });
            });
            it("Passes parameter to testator constructor", function () {
                Inheritor = (function () {
                    var Inheritor = function (options) {
                        var b = Inheritance.inheritConstructor(Testator, this, options);
                        expect(b).toBe(true);
                        expect(this.address).toEqual("adress");
                    };
                    return Inheritor;
                })();
                var i = new Inheritor({ address: "adress" });
            });
            it("Passes parameter list to testator constructor", function () {
                Testator = (function () {
                    var Testator = function (options, obj) {
                        expect(options).not.toBeUndefined();
                        expect(obj).not.toBeUndefined();
                    };
                    return Testator;
                })();
                Inheritor = (function () {
                    var Inheritor = function (options) {
                        var b = Inheritance.inheritConstructor(Testator, this, [options, {}]);
                        expect(b).toBe(true);
                    };
                    return Inheritor;
                })();
                var i = new Inheritor({});
            });
            it("Passes single parameter as parameter list to testator constructor", function () {
                Inheritor = (function () {
                    var Inheritor = function (address) {
                        var b = Inheritance.inheritConstructor(Testator, this, [address]);
                        expect(b).toBe(true);
                        expect(this.address).toEqual("address");
                    };
                    return Inheritor;
                })();
                var i = new Inheritor({ address: "address" });
            });
            it("Responds with false, if no testator is passed", function () {
                Inheritor = (function () {
                    var Inheritor = function (address) {
                        var b = Inheritance.inheritConstructor(undefined, this, {});
                        expect(b).toBe(false);
                    };
                    return Inheritor;
                })();
                var i = new Inheritor();
            });
            it("Responds with false, if no this is passed", function () {
                Inheritor = (function () {
                    var Inheritor = function (address) {
                        var b = Inheritance.inheritConstructor(Testator, undefined, {});
                        expect(b).toBe(false);
                    };
                    return Inheritor;
                })();
                var i = new Inheritor();
            });
        });
        describe("Inheritance.inheritPrototype", function () {
            var Testator, Inheritor;
            beforeEach(function () {
                Testator = (function () {
                    var Testator = function () { };
                    Testator.prototype.MethodOne = function () { };
                    Testator.prototype.MethodTwo = function () { };
                    Testator.prototype.MethodThree = function () { };
                    return Testator;
                })();
                Inheritor = {};
            });
            it("Inherits prototype methods from testator", function () {
                Inheritor = (function () {
                    var Inheritor = function () {

                    };
                    var b = Inheritance.inheritPrototype(Inheritor, Testator);
                    expect(b).toBe(true);
                    expect(Inheritor.prototype.MethodOne).not.toBeUndefined();
                    expect(Inheritor.prototype.MethodTwo).not.toBeUndefined();
                    expect(Inheritor.prototype.MethodThree).not.toBeUndefined();
                    expect(Inheritor.prototype.constructor).toEqual(Inheritor);
                    return Inheritor;
                })();
                var i = new Inheritor();
                expect(i.MethodOne).not.toBeUndefined();
                expect(i.MethodTwo).not.toBeUndefined();
                expect(i.MethodThree).not.toBeUndefined();
            });
            it("Responds with false, if no function is passed as inheritor", function () {
                Inheritor = (function () {
                    var Inheritor = function () { };
                    var b = Inheritance.inheritPrototype(undefined, Testator);
                    expect(b).toBe(false);
                    return Inheritor;
                })();
            });
            it("Responds with false, if no function is passed as inheritor", function () {
                Inheritor = (function () {
                    var Inheritor = function () { };
                    var b = Inheritance.inheritPrototype(Inheritor, undefined);
                    expect(b).toBe(false);
                    return Inheritor;
                })();
            });
        });
    });
});

